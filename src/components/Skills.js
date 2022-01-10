import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{display: 'flex'}}>
                            <h5 style={{margin: '6px'}}>{this.props.skills}</h5> 
                        </div>
                    </Cell>
                    <Cell col={8}>
                        <ProgressBar style={{margin: '6px auto', width: '75%'}} progress={this.props.progress}/>
                    </Cell>
                </Grid>
                </div>
        )
    }
}

export default Skills;