import fetcher from '../api/dataFetcher.js';

const btn = document.getElementById('button');
let idList

btn.addEventListener('click', appendNextNews)

function idsStorer(newsIds){
  idList = newsIds
}

function appendNextNews() {
    const firstTenIds = idList.splice(0, 10)
    fetcher(firstTenIds)
}


export default idsStorer
