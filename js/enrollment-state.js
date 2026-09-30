(function () {
  const storageKey = 'myMapuaEnrollment';
  const billingKey = 'myMapuaBilling';
  const paymentHistoryKey = 'myMapuaPaidPayments';
  const defaultCourses = [
    { code: 'CSS140-1', title: 'ARTIFICIAL INTELLIGENCE', units: 3, section: '' },
    { code: 'ITS142P', title: 'HUMAN COMPUTER INTERACTION 2', units: 3, section: 'BM11' },
    { code: 'ITS152P', title: 'SYSTEMS INTEGRATION AND ARCHITECTURE 2', units: 3, section: 'BM11' },
    { code: 'ITS165-1', title: 'INFORMATION SECURITY AND ASSURANCE 1', units: 3, section: '' },
    { code: 'MATH181', title: 'QUANTITATIVE METHODS', units: 3, section: '' },
    { code: 'ISS181-02', title: 'ENTERPRISE DATA MANAGEMENT 2', units: 3, section: 'BM10' }
  ];

  function saveCourses(courses) {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ courses }));
      return true;
    } catch {
      return false;
    }
  }

  function clearSession() {
    try {
      localStorage.removeItem(storageKey);
      localStorage.removeItem(billingKey);
      localStorage.removeItem(paymentHistoryKey);
      localStorage.removeItem('userEmail');
    } catch {
      // Continue to sign-in if browser storage is unavailable.
    }
  }

  function readStoredValue(key, fallback) {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : fallback;
    } catch {
      return fallback;
    }
  }

  function writeStoredValue(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  function getBilling() {
    return readStoredValue(billingKey, null);
  }

  function saveBilling(billing) {
    return writeStoredValue(billingKey, billing);
  }

  function getPaidPayments() {
    const payments = readStoredValue(paymentHistoryKey, []);
    return Array.isArray(payments) ? payments.filter(payment => payment.status === 'paid') : [];
  }

  function createTransactionNumber() {
    const timestamp = new Date().toISOString().replace(/\D/g, '').slice(0, 14);
    return `${timestamp}${String(Math.floor(Math.random() * 100000000)).padStart(8, '0')}`;
  }

  function markBillingPaid(method) {
    const billing = getBilling();
    if (!billing || billing.status !== 'pending') {
      return { ok: false, reason: 'There is no finalized balance waiting for payment.' };
    }

    const schedule = Array.isArray(billing.schedule) && billing.schedule.length > 0
      ? billing.schedule
      : [{ month: 1, dueDate: new Date().toISOString(), amount: billing.amount }];
    const installmentIndex = Number(billing.paidInstallments || 0);
    const installment = schedule[installmentIndex];
    if (!installment) {
      return { ok: false, reason: 'There are no remaining installments to pay.' };
    }

    const paidPayment = {
      ...billing,
      status: 'paid',
      amount: Number(installment.amount),
      installmentNumber: installmentIndex + 1,
      installmentCount: schedule.length,
      dueDate: installment.dueDate,
      paymentMethod: method,
      paidAt: new Date().toISOString(),
      transactionNumber: createTransactionNumber()
    };
    const payments = getPaidPayments();
    payments.unshift(paidPayment);
    const nextInstallment = installmentIndex + 1;
    const remainingBalance = Math.max(0, Math.round((Number(billing.amount) - schedule
      .slice(0, nextInstallment)
      .reduce((total, item) => total + Number(item.amount), 0)) * 100) / 100);
    const updatedBilling = {
      ...billing,
      paidInstallments: nextInstallment,
      balance: remainingBalance,
      status: nextInstallment >= schedule.length ? 'paid' : 'pending',
      lastPaidAt: paidPayment.paidAt
    };

    if (!writeStoredValue(paymentHistoryKey, payments) || !saveBilling(updatedBilling)) {
      return { ok: false, reason: 'Browser storage is unavailable, so this payment could not be recorded.' };
    }
    return { ok: true, payment: paidPayment, billing: updatedBilling };
  }

  function getCourses() {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed.courses)) return parsed.courses;
      }
    } catch {
      // Use the built-in enrollment when storage is unavailable or invalid.
    }

    const courses = defaultCourses.map(course => ({ ...course }));
    saveCourses(courses);
    return courses;
  }

  function showNotice(message, type = 'success') {
    const prefix = type === 'error' ? 'Unable to complete action' : 'Action completed';
    window.alert(`${prefix}: ${message}`);
  }

  window.myMapuaEnrollment = {
    storageKey,
    billingKey,
    paymentHistoryKey,
    getCourses,
    saveCourses,
    getBilling,
    saveBilling,
    getPaidPayments,
    markBillingPaid,
    clearSession,
    showNotice
  };

  document.addEventListener('click', event => {
    const signOutLink = event.target.closest('[data-signout]');
    if (signOutLink) clearSession();
  });
})();