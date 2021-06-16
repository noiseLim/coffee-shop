export default class ShopService {
  _apiBase = 'http://localhost:3001';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getProductItems(searchValue) {
    return await this.getResource(`/products?q=${searchValue}`);
  }
}
