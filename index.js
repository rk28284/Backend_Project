const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { postRouter } = require("./routes/post.routes");
const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected with db");
  } catch (error) {
    console.log(error);
  }
  console.log("listening port 8080");
});
