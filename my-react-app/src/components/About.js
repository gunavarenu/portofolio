import React from 'react';
import profilePic from '../assets/renuphoto2.jpg';

const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <img src={profilePic} alt="renuphoto2" className="profile-pic" />
    <p>Hello! I'm Renu Gunavare. I am a third-year Computer Science and Engineering student at Pimpri Chinchwad University with a strong passion for technology and innovation. I enjoy working on projects that challenge me to apply my knowledge in practical and creative ways, and I actively seek opportunities to explore new technologies.</p>
    <p>Hackathons and technical events are my favorite spaces to learn, collaborate, and test ideas under pressure. I thrive in team environments where problem-solving and experimentation lead to meaningful solutions.</p>
    <p>With every project I take on, I focus on building not only technical skills but also adaptability and a deeper understanding of how technology can solve real-world problems. I am eager to keep learning, experimenting, and growing as a developer while contributing to impactful projects. This is my portfolio showcasing my projects and my education.</p>
  </section>
);

export default About;