function createPost(id, author, title, body, photosAlbum, templates) {
  let post = {
    id,
    author,
    title,
    body,
    photo: photosAlbum.authorPhoto(author),
  };

  post.summary = (size = 160) => post.body.substring(0, size) + "...";

  // render
  post.renderSummary = async () => {
    let postTemplate = await templates.load("/reading/post.summary.html");
    return postTemplate
      .replace("@{postId}", post.id)
      .replace("@{postTitle}", post.title)
      .replace("@{postBody}", post.summary())
      .replace("@{postAuthorPhoto}", `<img src="${post.photo}" />`);
  };

  post.renderFullArticle = async () => {
    let postTemplate = await templates.load("/reading/post.full.html");
    return postTemplate
      .replace("@{postId}", post.id)
      .replace("@{postTitle}", post.title)
      .replace("@{firstLetter}", post.body.substring(0, 1))
      .replace("@{postBody}", post.body.substring(1))
      .replace("@{postAuthorPhoto}", `<img src="${post.photo}" />`);
  };

  post.bindActions = (document, readFn, backFn, editFn) => {
    if (readFn) document.getElementById(`post_${post.id}`).onclick = readFn;
    if (backFn) document.getElementById(`back`).onclick = backFn;
    if (editFn) document.getElementById(`edit`).onclick = editFn;
  };

  return post;
}
