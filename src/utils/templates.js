let templatesCatalog = function () {
  return {
    load: async function (url) {
      try {
        let data = await fetch(url);
        return await data.text();
      } catch (error) {
        console.log("error", error);
      }
    },
  };
};
