import React from 'react';

import { Header, List, Icon } from 'semantic-ui-react';

import './App.css';

import RVnB from './screenshots/rvnb-web25.jpg';
import RideForLife from './screenshots/rideforlife-web25.jpg';
import MyFollowers from './screenshots/myfollowers-web25.jpg';
import SimpleTodo from './screenshots/reducetodo-web25.jpg';
import SpaceFrontier from './screenshots/space-the-final-frontier-web25.jpg';

const myProjects = [
  {
    title: 'rvnb',
    img: RVnB,
    link: 'https://rvnb-web25.netlify.com/',
    desc: ''
  },
  {
    title: 'ride for life',
    img: RideForLife,
    link: 'https://letsride.netlify.com/',
    desc: ''
  },
  {
    title: 'my followers',
    img: MyFollowers,
    link: 'https://myfollowers.netlify.com/',
    desc: ''
  },
  {
    title: 'simple todo app',
    img: SimpleTodo,
    link: 'https://reducetodo.netlify.com/',
    desc: ''
  },
  {
    title: 'space the final frontier',
    img: SpaceFrontier,
    link: 'https://space-the-final-frontier.now.sh/',
    desc: ''
  }
]

const Contact = () => {
  return (
    <>
      <div className="headerBG">#helloworld</div>
      <Header as='h1' size="huge" className="mrHeader">
        <div>mr.jonahaitchison</div>
        <Header.Content>
        <List>
          <List.Item>
            <a href="https://www.linkedin.com/in/jonah-aitchison/" target="_blank" rel="noreferrer noopener">
              <Icon name="linkedin" color="black" link /> 
              <span className="linkText">/jonah-aitchison</span>
            </a>
          </List.Item>
          <List.Item>
            <a href="https://github.com/MarFan" target="_blank" rel="noreferrer noopener">
              <Icon name="github" color="black" link /> 
              <span className="linkText">/marfan</span>
            </a>
          </List.Item>
        </List>
        </Header.Content>
      </Header>
    </>
  )
}

function App() {
  return (
    <div className="myContainer">
      <div className="contact">
        <Contact />
      </div>
      <div className="theGoods">
        <Header as='h4'>a few projects</Header>
        {/* A few Projects */}
        <div className="projects">
          {
            myProjects.map((project, index) => (
              <div className="project">
                <Header as='h5'>{project.title}</Header>
                <a href={project.link} target="_blank" rel="noreferrer noopener"><img src={project.img} alt={project.title} width="72%" /></a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
