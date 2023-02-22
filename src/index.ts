import express from "express";
import mainRouter from "./router/mainRouter";

const app = express();

app.use("/", mainRouter);

app.listen(3000, () => {
    console.log("server is running on port 3000");
    
})


