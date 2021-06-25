import "./style.css";

const Works = () => {
  return (
    <div className="works">
      <h1>Experiences</h1>
      <br/>
      <h2>Andritz, Inc.</h2>
      <h2>Software Development Engineer - Full Stack</h2>
      <h3>Date: August 2020 - Present</h3>
      <strong>Skills: C#, .NET Framework 4.8+, .NET Core, Fody, Entity Framework Core, Dapper, ASP.NET Core 3.1, REST API, Postman, Xamarin, MS SQL, Unit Testing, Backend Design, Front End Design, Git, WPF, IIOT, JIRA</strong>
      
      <h4>Front End:</h4>
      <li> Collaborate with key customers and product owners to design, create, and maintain features of the WPF application that is the primary UI client for the product. Responsible for developing the XAML layout, code-behind, and business interaction logic to deliver a new feature or provide a bug fix
      </li>
      <li> Experience with developing in the MVVM pattern, dependency injection, and Unit test framework
      </li>
      <h4>API:</h4>
      <li> Support development of all layers of the public and private API’s that serve the mobile and desktop clients of the platform. Responsible for developing the client, controller, and service as necessary to deliver a new feature or provide a bug fix</li>
      <li> Experience fully developing new endpoints, performing maintenance, and routine testing using the patterns employed with ASP.Net Core MVC </li>
      
      <h4>Backend:</h4>
      <li> Develop and maintain the MS SQL Server backend for the platform</li>
      <li> Create and modify schemas for the development of new features on the UI or internal data services</li>
      <li> Review, test, and maintain stored procedures, functions, views, and jobs for some legacy features and specific functionalities that require processing on the server</li>
      <li> Use EF Core Power Tools and other resources to modify the Entity Framework Core implementation to be consistent with database changes</li>

      <br />

      <h2>Andritz, Inc.</h2>
      <h2>Application Analyst</h2>
      <h3>May 2019 - August 2020</h3>
      <strong>Skills: Advanced SQL, C#, SSRS, SSAS, SSIS, JIRA, IIOT</strong>
      <li> Developed services in C# and SQL to generate fake time series process data with logic implemented to test specific features in individual applications.</li>
      <li> Worked to improve data compression process and database maintenance procedures to reduce serious fragmentation issues in MSSQL server that were causing performance downtime issues. </li>
      <li> Developed data-driven reporting solutions on top of the platform’s infrastructure with SSRS to provide custom functionalities to the customer that were outside the scope of the platforms reporting services. </li>
      <li> Developed strategy to extract machine learning models from the platform using SSAS to be used in automation design and advanced business analysis.</li>
      <li> Developed standard procedure for loading mass historical data sets through SSIS.</li>
      <li> Functioned as SME for the applications in several product groups for internal and external users internationally</li>
      <li> Practiced Agile methodology by participating in product development sprints, backlog refinement, and QA using JIRA</li>
      <li> Provided defect resolution support via JIRA ticket system.</li>
      <li> Created user documentation for individual applications.</li>

      <br />
      <h2>Andritz, Inc.</h2>
      <h2>Regional Support Specialist</h2>
      <h3>June 2018 - May 2019</h3>
      <strong>Skills: AWS Redshift, SQL, C#, Excel, Jupyter Notebooks, Python, IIOT</strong>
      <li> Directly supported the projects in the North American region. Worked with the customers on site to gather their business requirements and translate those into configuration strategies for the platform.</li>
      <li> Performed data integration originating from different platforms, such as SAP, to a SQL database ready to be consumed for analytics.</li>
      <li> Established data communication between Andritz enterprise platform and the customers enterprise data repository. This was done by opening communication between the customers Redshift data lake and the EC2 instance hosting the Metris platform, both within the customers enterprise AWS cloud space.</li>
      <li> AWS connection was leveraged to offer a true enterprise solution to our customers where it was not possible before. Different business units from our larger customers would use different 3rd party software for the same workflows. Data from the schemas of each 3rd party platforms was aggregated in Redshift to fit singular uniform interfaces. ETL jobs were then developed to integrate the information into our platform at different physical locations or extracted and delivered to our team to perform advanced enterprise level business analysis for the customers.</li>
      <li> Developed C# forms program to analyze large historical data sets to perform baseline analysis for creating operational and performance limits for KPI generation. Later became a feature in the platform.</li>
      <li> Developed T-SQL scripts to test for non-optimized user configuration that could cause issues with core functionalities of the platform. </li>
      <li> Developed T-SQL scripts to assess and report the maturity of the applications in the platform at individual customer sites. This was used frequently by management during the start-up phase of projects.</li>
      <li> Provided mass configuration services to the customer using SQL. </li>

      <br />
      <h2>Madmen Software</h2>
      <h2>Developer</h2>
      <h3>February 2017 - April 2018</h3>
      <strong>Skills: Angular, Android</strong>
      <li> Herd: Developed an application in iOS and Android to track and report locations of people within a set geo- boundary.</li>
      <li> Hostr: Worked with a local client to develop a web-based app based on a mock-up done by their graphic designers.</li>

      <br />
      <h2>MFG Chemical, Inc.</h2>
      <h2>Chemical Engineering Co-Op</h2>
      <h3>May 2015 - January 2017</h3>
      <strong>Skills: Excel, VBA, VB.NET, SQL, Computational Programming </strong>
      <li> Chemical batch process research and development.</li>
      <li> Developed a full-scale desktop application to perform calculations for process hazard analysis and production planning using VB.Net and SQL.</li>
      <li> Served as global administrator leading the implementation, training, and internal development of Bigfoot maintenance management software.</li>
      <li> Designed and developed an excel VBA program for use by the ERM department to handle day to day shipping and receiving workflows and quarterly vendor performance reviews.</li>
    </div>
  );
};

export default Works;