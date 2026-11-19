document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const darkMode = getStorage(STORAGE_KEYS.darkMode, false);
  if (darkMode) {
    body.classList.add('dark-mode');
  }

  const toggle = document.querySelector('#themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark-mode');
      setStorage(STORAGE_KEYS.darkMode, isDark);
    });
  }

  const navActions = document.querySelector('.nav-actions');
  if (navActions && !document.querySelector('[data-account-control]')) {
    const session = getStorage(STORAGE_KEYS.session, null);
    const account = document.createElement(session ? 'div' : 'a');
    account.setAttribute('data-account-control', 'true');
    if (session) {
      account.className = 'account-menu';
      account.innerHTML = `<button type="button" class="account-button" aria-label="គណនី"><i class="fa-solid fa-user-circle"></i><span>${session.name}</span></button><div class="account-dropdown">${session.role === 'admin' ? '<a href="admin.html"><i class="fa-solid fa-gauge"></i> ផ្ទាំងគ្រប់គ្រង</a>' : '<a href="progress.html"><i class="fa-solid fa-chart-line"></i> វឌ្ឍនភាព</a>'}<button type="button" id="logoutButton"><i class="fa-solid fa-right-from-bracket"></i> ចេញ</button></div>`;
      const button = account.querySelector('.account-button');
      button.addEventListener('click', () => account.classList.toggle('open'));
      account.querySelector('#logoutButton').addEventListener('click', () => {
        setStorage(STORAGE_KEYS.session, null);
        window.location.href = 'auth.html';
      });
    } else {
      account.className = 'btn btn-secondary account-login';
      account.href = 'auth.html';
      account.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> ចូល';
    }
    navActions.prepend(account);
  }

  const menuButton = document.querySelector('.mobile-menu-toggle');
  const navPanel = document.querySelector('.nav-panel');
  if (menuButton && navPanel) {
    menuButton.addEventListener('click', () => {
      navPanel.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', navPanel.classList.contains('open'));
    });
  }

  const currentPage = body.dataset.page || 'home';
  document.querySelectorAll('[data-nav]').forEach((link) => {
    const page = link.getAttribute('data-nav');
    if (page === currentPage) link.classList.add('active');
  });

  const searchInput = document.querySelector('#globalSearch');
  const resultsBox = document.querySelector('#searchResults');
  if (searchInput && resultsBox) {
    searchInput.addEventListener('input', (event) => {
      const query = event.target.value.trim().toLowerCase();
      if (!query) {
        resultsBox.classList.remove('visible');
        resultsBox.innerHTML = '';
        return;
      }

      const matches = searchIndex.filter((item) => item.title.toLowerCase().includes(query)).slice(0, 6);
      if (!matches.length) {
        resultsBox.innerHTML = '<div class="empty-state" style="padding:12px;">មិនទាន់មានលទ្ធផលស្វែងរក។ សូមព្យាយាមប្រើពាក្យផ្សេងទៀត។</div>';
        resultsBox.classList.add('visible');
        return;
      }

      resultsBox.innerHTML = matches.map((item) => `
        <a href="${item.url}">${item.title}</a>
      `).join('');
      resultsBox.classList.add('visible');
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.search-wrap')) {
        resultsBox.classList.remove('visible');
      }
    });
  }
});
