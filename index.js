import express from "express";
const app = express();
import remainderRouter from "./routes/remainder-route.js";
app.use(express.json());
const PORT = 4000;
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});
app.use("/notify", remainderRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
