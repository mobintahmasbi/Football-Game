import express from "express";
import mainRouter from "./router/mainRouter";
import notFound from "./middlewares/404"
const app = express();

app.use("/players", mainRouter);
app.use(notFound)

app.listen(3000, () => {
    console.log("server is running on port 3000");
    
})


