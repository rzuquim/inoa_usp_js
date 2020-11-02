createPostEditor = function (database, templates) {
  let editor = {};
  editor.render = async function (post) {
    let editorTemplate = await templates.load("/writing/postEditor.html");
    return editorTemplate
      .replace("@{title}", post.title)
      .replace("@{body}", post.body);
  };

  editor.bindActions = function (document, backFn, saveFn, deleteFn) {
    document.getElementById("save").onclick = () => {
      let [newTitle, newBody] = editor.readInputs(document);
      saveFn(newTitle, newBody);
    };
    document.getElementById("back").onclick = backFn;
    document.getElementById("delete").onclick = deleteFn;
  };

  editor.readInputs = function (document) {
    let newTitle = document.getElementById("title_input").value;
    let newBody = document.getElementById("body_input").value;
    return [newTitle, newBody];
  };

  return editor;
};
