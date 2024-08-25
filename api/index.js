import express from "express";
import goleiroRoutes from "./routes/goleiros.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", goleiroRoutes);
app.use("/auth", authRoutes);

app.listen(8800);