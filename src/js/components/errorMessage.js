function error(err) {
  const article = document.createElement("article");
  const horizontalRule = document.createElement("hr");
  const text = document.createElement("p");

  text.innerText = `An error occured: ${err}`;

  newsSection.append(article, horizontalRule);
  article.append(text);
}

export default error;
