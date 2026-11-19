async function hashPassword(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

function getUsers() {
  const users = getStorage(STORAGE_KEYS.users, []);
  if (!users.some((user) => user.role === 'admin')) {
    users.push({ id: 'admin', name: 'អ្នកគ្រប់គ្រង', email: 'admin@reancomputer.com', passwordHash: 'PLACEHOLDER', role: 'admin', createdAt: new Date().toISOString() });
    setStorage(STORAGE_KEYS.users, users);
  }
  return users;
}

async function ensureAdminUser() {
  const users = getUsers();
  const admin = users.find((user) => user.role === 'admin');
  if (admin && admin.passwordHash === 'PLACEHOLDER') {
    admin.passwordHash = await hashPassword('admin123');
    setStorage(STORAGE_KEYS.users, users);
  }
}

function logUsage(type, details = {}) {
  const logs = getStorage(STORAGE_KEYS.usageLogs, []);
  const session = getStorage(STORAGE_KEYS.session, null);
  logs.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type,
    userId: session ? session.id : null,
    userName: session ? session.name : 'ភ្ញៀវ',
    createdAt: new Date().toISOString(),
    ...details
  });
  setStorage(STORAGE_KEYS.usageLogs, logs.slice(0, 1000));
}

ensureAdminUser();

const tabs = document.querySelectorAll('.auth-tab');
const loginForm = document.querySelector('#loginForm');
const signupForm = document.querySelector('#signupForm');

tabs.forEach((tab) => tab.addEventListener('click', () => {
  tabs.forEach((item) => item.classList.remove('active'));
  tab.classList.add('active');
  const signup = tab.dataset.authTab === 'signup';
  loginForm.classList.toggle('hidden', signup);
  signupForm.classList.toggle('hidden', !signup);
}));

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const message = document.querySelector('#signupMessage');
  const name = document.querySelector('#signupName').value.trim();
  const email = document.querySelector('#signupEmail').value.trim().toLowerCase();
  const password = document.querySelector('#signupPassword').value;
  const users = getUsers();
  if (users.some((user) => user.email === email)) {
    message.innerHTML = '<div class="alert alert-error">អ៊ីមែលនេះបានចុះឈ្មោះរួចហើយ។</div>';
    return;
  }
  const user = { id: `user-${Date.now()}`, name, email, passwordHash: await hashPassword(password), role: 'student', createdAt: new Date().toISOString() };
  users.push(user);
  setStorage(STORAGE_KEYS.users, users);
  setStorage(STORAGE_KEYS.session, { id: user.id, name: user.name, email: user.email, role: user.role });
  logUsage('signup', { email });
  window.location.href = 'courses.html';
});

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const message = document.querySelector('#loginMessage');
  const email = document.querySelector('#loginEmail').value.trim().toLowerCase();
  const password = document.querySelector('#loginPassword').value;
  await ensureAdminUser();
  const passwordHash = await hashPassword(password);
  const user = getUsers().find((item) => item.email === email && item.passwordHash === passwordHash);
  if (!user) {
    message.innerHTML = '<div class="alert alert-error">អ៊ីមែល ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ។</div>';
    return;
  }
  setStorage(STORAGE_KEYS.session, { id: user.id, name: user.name, email: user.email, role: user.role });
  logUsage('login', { email });
  window.location.href = user.role === 'admin' ? 'admin.html' : 'courses.html';
});
