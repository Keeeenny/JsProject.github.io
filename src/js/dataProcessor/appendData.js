import timeCalculator from './unixTimeConverter.js';

const newsSection = document.getElementById('newsSection');



async function append(data){
  const article = document.createElement('article');
  const horizontalRule = document.createElement('hr');

  //Title
  const title = document.createElement('h4');
  title.innerText = data.title

  //Content
  const link = document.createElement('a');
  const text = document.createElement('p');
  const textContainer = document.createElement('div');

  if (data.url !== undefined) {
    link.innerText = data.url

    article.append(link)

    link.setAttribute('href', data.url)
    link.setAttribute('target', '_blank')

  } else {
    article.append(textContainer)
    textContainer.append(text)

    text.setAttribute('id', 'text')
    textContainer.setAttribute('class', 'text-left')

    text.insertAdjacentHTML('afterbegin', data.text)
  }

  //time
  const time = document.createElement('p');
  time.innerText = timeCalculator(data.time)

  article.classList.add('news')

  newsSection.append(article, horizontalRule);
  article.append(title, time)
}

export default append
