import React, {Component} from 'react';
import{ Grid, Cell } from 'react-mdl';
import Employment from './Employment';
import Education from './Education';
import Skills from './Skills';


class CV extends Component {
    render () {
        return (
            <div className="cv-content">
            <Grid className="cv-grid">
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="Avatar"
                            style={{height: '200px', borderRadius: '50%' }}
                        />
                    </div>
                    <h2 style={{textAlign: 'center'}}>Raj Randev</h2>
                    <h4 style={{color: 'grey', textAlign: 'center'}}>Front End Developer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%', margin: 'auto'}} />
                    <p style={{padding: '10px', textAlign: 'center', margin: '0px'}}>Formerly a head chef, I am a confident, self-taught and versatile front-end developer seeking a role where I can add value to your company. I am passionate, dedicated and have garnered relevant transferable skills from my time in the food industry; resourcefulness, a tenacity to get the job done, a good work ethic, leadership, problem solving, training and excellent communication. I am confident that I can deliver and exceed against your expectations.</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%', margin: 'auto'}} />
                    <div style={{margin: '80px', textAlign: 'center'}}>
                        <h5>Address</h5>
                        <p>5 Cardington Square,<br/>Hounslow,<br/>Middlesexx,<br/>TW4 6AH</p>
                        <h5>Phone</h5>
                        <p>07984614898</p>
                        <h5>Email</h5>
                        <p>rajan_randev@hotmail.com</p>
                        <h5>Website</h5>
                        <p>rajrandev.org.uk</p>
                    </div>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%', margin: '20px auto'}} />
                </Cell>
                <Cell className="cv-righthand-side" col={8}>
                    <h3>Employment</h3>
                    <Employment 
                        startYear={'June 2018'}
                        endYear={'Present'}
                        companyName={'Them London'}
                        positionTitle={'Junior Front-end Developer'}
                        companyDescription={'Built websites for Black bottle whisky, Whitworths Sugar and LIW team training using WordPress and PHP. Integrated effective SEO into all websites which led to high search ranking. Experience with google tagging and implementing conversion tags in WordPress. Created illustrations and edited imagery using the Adobe CC suite. Successfully built HTML5 Canvas animations for the Squadify campaign for LIW.'}
                        companyLogo={"https://drive.google.com/uc?id=1cqZD5brj2SLR9XQ6hGuNBQnZJKKLTH9g"}
                    />
                    <Employment 
                        startYear={'September 2015'}
                        endYear={'July 2017'}
                        companyName={'CH&CO'}
                        positionTitle={'Head Chef - Royal Ballet School'}
                        companyDescription={'As the Head Chef at the Royal Ballet School. I am responsible for the day to day running of the Catering Establishment, it’s employees and the standard in it’s food and service.'}
                        companyLogo={"https://drive.google.com/uc?id=16JJcSD-_kqSHQ9vcjXBMlh3RGOvhOG3F"}
                    />
                    <Employment 
                        startYear={'December 2014'}
                        endYear={'July 2015'}
                        companyName={'Syzygy'}
                        positionTitle={'Content Manager'}
                        companyDescription={'Managed and developed Syzygy’s web content using Episerver 6 and 7 editing platforms. Supported high profile Brand and NPI programs for Mazda Motors in Europe spanning across 26 markets in the region. Working cross-functionally (PM/UX/Tech/Creative) to help deliver high quality projects, often to aggressive timeframes.'}
                        companyLogo={"https://drive.google.com/uc?id=1lj0K9nlpYt874Uz2SRjbEsjqBgN9cS-o"}
                    />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h3>Education</h3>
                    <Education
                        startYear={2009}
                        endYear={2010}
                        schoolName={'University of West London'}
                        schoolDescription={'Culinary Arts Management (BSc) - 2:1'}
                    />
                    <Education
                        startYear={2006}
                        endYear={2009}
                        schoolName={'University College Birmingham'}
                        schoolDescription={'Culinary Arts Management (B.A)'}
                    />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h3>Skills</h3>
                    <Skills
                        skills={'Html5'}
                        progress={95}
                    />
                    <Skills
                        skills={'CSS3'}
                        progress={80}
                    />
                    <Skills
                        skills={'JavaScript ES6'}
                        progress={60}
                    />
                    <Skills
                        skills={'Bootstap'}
                        progress={70}
                    />
                    <Skills
                        skills={'React'}
                        progress={50}
                    />
                    <Skills
                        skills={'NodeJS'}
                        progress={50}
                    />
                    <Skills
                        skills={'Adobe CC Suite'}
                        progress={80}
                    />
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default CV;