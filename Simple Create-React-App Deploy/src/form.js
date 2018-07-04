import React from 'react';
import axios from 'axios';
export default class extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
        coverPhoto:'',
        displayPhoto:'',
        name:'',
        occupation:'',
        title:'',
        bio:'',
        achievementsTitle:'',
        achievementsDescription:'',
        achievementsURL:'',
        education:'',
        experience:'',
        skills:'',
        servicesProfessional:'',
        interest:''
        }
        this.myMethod = this.myMethod.bind(this);
        this.showService = this.showService.bind(this);
    }

    myMethod(e)
    {
        console.log(this.state.servicesProfessional);
        if(this.state.servicesProfessional === '')
        {
            axios({
                method:'post',
                url:'https://finalnodefyp.herokuapp.com/form',
                data:{
                    coverPhoto:this.state.coverPhoto,
                    displayPhoto:this.state.displayPhoto,
                    name:this.state.name,
                    occupation:document.getElementById("occupation").value,
                    title:this.state.title,
                    bio:this.state.bio,
                    achievementsTitle:this.state.achievementsTitle,
                    achievementsDescription:this.state.achievementsDescription,
                    achievementsURL:this.state.achievementsURL,
                    education:this.state.education,
                    experience:this.state.experience,
                    skills:this.state.skills,
                    servicesProfessional:'student have no service',
                    interest:this.state.interest
                },
                headers:{
                    'Access-Control-Allow-Origin':'https://finalnodefyp.herokuapp.com/'
                }
            }).then((response)=>{
                console.log(response);
            }).catch((err)=>{
                console.log(err);
            })
            
        }
        else
        {
            axios({
                method:'post',
                url:'https://finalnodefyp.herokuapp.com/form',
                data:{
                    coverPhoto:this.state.coverPhoto,
                    displayPhoto:this.state.displayPhoto,
                    name:this.state.name,
                    occupation:document.getElementById("occupation").value,
                    title:this.state.title,
                    bio:this.state.bio,
                    achievementsTitle:this.state.achievementsTitle,
                    achievementsDescription:this.state.achievementsDescription,
                    achievementsURL:this.state.achievementsURL,
                    education:this.state.education,
                    experience:this.state.experience,
                    skills:this.state.skills,
                    servicesProfessional:this.state.servicesProfessional,
                    interest:this.state.interest
                },
                headers:{
                    'Access-Control-Allow-Origin':'https://finalnodefyp.herokuapp.com/'
                }
            }).then((response)=>{
                console.log(response);
            }).catch((err)=>{
                console.log(err);
            })
            
        }
        window.location.reload()
        e.preventDefault();
    }

    showService(value)
    {
        if(value === "Professional")
        {
            document.getElementById('service').required = true;
            document.getElementById("service").style.display="inline-block";
        }
        else if(value === "Student")
        {
            document.getElementById('service').required = false;
            document.getElementById("service").style.display="none";
        }
    }
    render()
    {
        return(
            <main>
                <form id="form" onSubmit={this.myMethod} method="post" >
                    <label> Cover Photo :<input type="file" name="cover"  accept='image/*' onChange={(e) => this.setState({ coverPhoto: e.target.value})}  required/></label>
                    <br/>
                    <br/>
                    <label> Display Photo :<input type="file" name="display"  accept='image/*' onChange={(e) => this.setState({ displayPhoto: e.target.value})}  required/></label>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Your Name" onChange={(e) => this.setState({ name: e.target.value})} required/>
                    <br/>
                    <br/>
                    <select id="occupation" onChange={(e) => this.showService(e.target.value)}>
                        <option value="Student" >Student</option>
                        <option value="Professional" >Professional</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Title" onChange={(e) => this.setState({ title: e.target.value})} required/>
                    <br/>
                    <br/>
                    <textarea placeholder="Bio" onChange={(e) => this.setState({ bio: e.target.value})} required/>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Achievements Title" onChange={(e) => this.setState({ achievementsTitle: e.target.value})} required/>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Achievements Description" onChange={(e) => this.setState({ achievementsDescription: e.target.value})} required/>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Achievements URL" onChange={(e) => this.setState({ achievementsURL: e.target.value})} required/>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Education" onChange={(e) => this.setState({ education: e.target.value})} required/>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Experience" onChange={(e) => this.setState({ experience: e.target.value})} required/>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Skills" onChange={(e) => this.setState({ skills: e.target.value})} required/>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Interest" onChange={(e) => this.setState({ interest: e.target.value})} required/>
                    <br/>
                    <br/>
                    <input id="service" style={{display:'none'}} type="text" placeholder="Service" onChange={(e) => this.setState({ servicesProfessional: e.target.value})}/>
                    <input type="submit"/>
                </form>
            </main>
        )
    }
}
