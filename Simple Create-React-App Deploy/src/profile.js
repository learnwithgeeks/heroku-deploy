import React from 'react';
import axios from 'axios';
export default class extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {userData:[]}
    }
    componentDidMount()
    {
        document.getElementById("experience").style.visibility="visible";
        document.getElementById("e").style.filter='blur(3px)';
    }
    checkPortfolio(id)
    {
        console.log(id);
        if(id==="e")
        {
            document.getElementById("experience").style.visibility="visible";
            document.getElementById("skill").style.visibility="hidden";
            document.getElementById("achievement").style.visibility="hidden";
            document.getElementById("interest").style.visibility="hidden";
            document.getElementById("e").style.filter='blur(3px)';
            document.getElementById("s").style.filter='none';
            document.getElementById("a").style.filter='none';
            document.getElementById("i").style.filter='none';
        }
        else if(id==="s")
        {
            document.getElementById("s").style.filter='blur(3px)';
            document.getElementById("e").style.filter='none';
            document.getElementById("a").style.filter='none';
            document.getElementById("i").style.filter='none';
            document.getElementById("skill").style.visibility="visible";
            document.getElementById("achievement").style.visibility="hidden";
            document.getElementById("interest").style.visibility="hidden";
            document.getElementById("experience").style.visibility="hidden";
        }
        else if(id==="a")
        {
            document.getElementById("a").style.filter='blur(3px)';
            document.getElementById("s").style.filter='none';
            document.getElementById("e").style.filter='none';
            document.getElementById("i").style.filter='none';
            document.getElementById("achievement").style.visibility="visible";
            document.getElementById("interest").style.visibility="hidden";
            document.getElementById("experience").style.visibility="hidden";
            document.getElementById("skill").style.visibility="hidden";
        }
        else if(id==="i")
        {
            document.getElementById("s").style.filter='none';
            document.getElementById("a").style.filter='none';
            document.getElementById("e").style.filter='none';
            document.getElementById("i").style.filter='blur(3px)';
            document.getElementById("interest").style.visibility="visible";
            document.getElementById("experience").style.visibility="hidden";
            document.getElementById("skill").style.visibility="hidden";
            document.getElementById("achievement").style.visibility="hidden";
        }
    }
    render()
    {
        return(
            <main>
                <div id="container">
                    <div id="smallContainer">
                        <div id="navbar">
                            <div id="social" style={styles.navbar}><img src="../images/navbar/social.PNG" width={35}/></div>
                            <div id="message" style={styles.navbar}><img src="../images/navbar/message.PNG" width={30}/></div>
                            <div id="notification" style={styles.navbar}><img src="../images/navbar/notification.PNG" width={30}/></div>
                            <div id="userProfileDrop" style={styles.navbar}><img src="../images/navbar/downarrow.PNG" width={30}/><img src="./images/rotating_card_profile.png" width={30} style={styles.userProfile}/></div>
                        </div>
                        <div id="userInfo" style={styles.userInfo}>
                            <div id="userImage"><img src="./images/rotating_card_profile.png" width={200} style={styles.userImage}/></div>
                            <div id="userName"><h2>User Name</h2></div>
                            <div id="professionalRattings"><img src="../images/about/ratting.PNG" width={150}/></div>
                            <table id="following">
                            <tr>
                            <th style={styles.tableFollow}>Following</th>
                            <th style={styles.tableFollow}>Followers</th>
                            <th style={styles.tableFollow}>Comment</th>
                            </tr>
                            <tr>
                            <td style={styles.tableFollow}>30</td>
                            <td style={styles.tableFollow}>20</td>
                            <td style={styles.tableFollow}>10</td>
                            </tr>
                            </table>
                        </div>
                    </div>
                    <div id="borderFollow" style={styles.borderFollow}></div>
                    <div id="followButton" style={styles.followButton}><div>Follow</div></div>
                    <div id="largeContainer" style={styles.largeSection}>
                        <div id="about">
                            <h3 style={styles.aboutMeHeading}>About Me</h3>
                            <p style={styles.aboutMe}>" lorem lorem lorem lorem "</p>
                        </div>
                        <div id="portfolio">
                            <h3 style={styles.portfolioHeading}>My Portfolio</h3>
                            <div id="menu" style={styles.menuStyle}>
                            <img id="e" onClick={this.checkPortfolio.bind(this,"e")} src="./images/portfolio/experience.png" width={60} style={styles.portfolioProfile}/>
                            <img id="s" onClick={this.checkPortfolio.bind(this,"s")} src="./images/portfolio/skill.png" width={60} style={styles.portfolioProfile}/>
                            <img id="a" onClick={this.checkPortfolio.bind(this,"a")} src="./images/portfolio/achievement.png" width={60} style={styles.portfolioProfile}/>
                            <img id="i" onClick={this.checkPortfolio.bind(this,"i")} src="./images/portfolio/interest.jpg" width={60}/>
                            </div>
                            <div id="experience" style={styles.portfolioItems}>
                            <img src="./images/rotating_card_profile.png" width={60} style={{float:'left',paddingRight:20,borderRadius:200}}/>
                                <h2>Experience</h2>
                                <p style={{paddingTop:20,position:'relative',left:'20%'}}>lorem lorem lorem lorem</p>
                            </div>
                            <div id="skill" style={styles.portfolioItems}>
                            <img src="./images/rotating_card_profile.png" width={60} style={{float:'left',paddingRight:20,borderRadius:200}}/>
                                <h2>Skills</h2>
                                <p style={{paddingTop:20,position:'relative',left:'20%'}}>dsdsdsd</p>
                            </div>
                            <div id="achievement" style={styles.portfolioItems}>
                            <img src="./images/rotating_card_profile.png" width={60} style={{float:'left',paddingRight:20,borderRadius:200}}/>
                                <h2>Achievements</h2>
                                <p style={{paddingTop:20,position:'relative',left:'20%'}}>dsdsd</p>
                            </div>
                            <div id="interest" style={styles.portfolioItems}>
                            <img src="./images/rotating_card_profile.png" width={60} style={{float:'left',paddingRight:20,borderRadius:200}}/>
                                <h2>Interest</h2>
                                <p style={{paddingTop:20,position:'relative',left:'20%'}}>dsdsdsdsd</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const styles =
{
    navbar : 
    {
        display:'inline-block',
        paddingLeft:30,
        position:'relative',
        left:'70%'
    },
    userProfile:
    {
        borderColor:'black',
        borderStyle:'solid',
        borderWidth:3,
        borderRadius:20,
        marginLeft:10
    },
    userInfo:
    {
        position:'absolute',
        left:'40%',
        textAlign:'center'
    },
    userImage:
    {
        borderColor:'black',
        borderStyle:'solid',
        borderWidth:3,
        borderRadius:100,
        marginLeft:10
    },
    tableFollow:
    {
        paddingLeft:20,
        paddingTop:20
    },
    borderFollow:
    {
        borderColor:'black',
        borderWidth:1,
        borderStyle:'solid',
        width:'99.8%',
        marginLeft:-8,
        position:'absolute',
        top:'75%',
    },
    followButton:
    {
        position:'absolute',
        top:'70%',
        backgroundColor:'white',
        fontSize:25,
        paddingLeft:30,
        paddingRight:30,
        paddingTop:20,
        paddingBottom:20,
        borderColor:'black',
        borderRadius:10,
        borderStyle:'solid',
        left:'45%'
    },
    aboutMeHeading:
    {
        position:'absolute',
        top:'90%',
        left:'47%',
        textDecoration:'underline',
    },
    aboutMe:
    {
        position:'absolute',
        top:'100%',
        left:'43%',
        textAlign:'center'
    },
    portfolioHeading:
    {
        position:'absolute',
        top:'112%',
        left:'46.3%',
        textDecoration:'underline',
    },
    portfolioProfile:
    {
        borderRadius:20,
        marginRight:20
    },
    menuStyle:
    {
        position:'absolute',
        top:'125%',
        left:'40%',
    },
    portfolioItems:
    {
        position:'absolute',
        top:'140%',
        left:'36%',
        visibility:'hidden',
        borderColor:'black',
        borderStyle:'solid',
        width:400,
        height:200,
        paddingTop:40,
        paddingLeft:40
    }
}