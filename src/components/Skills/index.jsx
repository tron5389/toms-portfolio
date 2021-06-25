import React from 'react'
import "./style.css"

const Skills = () => {
    return (
        <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>C#</li>
          <li>SQL / T-SQL</li>
          <li>VB.NET</li>
          <li>VBA</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>JavaScript</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>Selenium</li>
          <li>HTML Agility Pack 5</li>
          <li>Newtonsoft.json</li>
          <li>Telerik .Net</li>
          <li>React.js</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>Visual Studio</li>
          <li>Visual Studio Code</li>
          <li>Sql Server Management Studio</li>
          <li>SonarQube / SonarLint</li>
          <li>Postman</li>
          <li>LINQPad</li>
        </div>
        <div>
          <strong>ORM:</strong>
          <li>Enitity Framework Core</li>
          <li>Dapper</li>
        </div>
      </div>
    </div>
    )
}

export default Skills
