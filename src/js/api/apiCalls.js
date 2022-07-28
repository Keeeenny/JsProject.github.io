import error from '../components/errorMessage.js';
import isLoading from '../components/loadingStatus.js';
import fetcher from './dataFetcher.js';
import idsStorer from '../components/buttonEvent.js';

const url = ('https://hacker-news.firebaseio.com/v0/newstories.json');
let newsId
let firstTenIds

async function init(){
  isLoading(true)

  try {
    const response = await fetch(url)
    newsId = await response.json()
    firstTenIds = newsId.splice(0, 10)

    fetcher(firstTenIds)
    idsStorer(newsId)

    return newsId
  } catch (err) {
    error()

  } finally {
    isLoading(false)
  }
}

export default init
