const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors")
const productRoute = require("./routes/AddproductRoute")
app.use(cors());

app.use(express.json());


mongoose
  .connect(
    `mongodb+srv://ecom:amanladla@cluster0.en3tt.mongodb.net/men-ecommerce`
  )
  .then(() => {
    console.log("Connected TO DB");
  })
  .catch(() => {
    console.log("Failed To connect to DB");
  });

// ROutes 

app.use("/api",productRoute);



app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
