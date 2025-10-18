import React from 'react';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects">
      <div className="project-card">
        <h3>Cresa Website</h3>
        <a href="https://cresa-web.vercel.app/" target="_blank" rel="noopener noreferrer">cresa-web.vercel.app/</a>
        <p>Developed a website for PCCOE&apos;s Student Club, which went on to win 1st place in a Hackathon.</p>
      </div>
      <div className="project-card">
        <h3>Meta Parks</h3>
        <a href="https://riddhipankhade.github.io/MetaParks/" target="_blank" rel="noopener noreferrer">MetaParks/</a>
        <p>This website brings together information on all the national parks of India. With so many parks across India, many remain unknown to the public, and there has been no single platform to explore them all—until now.</p>
      </div>
      <div className="project-card">
        <h3>Urban Market</h3>
        <a href="https://urbanmarket-sds.netlify.app/" target="_blank" rel="noopener noreferrer">urbanmarket-sds.netlify.app/</a>
        <p>This website helps business owners, startup companies and others to find best places to open/rent/buy a store by using heatmap technology.</p>
      </div>
    </div>
  </section>
);

export default Projects;