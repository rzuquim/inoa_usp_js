function createApp(posts, document) {
  let app = {
    title: "Blogão do Javascript",
  };

  let mainContent = document.getElementById("main_content");

  app.renderIndex = async function () {
    let completeIndex = "";
    for (let i = 0; i < posts.length; i++)
      completeIndex += await posts[i].renderSummary();
    mainContent.innerHTML = completeIndex;

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
