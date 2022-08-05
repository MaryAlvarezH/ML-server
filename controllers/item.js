const axios = require("axios");

const baseUrl = "https://api.mercadolibre.com/sites/MLA";

exports.getItems = async (req, res) => {
  const { q } = req.query;
  const limit = 4;

  axios
    .get(`${baseUrl}/search?q=${q}&limit=${limit}`)
    .then((response) => {
      const results = response.data.results;

      const author = { name: "María", lastname: "Álvarez" };
      const items = [];
      const categories = [];

      for (const result of results) {
        categories.push(result.category_id);
        const itemDetails = {
          id: result.id,
          title: result.title,
          price: {
            amount: result.price,
            currency: result.currency_id,
            decimals: results.decimlas | 0,
          },
          picture: result.thumbnail,
          condition: result.condition,
          free_shipping: result.shipping.free_shipping,
        };
        items.push(itemDetails);
      }

      const resp = {
        author,
        categories,
        items,
      };
      res.send(resp);
    })
    .catch((error) => {
      console.log(error);
    });
};
