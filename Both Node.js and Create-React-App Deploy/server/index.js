const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
let data,searchValue ;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://checkgit.herokuapp.com/'
}))
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

//Database Connection
mongoose.connect('mongodb://vivek:vivek123@ds121301.mlab.com:21301/cranode',
(err) => {
  if(err){console.error("Mongodb error: ",err)}
  else{console.log("Database connected")}
})

//Database Model
let cardModel = mongoose.model('cardModel',{
    coverPhoto:"String",
    displayPhoto:"String",
    name:"String",
    occupation:"String",
    title:"String",
    bio:"String",
    achievementsTitle:"String",
    achievementsDescription:"String",
    achievementsURL:"String",
    education:"String",
    experience:"String",
    skills:"String",
    servicesProfessional:"String",
    interest:"String"
  })

app.post('/form',(req,res) =>
{
    data = req.body ;
    var cardData = new cardModel();
    console.log(cardData);
    console.log(data);
    cardData.coverPhoto = data.coverPhoto;
    cardData.displayPhoto = data.displayPhoto;
    cardData.name = data.name;
    cardData.occupation = data.occupation;
    cardData.title = data.title;
    cardData.bio = data.bio;
    cardData.achievementsTitle = data.achievementsTitle;
    cardData.achievementsDescription = data.achievementsDescription;
    cardData.achievementsURL = data.achievementsURL;
    cardData.education = data.education;
    cardData.experience = data.experience;
    cardData.skills = data.skills;
    cardData.servicesProfessional = data.servicesProfessional;
    cardData.interest = data.interest;
    cardData.save((err) => {
        if(err){console.error("Error: ",err)}
        else{
          console.log('data inserted');
        }
      })
})

app.get('/data',(req,res)=>{
    cardModel.find({},(err,card) => {
        if(err){console.error("Error: ",err)}
        else{
          res.json(card);
        }
      })
})

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});


app.listen(process.env.PORT || 9000 ,(err) =>
{
    if(err) console.log(err);
    else console.log('running on port 9000');
}
);
