const express = require("express");
const app = express();
const path = require("path");
const port = 80;
const fs = require("fs")

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static"));
app.use(express.urlencoded())
// PUG SPECIFIC STUFF
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// OLD WAY TO DO- HERE JUST FOR AN IDEA LOL
// app.get("/demo", (req, res) => {
//   res.render("demo", { title: "Hey", message: "Hello there!" });
// });

// app.get("/", (req, res) => {
//   res.send("This is the home page of my first express app.");
// });
//
// app.get("/about", (req, res) => {
//   res.send("This is the about page of my first express app.");
// });
//
// app.post("/about", (req, res) => {
//   res.send(
//     "This is the post request of the about page of my first express app."
//   );
// });

//ENDPOINTS


app.get('/', (req, res) => {
  const params = { 'title': "Anurag's Gym Website"};
  res.status(200).render("index.pug", params);
});

app.post('/', (req, res)=>{
  name = req.body.name
  age = req.body.age
  gender = req.body.gender
  address = req.body.address
  more = req.body.more

  let outputToWrite = `${name} of age ${age}, gender ${gender} lives at ${address}. More about him/her: ${more} `

  fs.writeFileSync("output.txt", outputToWrite)
  const params ={'message': "Your form has been submitted successfully!"}
  res.status(200).render("index.pug", params);
})

//START THE SERVER
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
