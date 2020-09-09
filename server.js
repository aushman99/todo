const express = require('express')
const app = express()
const port = process.env.PORT || 3005
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://bubun:bubun123@boardinfinity.zque7.mongodb.net/BoardInfinity", {useNewUrlParser: true}, ()=> console.log("Mongo connected"))

const Todo = require("./models/Todo");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/add', (req, res) => {
	console.log(req.body)
	var todo = new Todo({
		name: req.body.name,
		description: req.body.description,
		creator: req.body.creator,
		duration: req.body.duration,
	});
	var currentTime = new Date();
	currentTime.setSeconds(currentTime.getSeconds() + todo["duration"]);
	todo["expireAt"] = currentTime;
	console.log(todo)
	todo.save()
	.then(data => {
		res.json(data)
	})
	.catch(err => {
		console.log("Some error occurred")
		res.json({message: err})
	});
});

app.get('/list', async (req, res) => {
	const todos = await Todo.find()
	console.log(todos)
	res.json(todos)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
