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
                    I play on several tennis teams in Atlanta throughught the year with ALTA and USTA. 
                    I also enjoy board sports and water sprots, and I spend as much time at the beach as 
                    I can during the warm months.                     
                    Growing up travelling abroad to visit family, I had the 
                    opportunity to immerse myself in different languages and cultures. I speak a total of four 
                    languages including Hebrew, Portugese, and French. I have spent a lot of time travelling 
                    internationally for work, as well as some personal vacations, and these 
                    language skills have really come in handy and I love taking any opportunity to practice!
                    </p>
                    <ImageGallery items={aboutImages} showThumbnails={false}/>                
            <h1>My Journey from Engineer to Developer</h1>
            <p>
            I did a Co-Op internship at MFG Chemical and one of the semesters I was asked to perform a 
            series of calculations for all of their chemical processes that would have taken months by 
            hand. I was attempting to create a spreadsheet for this when I accidentally stumbled upon 
            VBA and creating this VBA forms project was my very first application. Building on this 
            experience I spent time in the summer studying object oriented programming, and I rebuilt 
            the previous application using VB.Net and SQL to install at my internship for all the 
            engineers to use. The next term I served as the global admina nd head of implementation for
            a new CMMS software. Working with the software vendor while implementing and building more
            of my own application solidified my feelings that Software Development was the path for me. 
            I spent the rest of my college career honing these skills in addition to completing my 
            coursework. I tutured MIS courses in relational database design and worked with a few friends 
            at a company we had called MadMen Software, where we assisted with local businesses and aspring 
            start-ups in creating web and mobile applications. I was hired to Andritz after college as a 
            Process Control Engineer, but soon after I started they realized my software skills were much 
            more prominent and I began working with the Andritz Technology group. I began by travelling to 
            site to work with customers implementing their IIoT platform for manufacturing plants called Metris. 
            I supported customers remotely and on-site configuring and supporting the platform. Eventually 
            I began working on a lot of ad-hoc development to provide custom reporting and data solutions using 
            SQL, AWS Redshift, and C#. Later I started working more closely with the develoment team as an SME 
            for several product groups as well, as well as participating with these product groups peforming QA 
            and backlog refinement. In August 2020, I transitioned to the development team as a Full Stack 
            developer to work on developing new features to meet key cutomer demands.
            </p>
            
        </div>
    )
}

export default About;