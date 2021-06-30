import React from 'react'
import ImageGallery from 'react-image-gallery';
import "./style.css"

const aboutImages = [

    {
        original: 'https://github.com/tron5389/public-images/blob/master/tel-aviv-trip.png?raw=true',
        thumbnail: 'https://github.com/tron5389/public-images/blob/master/tel-aviv-trip.png?raw=true',
    },
    
    {
      original: 'https://github.com/tron5389/public-images/blob/master/Intern_Chemical-Plant.png?raw=true',
      thumbnail: 'https://github.com/tron5389/public-images/blob/master/Intern_Chemical-Plant.png?raw=true',
    },

    {
    original: 'https://github.com/tron5389/public-images/blob/master/tom-olivia-estrella.png?raw=true',
    thumbnail: 'https://github.com/tron5389/public-images/blob/master/tom-olivia-estrella.png?raw=true',
    },
    
    {
    original: 'https://github.com/tron5389/public-images/blob/master/brazil-dev-team.png?raw=true',
    thumbnail: 'https://github.com/tron5389/public-images/blob/master/brazil-dev-team.png?raw=true',
    },
  ];

export const About = () => {
    return (
        <div className="about">
            <h1>Bio</h1>
                    <p>
                    I was born in Israel and grew up in Alabama where I attended Auburn University 
                    to earn my degree in Chemical Engineering. I made the decision to shift my career path 
                    towards software development during a college internship, and I have been loving it ever 
                    since! When I'm not coding you can find me cooking or hanging outside with my friends. 
                    I play on several tennis teams in Atlanta throughout the year with ALTA and USTA. 
                    I also enjoy board sports and water sports, and I spend as much time at the beach as 
                    I can during the warm months.                     
                    Growing up travelling abroad to visit family, I had the 
                    opportunity to immerse myself in different languages and cultures. I speak a total of four 
                    languages including Hebrew, Portuguese, and French. I have spent a lot of time travelling 
                    internationally for work, as well as some personal vacations, and these 
                    language skills have really come in handy, and I love taking any opportunity to practice!

                    </p>
                    <br/>
                    <ImageGallery items={aboutImages} showThumbnails={false}/>      
                    <br/>

            <h1>My Journey from Engineer to Developer</h1>
            <p>
            As an engineer we were always taught to work smarter, not harder, and my approach to this was most times
             a software solution. I began developing applications when I was an intern at a chemical plant. 
             There were many calculations and workflows performed by the Engineering and Production departments that 
             were done by hand. I developed applications using VBA, VB.NET, and SQL to replace these tedious tasks and 
             ensure uniformity in our daily activities. Building on this exciting experience I spent the rest of my college 
             career pursuing opportunities to hone my development skills. I tutored MIS coursework in relational databases 
             and worked with a group of friends at a company we started that developed Mobile and Web applications for local
              businesses and aspiring start-ups in the area. I was hired as a process control engineer but was quickly moved 
              to working with our technology division. Initially I began working in a customer support role travelling to 
              customer sites to perform mass upload and configuration strategies as part of implementation for start-up of 
              contracts. As time went, I began working closer and closer with the development team, first developing ad-hoc 
              custom solutions for customers using SQL, reporting services, C#, and AWS. In addition, I had access to the 
              code base and worked with the team performing backlog refinement, QA, and bug resolution services. 
              In August of 2020 I transitioned to a full stack development role with the software engineering team, and 
              I couldn’t be happier with this path that I am on!
            </p>
            
        </div>
    )
}

export default About;