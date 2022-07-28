import error from '../components/errorMessage.js';
import isLoading from '../components/loadingStatus.js';
import append from '../dataProcessor/appendData.js';

async function fetcher(loadedData){

  isLoading(true)

  for (let value of loadedData){
    try {
      const newsUrl = await fetch (`https://hacker-news.firebaseio.com/v0/item/${value}.json`)
      const response = await newsUrl.json()
      append(response)

    } catch (err){
      error(err)
      console.log(err)

    } finally {
      isLoading(false)

    }
  }
}



export default fetcher
