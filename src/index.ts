import express from "express";
import mainRouter from "./router/mainRouter";
import notFound from "./middlewares/404"
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/players", mainRouter);
app.use(notFound)

app.listen(3000, () => {
    console.log("server is running on port 3000");
    
})


