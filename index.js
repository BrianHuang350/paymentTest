const express = require("express");
const app = express();

const NewebpayClient = require("newebpay-mpg-sdk").default;
const client = new NewebpayClient({
  merchantId: "Newebpay Merchant ID",
  partnerId: "Newebpay Partner ID (Partner API only)",
  hashKey: "Newebpay Hash Key",
  hashIV: "Newebpay Hash IV",
  env: "production", // 'sandbox' | 'production'
});

app.get("/", (req, res) => {
  return res.send({
    message: "It is working",
  });
});

app.listen("8080", () => {
  console.log("server id working");
});
