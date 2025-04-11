import express, { Express } from "express";
import dotenv from "dotenv";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import RegisterUser from "./Controllers/Users/RegisterUser";
import GetUser from "./Controllers/Users/GetUser";
import UpdateUser from "./Controllers/Users/UpdateUser";
import DeleteUser from "./Controllers/Users/DeleteUser";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

const SESSION_SECRET_KEY = process.env.SESSION_SECRET_KEY;

if (!SESSION_SECRET_KEY) {
  throw new Error("Missing SESSION_SECRET_KEY. Check the .env file.");
}

app.use(cors({ credentials: true, origin: "" }));

app.use(
  session({
    secret: SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});


//USER APIS CALLS
app.post("/register", RegisterUser);
//app.get('/user', GetUser);
app.get('/user/:email', GetUser);
app.post("/user/update/:email", UpdateUser);
app.delete("/user/delete/:email", DeleteUser);



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
