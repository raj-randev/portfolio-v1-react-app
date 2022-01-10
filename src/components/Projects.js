import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button} from 'react-mdl';
import Iframe from 'react-iframe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
        
    }
    
    toggleCategories() {
            
            if (this.state.activeTab === 0) {
            return(
                <div className="project-grid">
                    <div className="project-row">
                        <div className="project-row-inner-section">
                            <Card shadow={5} style={{minWidth: '300', margin: '10px'}}>
                                <CardTitle
                                    style={{
                                    height:'200px',
                                    background:'url(https://drive.google.com/uc?id=1Jm1BcE7lqJw-FcD_IhlOFiZarNLk1SkD) center / cover'
                                    }}>                                 
                                </CardTitle>
                                <CardActions style={{textAlign:'center'}} border>
                                    <Button href="https://www.whitworths-sugar.co.uk/" target="_blank" raised colored>Website Link</Button>                                                       
                                </CardActions>                                
                            </Card>
                            <Card shadow={5} style={{minWidth: '300', margin: '10px'}}>
                                <CardTitle
                                    style={{ 
                                    height:'200px', 
                                    background:'url(https://drive.google.com/uc?id=1fT2n_MTqU2W7KjcbTC_-rrGcBWUlMl_M) center / cover'
                                    }}>                                
                                </CardTitle>
                                <CardActions style={{textAlign:'center'}} border>
                                    <Button href="https://www.blackbottle.com/" target="_blank" raised colored>Website Link</Button>                                                        
                                </CardActions>                                
                            </Card>
                        </div>
                        <div className="project-row-inner-section">
                            <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
                                <CardTitle
                                    style={{ 
                                    height:'200px', 
                                    background:'url(https://drive.google.com/uc?id=143aUIm1TzYmD3UQBdEVBXJdQBj6FWM3O) center / cover'
                                    }}>                                    
                                </CardTitle>                        
                                <CardActions style={{textAlign:'center'}} border>
                                    <Button href="https://www.squadify.net/" target="_blank" raised colored>Website Link</Button>                                                               
                                </CardActions>                                
                            </Card>
                            <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
                                <CardTitle
                                    style={{ 
                                    height:'200px', 
                                    background:'url(https://drive.google.com/uc?id=1cqZD5brj2SLR9XQ6hGuNBQnZJKKLTH9g) center / cover'
                                    }}>                                    
                                </CardTitle>                        
                                <CardActions style={{textAlign:'center'}} border>
                                    <Button href="https://www.themlondon.com/" target="_blank" raised colored>Website Link</Button>                                                               
                                </CardActions>                                
                            </Card>
                        </div>        
                    </div>
                    <div className="project-row">
                        <div className="project-row-inner-section">
                            <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
                                <CardTitle
                                    style={{ 
                                    height:'200px', 
                                    background:'url(https://drive.google.com/uc?id=12_dc-XfNI9p7ptIczJjlbdc125FTTiEX) center / cover'
                                    }}>                                    
                                </CardTitle>                        
                                <CardActions style={{textAlign:'center'}} border>
                                    <Button href="https://www.liw3.com/" target="_blank" raised colored>Website Link</Button>                                                               
                                </CardActions>                                
                            </Card>
                            <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
                                <CardTitle
                                    style={{ 
                                    height:'200px', 
                                    background:'url(https://drive.google.com/uc?id=1KVzOXZVve4Jz_OOlsp07HoEEj7vFwyku) center / cover'
                                    }}>                                    
                                </CardTitle>                        
                                <CardActions style={{textAlign:'center'}} border>
                                    <Button href="https://www.simonmonkhouse.com/" target="_blank" raised colored>Website Link</Button>                                                               
                                </CardActions>                                
                            </Card>
                        </div>
                        <div className="project-row-inner-section">
                            <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
                                <CardTitle
                                    style={{ 
                                    height:'200px', 
                                    background:'url(https://drive.google.com/uc?id=1uE8rluXCS4dQyRlXXanDPpItxemmwNTb) center / cover'
                                    }}>                                    
                                </CardTitle>                        
                                <CardActions style={{textAlign:'center'}} border>
                                    <Button href="https://www.intelligentultrasound.com/" target="_blank" raised colored>Website Link</Button>                                                               
                                </CardActions>                                
                            </Card>
                            <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
                                <CardTitle
                                    style={{ 
                                    height:'200px', 
                                    background:'url(https://drive.google.com/uc?id=1QO_nP2rxlGLoLP509dHx2Hy9TnxFC4DY) center / cover'
                                    }}>                                    
                                </CardTitle>                        
                                <CardActions style={{textAlign:'center'}} border>
                                    <Button href="https://www.blade-runners.co.uk/" target="_blank" raised colored>Website Link</Button>                                                               
                                </CardActions>                                
                            </Card>
                        </div>        
                    </div>       
                </div>
                
                ) 
            } else if(this.state.activeTab === 1) {
                return(
                    <div className="project-grid">
                        <div className="canvas-mod">
                            <div>
                                <h2>Protfolio Website<Button href="https://github.com/randev85/Portfolio" target="_blank" style={{margin:'10px'}} raised colored><FontAwesomeIcon icon={faGithub} /></Button></h2>                            
                            </div>
                            <img 
                                src={ require('../img/Capture.PNG')} 
                                alt='react1'
                                style={{width: '100%'}}
                            />
                        </div>    
                        <div className="canvas-mod">
                            <div>
                                <h2>To do list<Button href="https://github.com/randev85/react-crash-todo" target="_blank" style={{margin:'10px'}} raised colored><FontAwesomeIcon icon={faGithub} /></Button></h2>
                            </div>
                            <img 
                                src={ require('../img/Capture1.PNG')} 
                                alt='to do list'
                                style={{width: '100%'}}
                                />
                        </div>
                        <div className="canvas-mod">
                            <div>
                                <h2>Weather<Button href="https://github.com/randev85/weather-app" target="_blank" style={{margin:'10px'}} raised colored><FontAwesomeIcon icon={faGithub} /></Button></h2>
                            </div>
                            <img 
                                src={ require('../img/Capture2.PNG')} 
                                alt='to do list'
                                style={{width: '100%'}}
                                />
                        </div>
                        
                    </div>  
                ) 
            }else if(this.state.activeTab === 2) {
                return(
                    <div className="project-grid">
                        <div className="javascript-mod">
                            <div>
                                <h2>Tennis Game<Button href="https://github.com/randev85/Tennis-Game" target="_blank" style={{margin:'10px'}} raised colored><FontAwesomeIcon icon={faGithub} /></Button></h2>                            
                            </div>
                            <Iframe url="https://wa1dbkw1mytvs7ldjaskjw-on.drv.tw/tennis-game/"
                                width="100%"
                                height="710px"
                                id="interactive-bubble"
                                className="iframe-container"
                                display="initial"
                                position="relative"
                            />
                        </div>    
                        <div className="javascript-mod">
                            <div>
                                <h2>Budget Application<Button href="https://github.com/randev85/Budget-app" target="_blank" style={{margin:'10px'}} raised colored><FontAwesomeIcon icon={faGithub} /></Button></h2>
                            </div>
                            <Iframe url="https://wa1dbkw1mytvs7ldjaskjw-on.drv.tw/Budget%20app/"
                                width="100%"
                                height="600px"
                                id="red-bubble"
                                className="iframe-container"
                                display="initial"
                                position="relative"
                            />
                        </div>
                        <div className="javascript-mod">
                            <div>
                                <h2>Dice Game<Button href="https://github.com/randev85/Dice-Game" target="_blank" style={{margin:'10px'}} raised colored><FontAwesomeIcon icon={faGithub} /></Button></h2>
                            </div>
                            <Iframe url="https://wa1dbkw1mytvs7ldjaskjw-on.drv.tw/dice-game/"
                                width="100%"
                                height="600px"
                                id="interactive-bubble"
                                className="iframe-container"
                                display="initial"
                                position="relative"
                            />
                        </div>
                        
                    </div>
                )
            }else if(this.state.activeTab === 3) {
                return(
                    <div className="project-grid">
                        <div className="canvas-mod">
                            <div>
                                <h2>Squadify Animated Blimp<Button href="https://github.com/randev85/test_animation_v3" target="_blank" style={{margin:'10px'}} raised colored><FontAwesomeIcon icon={faGithub} /></Button></h2>                            
                            </div>
                            <Iframe url="https://wa1dbkw1mytvs7ldjaskjw-on.drv.tw/test_animation_v3/Squadify_desktop_airship.html"
                                width="100%"
                                height="400px"
                                id="interactive-bubble"
                                className="iframe-container"
                                display="initial"
                                position="relative"
                            />
                        </div>    
                        <div className="canvas-mod">
                            <div>
                                <h2>Red Blood Cells<Button href="https://github.com/randev85/redbubble" target="_blank" style={{margin:'10px'}} raised colored><FontAwesomeIcon icon={faGithub} /></Button></h2>
                            </div>
                            <Iframe url="https://wa1dbkw1mytvs7ldjaskjw-on.drv.tw/redbubble/"
                                width="100%"
                                height="400px"
                                id="red-bubble"
                                className="iframe-container"
                                display="initial"
                                position="relative"
                            />
                        </div>
                        <div className="canvas-mod">
                            <div>
                                <h2>LIW 1 Million Counter<Button href="https://github.com/randev85/million-counter-july-2019" target="_blank" style={{margin:'10px'}} raised colored><FontAwesomeIcon icon={faGithub} /></Button></h2>
                            </div>
                            <Iframe url="https://wa1dbkw1mytvs7ldjaskjw-on.drv.tw/million-counter-july-2019/LIW_1million_counter_V5_July_2019.html"
                                width="100%"
                                height="400px"
                                id="interactive-bubble"
                                className="iframe-container"
                                display="initial"
                                position="relative"
                            />
                        </div>
                        <div className="canvas-mod">
                            <div>
                                <h2>Interactive Bubbles<Button href="https://github.com/randev85/InteractiveBubbles" target="_blank" style={{margin:'10px'}} raised colored><FontAwesomeIcon icon={faGithub} /></Button></h2>
                            </div>
                            <Iframe url="https://wa1dbkw1mytvs7ldjaskjw-on.drv.tw/InteractiveBubbles/"
                                width="100%"
                                height="400px"
                                id="interactive-bubble"
                                className="iframe-container"
                                display="initial"
                                position="relative"
                            />
                        </div>
                    </div>     
                )
            }else if(this.state.activeTab === 4) {
                return(
                    <div className='project-grid'>
                        <div className="gallery-row">
                            <div className="image-container">
                                <img src={ require('../img/Asset-4.png')} alt='Ganesh'/>
                            </div>
                            <div className="image-container">
                                <img src={ require('../img/Asset-3.png')} alt='Pattern'/>
                            </div>
                            <div className="image-container">
                                <img src={ require('../img/Asset-2.png')} alt='Ganesh Logo'/>
                            </div>
                        </div>
                        <div className="gallery-row">
                            <div className="image-container">
                                <img src={ require('../img/Asset-6.png')} alt='KR one'/>
                            </div>
                            <div className="image-container">
                                <img src={ require('../img/Asset-7.png')} alt='KR two'/>
                            </div>
                            <div className="image-container">
                                <img src={ require('../img/Asset-8.png')} alt='KR three'/>
                            </div>
                        </div>
                    </div>
                )
            }
    
    }
    
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab style={{fontSize:'10px'}}>WordPress</Tab>
                    <Tab style={{fontSize:'10px'}}>React</Tab>
                    <Tab style={{fontSize:'10px'}}>JavaScript</Tab>
                    <Tab style={{fontSize:'10px'}}>Canvas</Tab>
                    <Tab style={{fontSize:'10px'}}>Art Work</Tab>
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="portfolio-content">
                            {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                    
            </div>
        )
    }
    
}

export default Projects;