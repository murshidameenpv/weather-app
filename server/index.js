import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./src/db/db.js";
import userRoute from "./src/routes/userRoute.js";
import authRoute from "./src/routes/authRoute.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
//user
app.use("/api", userRoute);
app.use("/jwt", authRoute);

app.listen(port, () => {
  console.log(`Server Listening on port http://localhost:${port}`);
});
