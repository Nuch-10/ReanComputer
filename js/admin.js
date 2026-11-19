const session = getStorage(STORAGE_KEYS.session, null);
const adminApp = document.querySelector('#adminApp');
const adminGuard = document.querySelector('#adminGuard');

if (!session || session.role !== 'admin') {
  adminGuard.innerHTML = '<div class="alert alert-error">អ្នកត្រូវចូលជាអ្នកគ្រប់គ្រង។ <a href="auth.html">ចូលប្រើប្រាស់</a></div>';
} else {
  adminApp.classList.remove('hidden');
  initializeAdmin();
}

function initializeAdmin() {
  ensureDefaults();
  bindAdminEvents();
  renderAll();
}

function ensureDefaults() {
  let categories = getStorage(STORAGE_KEYS.categories, null);
  if (!categories) {
    categories = courses.map((course) => ({ id: course.id, name: course.title, createdAt: new Date().toISOString() }));
    setStorage(STORAGE_KEYS.categories, categories);
  }
  if (!getStorage(STORAGE_KEYS.videos, null)) setStorage(STORAGE_KEYS.videos, []);
}

function bindAdminEvents() {
  document.querySelector('#adminLogout').addEventListener('click', () => {
    setStorage(STORAGE_KEYS.session, null);
    window.location.href = 'auth.html';
  });

  document.querySelector('#categoryForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('#categoryName');
    const name = input.value.trim();
    if (!name) return;
    const categories = getStorage(STORAGE_KEYS.categories, []);
    categories.push({ id: `category-${Date.now()}`, name, createdAt: new Date().toISOString() });
    setStorage(STORAGE_KEYS.categories, categories);
    input.value = '';
    renderAll();
  });

  document.querySelector('#videoForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.querySelector('#videoTitle').value.trim();
    const categoryId = document.querySelector('#videoCategory').value;
    const url = document.querySelector('#videoUrl').value.trim();
    const file = document.querySelector('#videoFile').files[0];
    const message = document.querySelector('#videoMessage');
    if (!title || (!url && !file)) {
      message.innerHTML = '<div class="alert alert-error">សូមដាក់ចំណងជើង និងតំណ ឬឯកសារវីដេអូ។</div>';
      return;
    }

    let source = url;
    let blobId = null;
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        message.innerHTML = '<div class="alert alert-error">ឯកសារមានទំហំធំជាង 100MB។ សូមប្រើតំណវីដេអូ។</div>';
        return;
      }
      blobId = `video-${Date.now()}`;
      await saveVideoBlob(blobId, file);
      source = '';
    }

    const videos = getStorage(STORAGE_KEYS.videos, []);
    videos.unshift({ id: `video-${Date.now()}`, title, categoryId, source, blobId, fileName: file ? file.name : '', createdAt: new Date().toISOString() });
    setStorage(STORAGE_KEYS.videos, videos);
    document.querySelector('#videoForm').reset();
    message.innerHTML = '<div class="alert alert-success">បានរក្សាទុកវីដេអូ។</div>';
    renderAll();
  });
}

function openVideoDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('ReanComputerVideos', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('files');
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveVideoBlob(id, file) {
  const db = await openVideoDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction('files', 'readwrite');
    tx.objectStore('files').put(file, id);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

async function getVideoBlob(id) {
  const db = await openVideoDb();
  const blob = await new Promise((resolve, reject) => {
    const tx = db.transaction('files', 'readonly');
    const request = tx.objectStore('files').get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return blob;
}

async function deleteVideoBlob(id) {
  if (!id) return;
  const db = await openVideoDb();
  await new Promise((resolve) => {
    const tx = db.transaction('files', 'readwrite');
    tx.objectStore('files').delete(id);
    tx.oncomplete = resolve;
  });
  db.close();
}

function renderAll() {
  renderStats();
  renderCategories();
  renderVideos();
  renderUsers();
  renderUsage();
}

function renderStats() {
  const users = getStorage(STORAGE_KEYS.users, []).filter((user) => user.role === 'student');
  const categories = getStorage(STORAGE_KEYS.categories, []);
  const videos = getStorage(STORAGE_KEYS.videos, []);
  const usage = getStorage(STORAGE_KEYS.usageLogs, []);
  document.querySelector('#statUsers').textContent = users.length;
  document.querySelector('#statCategories').textContent = categories.length;
  document.querySelector('#statVideos').textContent = videos.length;
  document.querySelector('#statUsage').textContent = usage.length;
}

function renderCategories() {
  const categories = getStorage(STORAGE_KEYS.categories, []);
  const select = document.querySelector('#videoCategory');
  select.innerHTML = categories.map((category) => `<option value="${category.id}">${escapeHtml(category.name)}</option>`).join('');
  document.querySelector('#categoryList').innerHTML = categories.map((category) => `
    <div class="admin-row"><span>${escapeHtml(category.name)}</span><button type="button" class="admin-delete" data-delete-category="${category.id}" aria-label="លុប"><i class="fa-solid fa-trash"></i></button></div>
  `).join('');

  document.querySelectorAll('[data-delete-category]').forEach((button) => button.addEventListener('click', () => {
    const id = button.dataset.deleteCategory;
    setStorage(STORAGE_KEYS.categories, getStorage(STORAGE_KEYS.categories, []).filter((item) => item.id !== id));
    setStorage(STORAGE_KEYS.videos, getStorage(STORAGE_KEYS.videos, []).filter((item) => item.categoryId !== id));
    renderAll();
  }));
}

function renderVideos() {
  const categories = getStorage(STORAGE_KEYS.categories, []);
  const videos = getStorage(STORAGE_KEYS.videos, []);
  document.querySelector('#videoList').innerHTML = videos.length ? videos.map((video) => {
    const category = categories.find((item) => item.id === video.categoryId);
    return `<div class="admin-row admin-video-row"><div><strong>${escapeHtml(video.title)}</strong><small>${escapeHtml(category ? category.name : 'មិនមានប្រភេទ')}</small></div><button type="button" class="admin-delete" data-delete-video="${video.id}" data-delete-blobby="${video.blobId || ''}" aria-label="លុប"><i class="fa-solid fa-trash"></i></button></div>`;
  }).join('') : '<div class="empty-state">មិនទាន់មានវីដេអូ។</div>';

  document.querySelectorAll('[data-delete-video]').forEach((button) => button.addEventListener('click', async () => {
    const id = button.dataset.deleteVideo;
    await deleteVideoBlob(button.dataset.deleteBlobby);
    setStorage(STORAGE_KEYS.videos, getStorage(STORAGE_KEYS.videos, []).filter((item) => item.id !== id));
    renderAll();
  }));
}

function renderUsers() {
  const users = getStorage(STORAGE_KEYS.users, []).filter((user) => user.role === 'student');
  document.querySelector('#studentList').innerHTML = users.length ? users.map((user) => `
    <div class="admin-row"><div><strong>${escapeHtml(user.name)}</strong><small>${escapeHtml(user.email)}</small></div><span class="label success">សិស្ស</span></div>
  `).join('') : '<div class="empty-state">មិនទាន់មានសិស្សចុះឈ្មោះ។</div>';
}

function renderUsage() {
  const logs = getStorage(STORAGE_KEYS.usageLogs, []).slice(0, 12);
  document.querySelector('#usageList').innerHTML = logs.length ? logs.map((log) => `
    <div class="usage-row"><i class="fa-solid ${log.type === 'login' ? 'fa-right-to-bracket' : log.type === 'lesson' ? 'fa-circle-check' : log.type === 'video' ? 'fa-play' : 'fa-user-plus'}"></i><div><strong>${escapeHtml(log.userName)}</strong><small>${escapeHtml(log.type)} · ${new Date(log.createdAt).toLocaleString('km-KH')}</small></div></div>
  `).join('') : '<div class="empty-state">មិនទាន់មានសកម្មភាព។</div>';
}

function escapeHtml(value) {
  const element = document.createElement('span');
  element.textContent = value || '';
  return element.innerHTML;
}
