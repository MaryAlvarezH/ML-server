const axios = require("axios");

const baseUrl = "https://api.mercadolibre.com";

const getItems = async (req, res) => {
  const { q } = req.query;
  const limit = 4;

  axios
    .get(`${baseUrl}/sites/MLA/search?q=${q}&limit=${limit}`)
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

      res.status(200).send({ author, categories, items });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getItem = async (req, res) => {
  const itemID = req.params.id;

  axios
    .all([
      axios.get(`${baseUrl}/items/${itemID}`),
      axios.get(`${baseUrl}/items/${itemID}/description`),
    ])
    .then(
      axios.spread((resp1, resp2) => {
        const author = { name: "María", lastname: "Álvarez" };
        const itemData = resp1.data;
        const itemDetails = resp2.data;

        const item = {
          id: itemData.id,
          title: itemData.title,
          price: {
            amount: itemData.price,
            currency: itemData.currency_id,
            decimals: itemData.decimlas | 0,
          },
          picture:
            itemData.pictures?.length > 0 ? itemData.pictures[0].url : null,
          condition: itemData.condition,
          free_shipping: itemData.shipping.free_shipping,
          sold_quantity: itemData.sold_quantity,
          description: itemDetails.plain_text,
        };
        res.status(200).send({ author, item });
      })
    );
};

module.exports = {
  getItems,
  getItem,
};
