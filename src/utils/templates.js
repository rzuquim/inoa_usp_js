function loadTemplates(templateReady) {
  fetch("/reading/post.html")
    .then((data) => {
      data.text().then((textData) => {
        templateReady(textData);
      });
    })
    .catch((err) => console.log("error", err));
}
