window.reanSupabase = {
  url: 'https://mcgkpawdwrowmouqekks.supabase.co',
  key: 'sb_publishable_kjd3oKCbJO36bTUMB-h2pQ_pqeXvNWr',

  headers(extra = {}) {
    return {
      apikey: this.key,
      Authorization: `Bearer ${this.key}`,
      ...extra
    };
  },

  async request(path, options = {}) {
    const response = await fetch(`${this.url}${path}`, {
      ...options,
      headers: this.headers(options.headers || {})
    });
    if (!response.ok) {
      const body = await response.text();
      throw new Error(body || `Supabase request failed (${response.status})`);
    }
    if (response.status === 204) return null;
    const text = await response.text();
    return text ? JSON.parse(text) : null;
  },

  async getCategories() {
    return this.request('/rest/v1/categories?select=*&order=created_at.asc');
  },

  async createCategory(category) {
    return this.request('/rest/v1/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Prefer: 'return=representation' },
      body: JSON.stringify(category)
    });
  },

  async deleteCategory(id) {
    await this.request(`/rest/v1/categories?id=eq.${encodeURIComponent(id)}`, { method: 'DELETE' });
  },

  async getVideos() {
    return this.request('/rest/v1/videos?select=*&order=created_at.desc');
  },

  async createVideo(video) {
    return this.request('/rest/v1/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Prefer: 'return=representation' },
      body: JSON.stringify(video)
    });
  },

  async deleteVideo(id) {
    await this.request(`/rest/v1/videos?id=eq.${encodeURIComponent(id)}`, { method: 'DELETE' });
  },

  async uploadVideo(file) {
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
    const path = `${Date.now()}-${safeName}`;
    await this.request(`/storage/v1/object/videos/${encodeURIComponent(path)}`, {
      method: 'POST',
      headers: { 'Content-Type': file.type || 'application/octet-stream', 'x-upsert': 'true' },
      body: file
    });
    return {
      path,
      url: `${this.url}/storage/v1/object/public/videos/${encodeURIComponent(path)}`
    };
  },

  async deleteVideoFile(path) {
    if (!path) return;
    await this.request('/storage/v1/object/videos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prefixes: [path] })
    });
  }
};
