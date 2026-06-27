import express from "express";
import products from "./routes/productRoutes.js";
import user from "./routes/userRoutes.js"
import order from "./routes/orderRoutes.js"
import cors from "cors";
import errorMiddleware from "./middleware/error.js";
import cookieParser from "cookie-parser";
import fileupload from "express-fileupload";

const app = express();
// app.use(cors());
// app.get("/test", (req, res) => {
//   res.json({ message: "CORS is working" });
// });
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local Vite frontend
      "https://agri-market-20rw8qupm-monali-2105s-projects.vercel.app", // Replace with your Vercel URL
      "https://agri-market-eosin.vercel.app"
    ],
    credentials: true,
  })
);
// INCREASE THE LIMITS HERE (50mb is usually plenty for images)
app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded({ limit: '50mb', extended: true }));
//app.use(express.json());
app.use(cookieParser());
app.use(fileupload());

app.use("/api",products);
app.use("/api",user);
app.use("/api",order);

app.use(errorMiddleware);

export default app;