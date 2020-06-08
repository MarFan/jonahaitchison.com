import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faExternalLinkAlt,faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Home from './Styles';

import { initGA, PageView, Event } from './tracking';

import readrr from './screenshots/readrr.jpeg';
import mach20autos from './screenshots/mach20autos.jpeg';
import Capper from './screenshots/Capper-Auto-Group.jpg';
import RVnB from './screenshots/rvnb-web25.jpg';
import RideForLife from './screenshots/rideforlife-web25.jpg';

// import MyFollowers from './screenshots/myfollowers-web25.jpg';
// import SimpleTodo from './screenshots/reducetodo-web25.jpg';
// import SpaceFrontier from './screenshots/space-the-final-frontier-web25.jpg';

(function initAnalytics() {
	initGA('UA-28168359-6');
})();

const myProjects = [
  {
	title: 'Readrr',
	img: readrr,
	link: 'https://github.com/MarFan/betterreads-fe',
	desc: 'Readrr is a platform that allows users to search its database of books, browse recommendations, and manage their own library. I worked on the front-end for this project and built the BookCard component with React and Redux. This component is used where a book is displayed.  <br /><br />Tech Stack:<br /><ul><li>React</li><li>Redux</li><li>NodeJS</li><li>Express</li><li>PostgreSQL</li><li>Ant Design System</li></ul>'
  },
  {
    title: 'Ride for life',
    img: RideForLife,
    link: 'https://github.com/MarFan/Ride-For-Life-Front-End',
    desc: 'Ride for Life was designed to assist expecting mothers, in need of medical assistance, with transportation. I created the front-end components that allow a user to schedule and summon a driver, using React and Bootstrap.<br /><br />Tech Stack:<br /><ul><li>React</li><li>Bootstrap</li></ul>'
  },
  {
    title: 'RVnb',
    img: RVnB,
    link: 'https://rvnb-web25.netlify.com/',
    desc: 'RVnB was designed to helps travelers connect with properties owners, where campers can park their RVs and stay. I implemented the design for this landing page to be mobile responsive using HTML5 and LESS (CSS).<br /><br />Tech Stack:<br /><ul><li>HTML5</li><li>LESS (CSS)</li></ul>'
  },
  {
	title: 'mach20autos',
	img: mach20autos,
	link: 'https://www.mach20autos.com/',
	desc: 'I built mach20autos to provide full CRUD operations for vehicles with VIN decoding through a 3rd party web service, inventory reporting, expense tracking, data importing and exporting and integrates with dealer specific, responsive websites. <br /><br />Tech Stack:<br /><ul><li>Railo</li><li>MySQL</li><li>jQuery</li><li>Bootstrap CSS</li></ul>'
  },
  {
	title: 'Capper Auto Group',
	img: Capper,
	link: 'https://www.capperautogroup.com/',
	desc: 'Capper Auto Group is powered by the mach20autos inventory management system. The design is a customized template that is mobile responsive.  The dealer has full control of the data displayed on their website. All inventory changes are made through a mach20autos account.<br /><br />Tech Stack:<br /><ul><li>mach20autos</li><li>Railo</li><li>MySQL</li><li>jQuery</li><li>Bootstrap CSS</li></ul>'
  },
//   {
//     title: 'My followers',
//     img: MyFollowers,
//     link: 'https://myfollowers.netlify.com/',
//     desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quae aliquam nisi non deleniti ipsum in, deserunt corporis ex. Voluptate cupiditate unde nihil et qui debitis natus vero illo consectetur.'
//   },
//   {
//     title: 'Simple todo app',
//     img: SimpleTodo,
//     link: 'https://reducetodo.netlify.com/',
//     desc: ''
//   },
//   {
//     title: 'Space: The final frontier',
//     img: SpaceFrontier,
//     link: 'https://space-the-final-frontier.now.sh/',
//     desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quae aliquam nisi non deleniti ipsum in, deserunt corporis ex. Voluptate cupiditate unde nihil et qui debitis natus vero illo consectetur.'
//   }
]

function App() {
	useEffect(() => {
		PageView()
	}, [])
	return (
		<Home>
			<div className="about">
				<div>
					<div className="headerBG">#helloworld</div>

					<div className="mrHeader">
						<div className="mrName">mr.jonah aitchison</div>
						<div className="mrTitle">full stack developer</div>

						<div className="mrLink">
	          				<a href="https://www.linkedin.com/in/jonah-aitchison/" title="Connect with Mr. Jonah Aitchison on linkedin" target="_blank" rel="noreferrer noopener" onClick={() => Event('LinkedIn', 'Link clicked to view linkedin', 'LINKEDIN')}>
							  	<FontAwesomeIcon icon={faLinkedin} />
								<span className="linkText">/jonah-aitchison</span>
	          				</a>
	        			</div>
	        			
						<div className="mrLink">
	          				<a href="https://github.com/MarFan" title="See some of Mr. Jonah Aitchison's code on GitHub" target="_blank" rel="noreferrer noopener" onClick={() => Event('Github', 'Link clicked to view github', 'GITHUB')}>
							  	<FontAwesomeIcon icon={faGithub} />	
	            				<span className="linkText">/marfan</span>
	          				</a>
	        			</div>

						<div className="mrLink">
	          				<a href="https://drive.google.com/file/d/1b8fvTPuHNeEJGIRBwqg4RYIotzVF0v-H/view?usp=sharing" title="How about a look at Mr. Jonah Aitchison's resume?" target="_blank" rel="noreferrer noopener" onClick={() => Event('Resume', 'Link clicked to view resume', 'RESUME')}>
							  	<FontAwesomeIcon icon={faFileAlt} />	
	            				<span className="linkText">/resume</span>
	          				</a>
	        			</div>

						<div className="mrLink">
	          				<a href="#contact" title="Contact Mr. Jonah Aitchison" rel="noreferrer noopener" onClick={() => Event('Contact', 'Link clicked to contact Mr. Jonah', 'Contact')}>
							  	<FontAwesomeIcon icon={faEnvelopeOpen} />	
	            				<span className="linkText">/contact</span>
	          				</a>
	        			</div>
	      			</div>

					<p className="mrFluff">
						I've spent the last 10 years as a full stack web developer at a startup called mach20autos. I built an admin back end, managed the servers, and designed and built the front end. I've built with react, expressjs, javascript, node.js, python and coldfusion. I'm open to conversation from people working on projects that would let me play in cool technologies with fun people.
					</p>
	    		</div>
	    
				<div>
					<div className="mrContact">
						<div><a href="https://www.linkedin.com/in/jonah-aitchison/" title="Connect with Mr. Jonah Aitchison on linkedin" target="_blank" rel="noreferrer noopener" onClick={() => Event('LinkedIn', 'icon clicked to view linkedin', 'LINKEDIN')}><FontAwesomeIcon icon={faLinkedin} /></a></div>
						<div><a href="https://github.com/MarFan" title="See some of Mr. Jonah Aitchison's code on GitHub" target="_blank" rel="noreferrer noopener" onClick={() => Event('Github', 'icon clicked to view github', 'GITHUB')}><FontAwesomeIcon icon={faGithub} /></a></div>
						<div><a href="https://drive.google.com/file/d/1b8fvTPuHNeEJGIRBwqg4RYIotzVF0v-H/view?usp=sharing" title="How about a look at Mr. Jonah Aitchison's resume?" target="_blank" rel="noreferrer noopener" onClick={() => Event('Resume', 'icon clicked to view resume', 'RESUME')}><FontAwesomeIcon icon={faFileAlt} /></a></div>
						<div><a href="#contact" title="Send Mr. Jonah Aitchison a message." rel="noreferrer noopener" onClick={() => Event('Contact', 'Link clicked to contact Mr. Jonah', 'Contact')}><FontAwesomeIcon icon={faEnvelopeOpen} /></a></div>
					</div>
	    		</div>
	  		</div>

	  		<div className="projects">
				{
					myProjects.map((project, index) => (
						<div className="project" key={index}>
							<div>
								<h5 className="sm-title">{project.title} 
									{	project && 
										project.link && (
											<a href={project.link} target="_blank" rel="noreferrer noopener" onClick={() => {Event('Portfolio', `Link clicked to view ${project.title}`, 'PORTFOLIO')}}>
												<FontAwesomeIcon icon={faExternalLinkAlt} />
											</a>
										)
									}

								</h5>
								<a href={project.link} target="_blank" rel="noreferrer noopener" onClick={() => {Event('Portfolio', `Image clicked to view ${project.title}`, 'PORTFOLIO')}}>
									<img src={project.img} alt={project.title} width="" />
								</a>
							</div>

							<div className="projectDetail">
								<h5 className="md-lg-title">
									{project.title} 
									{	project && 
										project.link && (
											<a href={project.link} target="_blank" rel="noreferrer noopener" onClick={() => {Event('Portfolio', `Link clicked to view ${project.title}`, 'PORTFOLIO')}}>
												<FontAwesomeIcon icon={faExternalLinkAlt} />
											</a>
										)
										
									}
								</h5>
								<p dangerouslySetInnerHTML={{ __html: project.desc }} />
							</div>
						</div>
					))
				}

				<div id="contact" name="contact" className="contact">
					<h5>Get in touch</h5>
					<form method="post" action="https://formspree.io/jaitch@gmail.com">
						<div className="formRow">
							<input type="text" name="name" id="name" placeholder="Name" />
							<input type="email" name="email" id="email" placeholder="Email" />
							<input type="text" id="message" name="message" placeholder="Message" />
							{/* <textarea name="message" id="message" placeholder="Message" rows="4"></textarea> */}
							<input type="submit" value="Drop a Note" className="primary" />
						</div>
					</form>
				</div>
	  		</div>
		</Home>
	);
}

export default App;
