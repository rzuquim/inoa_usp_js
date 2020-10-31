let loadDatabase = function () {
  let database = [
    {
      author: "rzuquim@inoa.com.br",
      title: "Como disparar um alerta para o usuário via javascript?",
      body: `
      O alert é uma das mais simples caixas de diálogo, com uma aparência simples e intuitiva elas são muito usadas em validações de formulários e/ou bloqueio de ações do browser.<br/>
      Sua principal função é mostrar ao usuário uma mensagem e um botão de confirmação de que o usuário tenha visto a mensagem. Para chamar essa função, basta utilizarmos o código alert(), que receberá uma string(mensagem que será exibida ao usuário).
      `,
    },
    {
      author: "vtaquette@inoa.com.br",
      title: "É possível trocar as opções de confirm em javascript?",
      body: `
      Não é possível alterar as opções no dialog padrão de confirmação do navegador por questões de segurança. O retorno 'true'/'false' poderia ser alterado por um site malicioso, por exemplo.
      `,
    },
    {
      author: "pessoa@gmail.com",
      title:
        "Qui labore consequat consectetur ad in minim culpa incididunt mollit ullamco.",
      body: `
      Labore proident non culpa eiusmod eu voluptate ea. Qui irure est proident id cillum culpa reprehenderit. Labore sint consequat deserunt ipsum et do aute mollit nulla consequat est sunt.
      `,
    },
  ];

  for (let index in database) {
    database[index].id = index;
  }

  return database;
};
