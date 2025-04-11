"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const RegisterUser_1 = __importDefault(require("./Controllers/Users/RegisterUser"));
const GetUser_1 = __importDefault(require("./Controllers/Users/GetUser"));
const UpdateUser_1 = __importDefault(require("./Controllers/Users/UpdateUser"));
const DeleteUser_1 = __importDefault(require("./Controllers/Users/DeleteUser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const SESSION_SECRET_KEY = process.env.SESSION_SECRET_KEY;
if (!SESSION_SECRET_KEY) {
    throw new Error("Missing SESSION_SECRET_KEY. Check the .env file.");
}
app.use((0, cors_1.default)({ credentials: true, origin: "" }));
app.use((0, express_session_1.default)({
    secret: SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
//USER APIS CALLS
app.post("/register", RegisterUser_1.default);
//app.get('/user', GetUser);
app.get('/user/:email', GetUser_1.default);
app.post("/user/update/:email", UpdateUser_1.default);
app.delete("/user/delete/:email", DeleteUser_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map