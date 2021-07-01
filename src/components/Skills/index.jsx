import React from 'react'
import "./style.css"

const Skills = () => {
    return (
        <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <ul>
            <li>C#</li>
            <li>SQL / T-SQL</li>
            <li>VB.NET</li>
            <li>VBA</li>
            <li>CSS3</li>
            <li>HTML5</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div>
          <strong>Libraries:</strong>
          <ul>
            <li>Selenium</li>
            <li>HTML Agility Pack 5</li>
            <li>Newtonsoft.json</li>
            <li>Telerik .Net</li>
            <li>React.js</li>
          </ul>
        </div>
        <div>
          <strong>Tools:</strong>
          <ul>
            <li>Visual Studio</li>
            <li>Visual Studio Code</li>
            <li>Sql Server Management Studio</li>
            <li>SonarQube / SonarLint</li>
            <li>Postman</li>
            <li>LINQPad</li>
          </ul>
        </div>
        <div>
          <strong>ORM:</strong>
          <ul>
          <li>Enitity Framework Core</li>
          <li>Dapper</li>
          </ul>
        </div>
        <div>
          <strong>Frameworks and Design Patterns:</strong>
          <ul>
          <li>WPF</li>
          <li>ASP.NET Core</li>
          <li>.NET Framework 4.8+</li>
          <li>.NET Core</li>
          <li>MVVM</li>
          <li>MVC</li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Skills
