function createApp(database, photosAlbum, document) {
  let app = {
    title: "Blogão do Javascript",
  };

  app.render = function (post) {
    if (!post) {
      // a)
      // let renderedHTML = "";
      // database.forEach((post) => (renderedHTML += _renderPost(post)));
      // document.getElementById("main_content").innerHTML = renderedHTML;

      //b)
      document.getElementById("main_content").innerHTML = database.reduce(
        (compiled, post) => compiled + _renderPost(post, photosAlbum),
        ""
      );
    } else {
      console.error("Missing implementation!");
    }
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

  // private methods
  function _renderPost(post, photosAlbum) {
    let postTemplate = document.getElementById("post_template").innerHTML;

    return postTemplate
      .replace("@{postId}", post.id)
      .replace("@{postTitle}", post.title)
      .replace("@{postBody}", post.body)
      .replace(
        "@{postAuthorPhoto}",
        `<img src="${photosAlbum.authorPhoto(post.author)}" />`
      );
  }

  return app;
}
