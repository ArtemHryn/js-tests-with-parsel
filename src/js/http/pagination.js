import articlesTpl from '../../templates/articles.hbs';
import '../../css/common.scss';
import NewsApiService from './news-services';
import LoadMoreBtn from './loadMoreBtn';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  //   loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiServices = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function onSearch(e) {
  e.preventDefault();
  clearArticlesContainer();
  loadMoreBtn.show();
  newsApiServices.resetPage();
  newsApiServices.query = e.currentTarget.elements.query.value;
  fetchArticles();
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

function fetchArticles() {
  loadMoreBtn.disable();

  newsApiServices.fetchArticles().then(articles => {
    appendArticlesMarkup(articles);
    loadMoreBtn.enable();
  });
}
