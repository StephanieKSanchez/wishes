import cors from "cors";
import express from "express";
import { createWish } from "./service/wish-list.service";

const app = express();
app.use(express.json());
app.use(cors());
app.post("/", async (req, res) => {
  try {
    await createWish(req.body);
    res.send(200);
  } catch (e) {
    res.status(400).send({
      message: "Wish is not Possible",
    });
  }
});
