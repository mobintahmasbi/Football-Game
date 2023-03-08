import express from "express";
import mainRouter from "./router/mainRouter";
import notFound from "./middlewares/404"
import bodyParser from "body-parser";
import frontRoutes from "./router/frontRouter";
import path from "path";

const app = express();
app.use(express.static("views"))
app.set('views', path.join(__dirname, "../views/pages"))
app.set('view engine', "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/players", mainRouter);
app.use("/", frontRoutes)
app.use(notFound)

app.listen(3000, () => {
    console.log("server is running on port 3000");
})


