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
