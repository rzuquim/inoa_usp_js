async function loadTemplates(templateReady) {
  try {
    let data = await fetch("/reading/post.html");
    let template = await data.text();
    templateReady(template);
  } catch (error) {
    console.log("error", error);
  }
}
