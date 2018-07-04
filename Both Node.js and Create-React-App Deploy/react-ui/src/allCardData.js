import React from 'react';
import axios from 'axios';
import SingleCard from './card';
import SearchResult from './searchResult';
import { WithContext as ReactTags } from 'react-tag-input';
export default class extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {cardData :[],addTag:[],redirect:false};
        this.submitSearch = this.submitSearch.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentWillMount()
    {
        axios.get('https://checkgit.herokuapp.com/data')
        .then((response)=>{
            this.setState({cardData:response.data});
        })
    }

    submitSearch()
    {
        if(this.state.addTag.length>0)
        {
        this.setState({redirect:true});
        }
        else
        {
            alert('please insert value');
        }
    }

    handleAddition(tag)
    {
        let tagArray = this.state.addTag;
        tagArray.push(tag);
        this.setState({addTag:tagArray});  
    }

    handleDelete(tag)
    {
        let tagArray = this.state.addTag;
        tagArray.splice(tag,1);
        this.setState({addTag:tagArray});
    }

    render()
    {
        if(this.state.redirect===true && this.state.addTag.length>0)
        
        {
            //window.location.replace(window.location.pathname+'?'+JSON.stringify(this.state.addTag));
            return(
                <main>
                <SearchResult tag = {this.state.addTag}/>
                </main>
                  )
        }

        else
        {
       
            return( 
        <main>

            <div>
                <ReactTags 
                tags={this.state.addTag}
                handleDelete={this.handleDelete}
                handleAddition={this.handleAddition} />
            </div>
            <input type="submit" onClick={this.submitSearch}/>
        <div>
            { 
        this.state.cardData.map((value,index) =>{ 
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

    </main>
        )
    }
    }
}
