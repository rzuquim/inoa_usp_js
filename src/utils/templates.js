let templatesCatalog = function () {
  let cache = {};

  return {
    load: async function (url) {
      if (cache[url]) return cache[url];

      try {
        let data = await fetch(url);
        cache[url] = await data.text();
        return cache[url];
      } catch (error) {
        console.log("error", error);
      }
    },
  };
};
