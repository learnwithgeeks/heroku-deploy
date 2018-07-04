const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res) =>
{
  res.send("hello world you are on heroku");
})

app.get('/a',(req,res) =>
{
  res.send("you are on /a");
})

app.listen(process.env.PORT || 9000 ,(err) =>
{
    if(err) console.log(err);
    else console.log('running on port 9000');
}
);
