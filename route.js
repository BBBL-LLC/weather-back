const forecast = require("./ForecastController");

module.exports = function (app) {
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    //role
    app.post("/api/forecast", forecast.getForecast);
}
