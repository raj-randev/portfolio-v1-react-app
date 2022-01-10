import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Employment extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <img style={{width: '100px', margin: '5px'}} src={this.props.companyLogo} alt={this.props.companyName} />
                        <p>{this.props.startYear}<br/>- {this.props.endYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{marginTop: '8px'}}>{this.props.companyName}</h4>
                        <h5 style={{marginTop: '4px'}}>{this.props.positionTitle}</h5>
                        <p>{this.props.companyDescription}</p>
                    </Cell>
                </Grid>
            </div>    
        )
    }
}

export default Employment;