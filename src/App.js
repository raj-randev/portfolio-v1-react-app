import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout fixedHeader>
            <Header className='header-color' title={<span><strong>Raj Randev</strong></span>}>
                <Navigation className="nav-right">
                    <Link to="/">About Me</Link>
                    <Link to="/CV">CV</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/Contact">Contact Me</Link>
                </Navigation>
            </Header>
            <Drawer title="Menu">
                <Navigation>
                    <Link to="/">About Me</Link>
                    <Link to="/CV">CV</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/Contact">Contact Me</Link>
                </Navigation>
            </Drawer>
             
        </Layout>
        <Layout>
          <Content>
            <Main />
          </Content>
        </Layout>
        
        
      </div>
    )
    
  }
}

export default App;
