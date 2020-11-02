function createApp(postsDatabase, document, editor) {
  let app = {
    title: "Blogão do Javascript",
  };

  document.title = app.title;
  let mainContent = document.getElementById("main_content");

  app.renderIndex = async function () {
    let completeIndex = "";
    let posts = await postsDatabase.query();
    for (let post of posts) completeIndex += await post.renderSummary();
    mainContent.innerHTML = completeIndex;
    for (const post of posts)
      post.bindActions(document, () => app.readPost(post));
  };

  app.readPost = async function (post) {
    let completePost = await postsDatabase.get(post.id);
    mainContent.innerHTML = await completePost.renderFullArticle();
    post.bindActions(
      document,
      null,
      () => app.renderIndex(),
      () => app.openEditor(completePost)
    );
  };

  app.openEditor = async function (post) {
    let completePost = await postsDatabase.get(post.id);
    mainContent.innerHTML = await editor.render(completePost);
    editor.bindActions(
      document,
      () => app.readPost(completePost),
      (newTitle, newBody) => app.savePost(completePost, newTitle, newBody),
      () => app.delete(completePost)
    );
  };

  app.savePost = async function (post, newTitle, newBody) {
    post.title = newTitle;
    post.body = newBody;
    await postsDatabase.save(post);
    await app.readPost(post);
  };

  app.delete = async function (post) {
    if (!confirm("Tem certeza que deseja apagar esse post?"))
      return app.readPost(post);

    await postsDatabase.delete(post);
    await app.renderIndex();
  };

  app.search = function (query) {
    console.error("Missing implementation!");
  };

  return app;
}
