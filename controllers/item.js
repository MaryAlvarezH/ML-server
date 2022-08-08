const axios = require("axios");

const BASE_URL = "https://api.mercadolibre.com";

const getItems = async (req, res) => {
  const { q } = req.query;
  const limit = 4;

  axios
    .get(`${BASE_URL}/sites/MLA/search?q=${q}&limit=${limit}`)
    .then((response) => {
      const results = response.data.results;

      const author = { name: "María", lastname: "Álvarez" };
      const items = [];
      const categories = [];

      for (const result of results) {
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

      // To get categories data it's necessary explore the results for 'available_filters' object
      // and in the case of the value of available_filters was an empty array explore filters object
      let categoryFilter = response.data.available_filters.find(
        (i) => i.id === "category"
      );

      if (!categoryFilter) {
        categoryFilter = response.data.filters.find((i) => i.id === "category");
      }

      if (categoryFilter) {
        const categoriesList = categoryFilter.values;

        const categoriesLimit = 5;
        const categoriesLength =
          categoriesList.length <= categoriesLimit
            ? categoriesList.length
            : categoriesLimit;

        for (let index = 0; index < categoriesLength; index++) {
          const category = categoriesList[index].name;
          categories.push(category);
        }
      }

      res.status(200).send({ author, categories, items });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

const getItem = async (req, res) => {
  const itemID = req.params.id;

  axios
    .all([
      axios.get(`${BASE_URL}/items/${itemID}`),
      axios.get(`${BASE_URL}/items/${itemID}/description`),
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
    )
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = {
  getItems,
  getItem,
};
