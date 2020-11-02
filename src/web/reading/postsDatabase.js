let loadDatabase = function (photosAlbum, templates) {
  let _database = [
    createPost(
      0,
      "rzuquim@inoa.com.br",
      "Como disparar um alerta para o usuário via javascript?",
      `O alert é uma das mais simples caixas de diálogo, com uma aparência simples e intuitiva elas são muito usadas em validações de formulários e/ou bloqueio de ações do browser.<br/>
       Sua principal função é mostrar ao usuário uma mensagem e um botão de confirmação de que o usuário tenha visto a mensagem. Para chamar essa função, basta utilizarmos o código alert(), que receberá uma string(mensagem que será exibida ao usuário).`,
      photosAlbum,
      templates
    ),
    createPost(
      1,
      "vtaquette@inoa.com.br",
      "É possível trocar as opções de confirm em javascript?",
      `Não é possível alterar as opções no dialog padrão de confirmação do navegador por questões de segurança. O retorno 'true'/'false' poderia ser alterado por um site malicioso, por exemplo.`,
      photosAlbum,
      templates
    ),
    createPost(
      2,
      "pessoa@gmail.com",
      "Qui labore consequat consectetur ad in minim culpa incididunt mollit ullamco.",
      `Labore proident non culpa eiusmod eu voluptate ea. Qui irure est proident id cillum culpa reprehenderit. Labore sint consequat deserunt ipsum et do aute mollit nulla consequat est sunt.`,
      photosAlbum,
      templates
    ),
    createPost(
      3,
      "pessoa@gmail.com",
      "Do reprehenderit nostrud cillum dolor excepteur consectetur quis commodo et.",
      `Commodo veniam eiusmod et adipisicing ex reprehenderit tempor. Cupidatat irure est ad officia officia. Labore excepteur qui minim quis in id sint sint cupidatat. Excepteur ea laborum adipisicing deserunt anim deserunt laborum minim ullamco aliqua quis mollit aute. Elit duis veniam adipisicing dolor laboris quis tempor incididunt laborum. Tempor ex quis nisi ipsum amet ullamco laboris non dolore sit voluptate dolor cillum laboris.`,
      photosAlbum,
      templates
    ),
  ];

  database = {};

  database.query = async function () {
    await util.delay();
    return [..._database].map((post) => Object.assign({}, post));
  };

  database.get = async function (postId) {
    await util.delay();
    let post = _database.find((post) => post.id === postId);
    if (post) return Object.assign({}, post);
    alert(`Não foi possível encontrar o post ${postId}`);
  };

  database.delete = async (post) => {
    await util.delay();
    let indexToDelete = _database.map((p) => p.id).indexOf(post.id);
    if (indexToDelete >= 0) _database.splice(indexToDelete, 1);
    else console.error(`Could not find post with id ${post}`);
  };

  database.save = async (post) => {
    await util.delay();
    if (post.id < 0) {
      console.log("TODO: new post!");
      return;
    }

    let indexTo = _database.map((p) => p.id).indexOf(post.id);
    if (_database[indexTo]) Object.assign(_database[indexTo], post);
    else alert(`Could not find post ${post.id}`);
  };

  return database;
};
