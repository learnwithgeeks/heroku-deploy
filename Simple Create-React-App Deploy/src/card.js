import React, { Component } from 'react';
import Profile from './profile';
class App extends Component {

  showProfile()
  {
    <Profile 
    name = {this.props.name}
    coverPhoto = {this.props.coverPhoto}
    displayPhoto = {this.props.displayPhoto}
    occupation = {this.props.occupation}
    title = {this.props.title}
    bio = {this.props.bio}
    achievementTitle = {this.props.achievementTitle}
    achievementDescription = {this.props.achievementDescription}
    achievementURL = {this.props.achievementURL}
    education = {this.props.education}
    experience = {this.props.experience}
    skills = {this.props.skills}
    interest = {this.props.interest}
    />
  }
  render() {
    return (
      <main key={this.props.myKey}>
        <link href='css/bootstrap.css' rel='stylesheet' />
        <link href='css/rotating-card.css' rel='stylesheet' />
        <link href="http://netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"/>
        <script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>
      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
      <div className="card-container">
                <div className="card">
                    <div className="front">
                        <div className="cover">
                            <img src="./images/rotating_card_thumb2.png" alt="myImage"/>
                        </div>
                        <div className="user">
                            <img className="img-circle" src="./images/rotating_card_profile.png" alt="myImage"/>
                        </div>
                        <div className="content">
                            <div className="main">
                                <h3 className="name">{this.props.name}</h3>
                                <p className="profession">{this.props.occupation}</p>
                                <p className="text-center">{this.props.bio}</p>
                            </div>
                            <div className="footer">
                                <i className="fa fa-mail-forward"></i> Auto Rotation
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <div className="header">
                        <h4 className="text-center">Education</h4>
                            <h5 className="text-center">{this.props.education}</h5>
                            <hr/>
                        </div>
                        <div className="content">
                            <div className="main">
                                <div>
                                <h4 className="text-center">Skills</h4>
                                <p className="text-center">{this.props.skills}</p>
                                </div>
                                <hr/>
                                <h4 className="text-center">Experience</h4>
                                <h5 className="text-center">{this.props.experience}</h5>
                                <hr/>
                                <div className="stats-container" style={{marginTop:-10}}>
                                    <div className="stats">
                                        <h4>235</h4>
                                        <p>
                                            Followers
                                        </p>
                                    </div>
                                    <div className="stats">
                                        <h4>114</h4>
                                        <p>
                                            Following
                                        </p>
                                    </div>
                                    <div className="stats">
                                        <h4>35</h4>
                                        <p>
                                            Projects
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="footer">
                            <div className="social-links text-center" style={{marginTop:-35}}>
                                <a href="http://creative-tim.com" className="facebook"><i className="fa fa-facebook fa-fw"></i></a>
                                <a href="http://creative-tim.com" className="google"><i className="fa fa-google-plus fa-fw"></i></a>
                                <a href="http://creative-tim.com" className="twitter"><i className="fa fa-twitter fa-fw"></i></a>
                            </div>
                            <div className="text-center" style={{marginTop:10}}>
                                <button onClick={this.showProfile}>View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </main>
    );
  }
}

export default App;
