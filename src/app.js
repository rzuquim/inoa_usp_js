function createApp(posts, document) {
  let app = {
    title: "Blogão do Javascript",
  };

  let mainContent = document.getElementById("main_content");

  app.renderIndex = function () {
    mainContent.innerHTML = posts.reduce(
      (compiled, post) => compiled + post.renderSummary(),
      ""
    );

    // binding buttons
    posts.forEach(function (post) {
      post.bindActions(document, mainContent, app.renderIndex);
    });
  };

  app.search = function (query) {
    console.error("Missing implementation!");
  };

  app.edit = function (post) {
    console.error("Missing implementation!");
  };

  app.create = function (post) {
    console.error("Missing implementation!");
  };

  app.delete = function (post) {
    console.error("Missing implementation!");
  };

  return app;
}
