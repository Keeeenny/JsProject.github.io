import error from "../components/errorMessage.js";
import isLoading from "../components/loadingStatus.js";
import append from "../dataProcessor/appendData.js";

async function fetcher(loadedData) {
  isLoading(true);

  const promises = loadedData.map(async (value) => {
    try {
      const newsUrl = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${value}.json`
      );
      const response = await newsUrl.json();
      return response;
    } catch (err) {
      error(err);
      console.log(err);
      return null;
    }
  });

  try {
    const responses = await Promise.all(promises);
    responses.forEach((response) => append(response));
  } catch (err) {
    console.error(err);
  } finally {
    isLoading(false);
  }
}

export default fetcher;
