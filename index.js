var button = document.querySelector(".button");

button.onclick = function getMarvelComics() {
   var time = new Date().getTime();
   var hash = CryptoJS.MD5(time + privateKeyMarvel + publicKeyMarvel).toString();
   var url = 'https://gateway.marvel.com:443/v1/public/comics'
   var characterId = '1009718';

   console.log(url);

   $.getJSON(url, {
      ts: time,
      apikey: publicKeyMarvel,
      hash: hash,
      characters: characterId})
      .done(function(data) {
         console.log(data.data.results);
      })
      .fail(function(err) {
         console.log(err);
      });
};
