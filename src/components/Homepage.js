import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import profilepic from '../img/mev1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram, faFacebook  } from '@fortawesome/free-brands-svg-icons'

class Homepage extends Component {
    render () {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
               <Grid className="home-grid">
                    <Cell col={12}>
                        <div className="profile-pic-container">
                        <img 
                            src={profilepic}
                            alt='Profile'
                            className='profile-pic'
                        />
                        </div>
                        <div className="banner-text">
                            <h1>Front-End Developer</h1>
                            <hr/>
                            <p>HTML5/CCS3 | Bootstrap | JavaScript ES6 | React | NodeJS | Adobe CC Suite</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/rajan-randev-86449555/" rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/randev85" rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://www.instagram.com/randev85/" rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://www.facebook.com/RajRandev" rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </div>
                        </div>
                        <div className="body-text">
                           <p>Formerly a head chef, I am a confident, self-taught and versatile front-end developer seeking a role where I can add value to your company. I am passionate, dedicated and have garnered relevant transferable skills from my time in the food industry; resourcefulness, a tenacity to get the job done, a good work ethic, leadership, problem solving, training and excellent communication. I am confident that I can deliver and exceed against your expectations.</p> 
                        </div>
                           
                    </Cell>   
                </Grid>    
            </div>
        )
    }
}

export default Homepage;