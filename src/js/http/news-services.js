const API_KEY = '7734077da0b34d1285dbde6bbf809ceb';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};
export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
    return fetch(url, options)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();
        return data.articles;
      });
  }

  resetPage() {
    this.page = 1;
  }
  incrementPage() {
    this.page += 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
