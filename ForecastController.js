require("dotenv").config();
const axios = require("axios");

var getForecast = async (req, resp) => {
  try {
    let { city, days } = req.body;
    console.log(city,days)
    const respdata = await axios.get(
      "http://api.weatherapi.com/v1/forecast.json",
      {
        params: {
          key: process.env.API_KEY,
          q: city,
          days: days,
          aqi: "no",
          alerts: "no",
        },
      }
    );
    let response = {
      status: "success",
      data: respdata.data,
    };
    resp.status(200).json(response);
  } catch (e) {
    // console.log(e);
  }
};
module.exports = {
  getForecast,
};
