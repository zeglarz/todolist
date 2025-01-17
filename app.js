const express = require('express');
const bodyParser = require('body-parser');
const date = require('./date');
console.log(date.getDay());

const app = express();
let items = ['Buy Food', 'Cook Food', 'Eat Food'];
let workItems = [];
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let day = date.getDate();
  res.render('list', {
    listTitle: day,
    newListItems: items
  });

});

app.post('/', (req, res) => {
  let item = req.body.newItem;
  if (req.body.list === 'Work List') {
    workItems.push(item);
    res.redirect('/work');
} else {
  items.push(item);
  res.redirect('/');
}
});

app.get('/work', (req,res) => {
  res.render('list',{listTitle: "Work List", newListItems: workItems});
});

app.get('/about', (req,res) => {
  res.render('about');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000')
});
