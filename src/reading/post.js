function createPost(id, author, title, body, photosAlbum, postTemplate) {
  let post = {
    id: id,
    author: author,
    title: title,
    body: body,
    photo: photosAlbum.authorPhoto(author),
  };

  post.summary = (size = 160) => post.body.substring(0, size) + "...";

  // render
  post.renderSummary = () => {
    return postTemplate
      .replace("@{postId}", post.id)
      .replace("@{postTitle}", post.title)
      .replace("@{postBody}", post.summary())
      .replace("@{backButton}", "")
      .replace("@{postAuthorPhoto}", `<img src="${post.photo}" />`);
  };

  post.renderFullArticle = () => {
    return postTemplate
      .replace("@{postId}", post.id)
      .replace("@{postTitle}", post.title)
      .replace("@{postBody}", post.body)
      .replace("@{postAuthorPhoto}", `<img src="${post.photo}" />`)
      .replace(
        "@{backButton}",
        `<div class="media-right">
          <i class="btn fa fa-undo fa-lg" id="back"></i>
        </div>`
      );
  };

  post.bindActions = (document, mainContent, backFn) => {
    document.getElementById(`post_${post.id}`).onclick = () => {
      mainContent.innerHTML = post.renderFullArticle();
      document.getElementById(`back`).onclick = backFn;
    };
  };

  return post;
}
