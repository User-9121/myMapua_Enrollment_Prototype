(function () {
  const links = [
    { id: 'course', label: 'Manage Course', href: 'manage-course.html', icon: 'course' },
    { id: 'section', label: 'Manage Section', href: 'manage-section.html', icon: 'section' },
    { id: 'finalization', label: 'Finalization', href: 'payments.html', icon: 'finalization' },
    { id: 'statement', label: 'Statement of account', href: 'statement-of-account.html', icon: 'statement' },
    { id: 'history', label: 'Payment History', href: 'payment-history.html', icon: 'history' }
  ];

  const icons = {
    home: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><path d="M8 1.5 L1 8 L3 8 L3 14 L7 14 L7 10 L9 10 L9 14 L13 14 L13 8 L15 8 Z" fill="#c68a4c" stroke="#5c3b1e" stroke-width="0.8"/><polygon points="8,1 15.5,7.5 14,8.5 8,3 2,8.5 0.5,7.5" fill="#c63d2b"/><rect x="9.5" y="5.5" width="2" height="2" fill="#5dade2"/></svg>',
    profile: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><rect x="1" y="2" width="14" height="11" rx="1" fill="#e8edf2" stroke="#4a6572"/><rect x="2.5" y="4" width="4" height="4.5" fill="#3498db"/><path d="M8 4.5h5M8 7h5M3 10.5h10" stroke="#333"/></svg>',
    enrollment: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><rect x="2" y="1" width="11" height="13.5" fill="#fff" stroke="#5d6d7e"/><path d="M4 4h6M4 7h6M4 10h4" stroke="#34495e"/></svg>',
    bills: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><rect x="2" y="4" width="12" height="8" rx="1" fill="#f9e79f" stroke="#b7950b"/><circle cx="8" cy="8" r="2" fill="#f1c40f" stroke="#b7950b"/></svg>',
    services: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="3.5" fill="#bdc3c7" stroke="#34495e"/><path d="M8 1v3M8 12v3M1 8h3M12 8h3" stroke="#34495e" stroke-width="1.8"/></svg>',
    feedback: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><path d="M2 3Q2 1 4 1h8q2 0 2 2v6q0 2-2 2H5l-3 3z" fill="#fcf3cf" stroke="#f39c12"/></svg>',
    course: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><polygon points="8,1 15,4 8,7 1,4" fill="#f5b041" stroke="#b9770e"/><polygon points="1,4 8,7 8,14 1,11" fill="#d68910" stroke="#b9770e"/><polygon points="15,4 8,7 8,14 15,11" fill="#f8c471" stroke="#b9770e"/></svg>',
    section: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><rect x="1" y="2" width="14" height="11" fill="#fff" stroke="#2980b9"/><rect x="1" y="2" width="14" height="3" fill="#3498db"/><path d="M5.5 2v11M10.5 2v11" stroke="#2980b9"/></svg>',
    finalization: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><rect x="2" y="2" width="12" height="12" rx="1.5" fill="#e8f8f5" stroke="#1abc9c"/><path d="m4 8 3 3 5-7" fill="none" stroke="#16a085" stroke-width="1.8"/></svg>',
    statement: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><rect x="2" y="1.5" width="11" height="13" fill="#fff" stroke="#7f8c8d"/><path d="M4 4.5h7M4 7h7M4 9.5h7" stroke="#333"/></svg>',
    history: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><circle cx="7" cy="8" r="5" fill="#fff" stroke="#34495e"/><path d="M7 5v3l2.5 1" fill="none" stroke="#e74c3c"/><circle cx="12" cy="11.5" r="2.5" fill="#f39c12"/></svg>',
    help: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.5" fill="#f9e79f" stroke="#d4ac0d"/><text x="6" y="11" font-size="8" font-weight="bold" fill="#7d6608">?</text></svg>',
    signout: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><rect x="1" y="2" width="6" height="12" fill="#566573"/><path d="m7 2 7 2v8l-7 2z" fill="#a0522d" stroke="#5c3b1e"/><circle cx="9" cy="8" r=".8" fill="#f1c40f"/></svg>',
    document: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><rect x="2" y="1" width="11" height="14" fill="#fff" stroke="#7f8c8d"/><path d="M4 5h7M4 8h7M4 11h5" stroke="#34495e"/></svg>',
    download: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><path d="M8 1v9m-3-3 3 3 3-3M2 12v2h12v-2" fill="none" stroke="#229954" stroke-width="1.6"/></svg>',
    email: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><rect x="1.5" y="3" width="13" height="10" fill="#fef9e7" stroke="#d68910"/><path d="m2 4 6 5 6-5" fill="none" stroke="#d68910"/></svg>',
    feedback: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><path d="M2 3Q2 1 4 1h8q2 0 2 2v6q0 2-2 2H5l-3 3z" fill="#fcf3cf" stroke="#f39c12"/></svg>',
    password: '<svg class="nav-icon-svg" viewBox="0 0 16 16"><circle cx="6" cy="6" r="3.5" fill="none" stroke="#d4ac0d" stroke-width="2"/><path d="m9 7.5 5 5-1.5 1.5-1-1v-1.5H10l-1-1" fill="none" stroke="#b7950b" stroke-width="1.8"/></svg>'
  };

  function renderNavigation(activePage) {
    const renderLink = link => `<li class="${activePage === link.id ? 'active-page' : ''}"><a href="${link.href}">${icons[link.icon]}<span>${link.label}</span></a></li>`;
    const enrollmentLinks = links.slice(0, 3).map(renderLink).join('');
    const billingLinks = links.slice(3).map(renderLink).join('');
    const sidebar = document.getElementById('billingSidebar');
    const mobileNav = document.getElementById('billingMobileNav');

    if (sidebar) {
      sidebar.innerHTML = `
        <ul class="nav-root">
          <li class="nav-entry"><a href="home.html">${icons.home}<span class="label">My Home</span></a></li>
          <li class="nav-group">
            <div class="group-header" onclick="window.myMapuaPaymentFlow.toggleGroup(this)">${icons.profile}<span class="label">Profile</span><span class="expander plus">+</span></div>
            <ul class="sub-menu is-hidden"><li><a href="#">${icons.profile}<span>My Contact Info</span></a></li><li><a href="#">${icons.document}<span>My Personal Data</span></a></li><li><a href="#">${icons.statement}<span>My Grades</span></a></li><li><a href="#">${icons.history}<span>My Schedule</span></a></li><li><a href="#">${icons.document}<span>My Curriculum</span></a></li><li><a href="#">${icons.email}<span>My Office 365</span></a></li><li><a href="#">${icons.password}<span>Reset My Password</span></a></li><li><a href="#">${icons.profile}<span>Reset Info Update</span></a></li></ul>
          </li>
          <li class="nav-group">
            <div class="group-header" onclick="window.myMapuaPaymentFlow.toggleGroup(this)">${icons.enrollment}<span class="label">Enrollment</span><span class="expander plus">+</span></div>
            <ul class="sub-menu is-hidden"><li><a href="#">${icons.document}<span>Online Enrollment User Manual</span></a></li>${enrollmentLinks}<li><a href="#">${icons.document}<span>Course Request Forms</span></a></li></ul>
          </li>
          <li class="nav-group">
            <div class="group-header" onclick="window.myMapuaPaymentFlow.toggleGroup(this)">${icons.bills}<span class="label">Bills &amp; Payments</span><span class="expander minus">-</span></div>
            <ul class="sub-menu"><li><a href="#">${icons.bills}<span>Guidelines for Bukas Installment Plan</span></a></li>${billingLinks}</ul>
          </li>
          <li class="nav-group"><div class="group-header" onclick="window.myMapuaPaymentFlow.toggleGroup(this)">${icons.services}<span class="label">Services</span><span class="expander plus">+</span></div><ul class="sub-menu is-hidden"><li><a href="#">${icons.document}<span>Academic Documents</span></a></li><li><a href="#">${icons.download}<span>Downloadable Forms</span></a></li></ul></li>
          <li class="nav-group"><div class="group-header" onclick="window.myMapuaPaymentFlow.toggleGroup(this)">${icons.feedback}<span class="label">Concern/Feedback</span><span class="expander plus">+</span></div><ul class="sub-menu is-hidden"><li><a href="#">${icons.email}<span>Email myCounselor</span></a></li><li><a href="#">${icons.feedback}<span>Service Feedback</span></a></li></ul></li>
          <li class="nav-entry"><a href="#">${icons.help}<span class="label">Help</span></a></li>
          <li class="nav-entry"><a href="login.html" data-signout>${icons.signout}<span class="label">Sign Out</span></a></li>
        </ul>`;
    }

    if (mobileNav) {
      mobileNav.innerHTML = links.map(link => `<a href="${link.href}">${link.label}</a>`).join('');
    }
  }

  function toggleGroup(header) {
    const menu = header.nextElementSibling;
    const expander = header.querySelector('.expander');
    const isHidden = menu.classList.toggle('is-hidden');
    expander.textContent = isHidden ? '+' : '-';
    expander.className = `expander ${isHidden ? 'plus' : 'minus'}`;
  }

  function setActiveGroup(activeGroupId) {
    document.querySelectorAll('.sidebar-nav .nav-group').forEach(group => {
      const menu = group.querySelector('.sub-menu');
      const expander = group.querySelector('.expander');
      const isActive = menu && menu.id === activeGroupId;
      if (!menu || !expander) return;
      menu.classList.toggle('is-hidden', !isActive);
      expander.textContent = isActive ? '-' : '+';
      expander.className = `expander ${isActive ? 'minus' : 'plus'}`;
    });
  }

  function updateExistingNavigation() {
    const routes = {
      'statement of account': 'statement-of-account.html',
      'payment history': 'payment-history.html'
    };
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
      const label = link.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
      if (routes[label]) link.href = routes[label];
    });
  }

  window.myMapuaPaymentFlow = { renderNavigation, toggleGroup, setActiveGroup, updateExistingNavigation };
  updateExistingNavigation();
})();
