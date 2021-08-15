var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://the-sneaker-database.p.rapidapi.com/sneakers",
  params: { limit: "100",  name: "Retro"},
  headers: {
    "x-rapidapi-key": "591586ad4fmshdb30a719f5d2967p158215jsna13d16b00fd1",
    "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
