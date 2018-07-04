import React from 'react';
import axios from 'axios';
import SingleCard from './card';
export default class extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {data:[],tag:this.props.tag}
    }

    componentWillMount()
    {
        let tag = this.state.tag;
        let newData = this.state.data;
        axios.get('https://checkgit.herokuapp.com/data')
        .then((response)=>{
            for(let i in tag)
            {
                for(let j in response.data)
                {
                if(tag[i].text.toLowerCase() === response.data[j].name.toLowerCase() || tag[i].text.toLowerCase() === response.data[j].occupation.toLowerCase() || tag[i].text.toLowerCase() === response.data[j].title.toLowerCase() || tag[i].text.toLowerCase() === response.data[j].achievementsTitle.toLowerCase() || tag[i].text.toLowerCase() === response.data[j].skills.toLowerCase() || tag[i].text.toLowerCase() === response.data[j].interest.toLowerCase())
                {
                    newData.push(response.data[j]);
                    this.setState({data:newData});
                }
                }
            }
        })
    }

    renderCard(length)
    {
        let value = this.state.data;
        if(length ===  1)
        {
            return(
            <div>
            
                   <SingleCard 
                      name = {value[0].name}
                      coverPhoto = {value[0].coverPhoto}
                      displayPhoto = {value[0].displayPhoto}
                      occupation = {value[0].occupation}
                      title = {value[0].title}
                      bio = {value[0].bio}
                      achievementTitle = {value[0].achievementTitle}
                      achievementDescription = {value[0].achievementDescription}
                      achievementURL = {value[0].achievementURL}
                      education = {value[0].education}
                      experience = {value[0].experience}
                      skills = {value[0].skills}
                      interest = {value[0].interest}
                      myKey = {value[0].bio}
               />
                </div>
            )
        }
        else if(length > 1)
        {
            return(
                <div>
                { 
            this.state.data.map((value,index) =>{ 
               return <SingleCard 
                  name = {value.name}
                  coverPhoto = {value.coverPhoto}
                  displayPhoto = {value.displayPhoto}
                  occupation = {value.occupation}
                  title = {value.title}
                  bio = {value.bio}
                  achievementTitle = {value.achievementTitle}
                  achievementDescription = {value.achievementDescription}
                  achievementURL = {value.achievementURL}
                  education = {value.education}
                  experience = {value.experience}
                  skills = {value.skills}
                  interest = {value.interest}
                  myKey = {index}
           />
           })} 
            </div>    
            )
        }
        else
        {
            return null;
        }
    }
    render()
    {
        let value = this.state.data;
        return(
        <main>
        <h1>Search Result</h1>
        {this.renderCard(value.length)}
        </main>
        )
    }
}
