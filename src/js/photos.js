let loadPhotosAlbum = function () {
  function authorPhoto(authorEmail) {
    let photoURL =
      _photosDatabase[authorEmail] ||
      `assets/profiles/${util.randomInt(11)}.jpg`;
    return photoURL;
  }

  // Private
  let _photosDatabase = {
    "rzuquim@inoa.com.br":
      "http://www.gravatar.com/avatar/b295880d6593401893ac8b0eac235fd1?s=64",
    "vtaquette@inoa.com.br":
      "http://www.gravatar.com/avatar/483cc3eb456ac125c61f9eccdb658469?s=64",
  };

  return {
    authorPhoto,
  };
};
