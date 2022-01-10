import React, {Component} from 'react';
import{ Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faFacebook  } from '@fortawesome/free-brands-svg-icons';

class Contact extends Component {
    render () {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                <Cell col={5}>
                    <h2>Raj Randev</h2>
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="Avatar"
                        style={{height: '200px', borderRadius: '50%' }}
                    />
                    <p style={{width: '75%', margin: '20px auto', paddingTop: '1em'}}>Feel free to email me directly, contact me on the phone or, connect on Linkedin.</p>

                </Cell>

                <Cell col={7}>
                    <h2>Contact Me</h2>
                    <hr/>

                    <div className="contact-list">
                        <List style={{width: '100%', margin: 'auto'}}>
                        <ListItem>
                            <ListItemContent style={{fontSize:'20px', fontFamily: 'Anton'}}>
                            <a href="tel:07984614898">
                            <FontAwesomeIcon className="icon-logo" icon={faPhoneAlt} />
                                07984 614 898
                            </a>    
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                        <ListItemContent style={{fontSize:'20px', fontFamily: 'Anton'}}>
                            <a href="mailto:rajan_randev@hotmail.com">
                            <FontAwesomeIcon className="icon-logo" icon={faEnvelope} />
                                Rajan_randev@hotmail.com
                            </a>    
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                        <ListItemContent className="contact-social">
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
                            </ListItemContent>
                        </ListItem>
                    </List>
                    </div>

                    
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
