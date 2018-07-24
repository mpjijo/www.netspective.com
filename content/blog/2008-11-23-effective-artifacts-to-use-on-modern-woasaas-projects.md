---
title: Effective artifacts to use on modern WOA/SaaS projects
author: Shahid N. Shah
type: post
date: 2008-11-23T04:58:35+00:00
url: /uncategorized/2008/11/23/effective-artifacts-to-use-on-modern-woasaas-projects/
categories:
  - Netspective Blogs
  - Uncategorized

---

<p class="MsoHeader">
  <span>This post summarizes the recommended artifacts in an agile methodology called SPEED (Streamlined Process for Effective Enterprise Development) &#8211; see </span><span>diagram below</span><span>.</span>
</p>

### Overview

<p class="MsoNormal">
  <span>Let&#8217;s start with some overall thoughts before we dive into this busy picture:</span>
</p>

<ul type="disc">
  <li class="MsoNormal">
    <strong><span>Grouping</span></strong><span>: Artifacts are grouped into the functional areas that comprise software project teams: Management, Analysis, Development, Documentation, Testing, and Operations. Many artifacts related to software products are also created by teams that take the software to market and interface with prospects and customers: Services, Marketing, and Sales.</span>
  </li>
  <li class="MsoNormal">
    <strong><span>Minimalism</span></strong><span>: Strictly limit artifacts to only those that directly help conceive and build quality software.Ensure that each artifact has &#8220;consumers&#8221; who will use the artifact and derive value. On agile projects, every artifact should be as &#8220;lean and mean&#8221; as possible.If a one-page diagram or writeup suffices, that is ideal. If not, still try to be as brief as possible.</span>
  </li>
  <li class="MsoNormal">
    <strong><span>Iterations</span></strong><span>: Most artifacts should be created in an iterative fashion.They often start out as a simple outline and then get fleshed out as the project proceeds and details become known. Some artifacts (shown in <em>italics</em>) are useful when they are initially created and can subsequently be abandoned as the project proceeds (e.g. a GUI Storyboard doesn&#8217;t need to be updated after its purpose is served and the actual GUI is being built).</span>
  </li>
  <li class="MsoNormal">
    <strong><span>Ownership</span></strong><span>: While many artifacts are created in a collaborative fashion it is generally recommended that one person &#8220;owns&#8221; each artifact and acts as its &#8220;committer.&#8221; This will ensure the artifact&#8217;s conceptual integrity and improve quality.</span>
  </li>
  <li class="MsoNormal">
    <strong><span>Maintainability</span></strong><span>: Push technical documentation to lowest level possible (e.g., in code instead of a design document).This vastly improves the chances that such documentation will be read and later maintained as the code matures.</span>
  </li>
  <li class="MsoNormal">
    <strong><span>Reviews</span></strong><span>: Only expend limited quality assurance (QA) efforts on artifacts that are project or customer deliverables. For only these artifacts, clarify their compliance with guidelines (use of templates, adherence to standards, etc.)</span>
  </li>
</ul>

<p class="MsoNormal">
  <span>Note that some artifact names have portions enclosed in angle brackets this is a notation to indicate a templatized name that should be substituted by an actual name (e.g., <Component> Design may be instantiated as Authentication Design).Now let&#8217;s walk through some high-level commentary about the artifacts shown in the diagram grouped by functional area.</span>
</p>

### Management

<ul type="disc">
  <li class="MsoNormal">
    <span>As a project is initiated, the Program Manager creates a <span>project<strong> Strategy</strong></span> and <strong>Initiation Plan</strong> to kick things off and gain approval for proceeding. These two artifacts address broad &#8220;why, what, how, and when&#8221; questions about the project.The Project Sponsor uses these artifacts to gain approval for the project.</span>
  </li>
  <li class="MsoNormal">
    <span>The Process Coach creates process artifacts (<strong>Methodology</strong>, <strong>Artifacts </strong>diagram, and <strong>Internal Release Process</strong>) collectively specify the software development lifecycle (SDLC) and periodically refines these as the team learns from execution. At the end of internal releases or the whole project, the team reflects on how things went and captures lessons learned in <strong><Internal</strong> <strong>Release> Assessments</strong> or a <strong>Post Mortem Report</strong><span> respectively</span>.These lessons drive ongoing process tuning by the Process Coach.</span>
  </li>
  <li class="MsoNormal">
    <span>The Program Manager works with the Initiation Team to create a <strong>Communications Plan </strong><span>shows how the team members will communicate (meetings/huddles, collaboration tools) and </span>captures how to spread the word about the project both internally and externally.</span>
  </li>
  <li class="MsoNormal">
    <span>After project approval, the Program Manager works with various Functional Team Leads to create a <strong>Release/Staffing Plan</strong>.This artifact defines the project&#8217;s incremental phases/internal releases and the team structure and staffing/roles.The Program Manager collaborates with the Release Manager to coordinate internal and external releases.</span>
  </li>
  <li class="MsoNormal">
    <span>As the project kicks off, each Functional Team Lead (for Analysis, Development, Testing, and Documentation) creates a <strong><Functional></strong> <strong>Team Plan</strong> showing who will do what at a macro level. For each internal release, Team Plans are subsequently detailed to show tasks/assignments/effort estimates and load balanced on a weekly basis during execution. Functional Team Leads e-mail a <strong><Functional>Team Weekly Status </strong>update to the Program Manager who conducts a weekly team meeting and distributes an overall <span>project<strong> Status Report <Week></strong></span>.</span>
  </li>
</ul>

### Analysis

<ul type="disc">
  <li class="MsoNormal">
    <span>The Business Architect (typically a domain expert and/or a power user) defines germane terminology in a <strong>Glossary</strong>, portrays the typical users as <strong>Personas</strong>, and describes what they want to do with the software via informal <strong>User Stories</strong>.</span>
  </li>
  <li class="MsoNormal">
    <span>Product Managers define the project&#8217;s high-level <strong>Scope </strong>and create a compelling presentation showcasing the project&#8217;s <strong>Highlights</strong>. They should also create a <strong>Functional Architecture </strong>diagram to illustrate the macro logical components of the system and their interrelationships, while a concomitant spreadsheet explains what each of these components signify. </span><!--[if gte mso 9]>  Normal 0      false false false  EN-US X-NONE X-NONE              MicrosoftInternetExplorer4              <![endif]-->
    
    <!--[if gte mso 9]>                                                                                                                                            <![endif]-->
    
    <!--  /* Font Definitions */  @font-face 	{font-family:Wingdings; 	panose-1:5 0 0 0 0 0 0 0 0 0; 	mso-font-charset:2; 	mso-generic-font-family:auto; 	mso-font-pitch:variable; 	mso-font-signature:0 268435456 0 0 -2147483648 0;} @font-face 	{font-family:"Cambria Math"; 	panose-1:2 4 5 3 5 4 6 3 2 4; 	mso-font-charset:0; 	mso-generic-font-family:roman; 	mso-font-pitch:variable; 	mso-font-signature:-1610611985 1107304683 0 0 159 0;}  /* Style Definitions */  p.MsoNormal, li.MsoNormal, div.MsoNormal 	{mso-style-unhide:no; 	mso-style-qformat:yes; 	mso-style-parent:""; 	margin:0in; 	margin-bottom:.0001pt; 	mso-pagination:widow-orphan; 	text-autospace:none; 	font-size:8.0pt; 	mso-bidi-font-size:9.0pt; 	font-family:"Arial","sans-serif"; 	mso-fareast-font-family:"Times New Roman";} .MsoChpDefault 	{mso-style-type:export-only; 	mso-default-props:yes; 	font-size:10.0pt; 	mso-ansi-font-size:10.0pt; 	mso-bidi-font-size:10.0pt;} @page Section1 	{size:8.5in 11.0in; 	margin:1.0in 1.0in 1.0in 1.0in; 	mso-header-margin:.5in; 	mso-footer-margin:.5in; 	mso-paper-source:0;} div.Section1 	{page:Section1;}  /* List Definitions */  @list l0 	{mso-list-id:2017612301; 	mso-list-template-ids:-486228800;} @list l0:level1 	{mso-level-number-format:bullet; 	mso-level-text:i; 	mso-level-tab-stop:.5in; 	mso-level-number-position:left; 	text-indent:-.25in; 	mso-ansi-font-size:10.0pt; 	font-family:Symbol;} ol 	{margin-bottom:0in;} ul 	{margin-bottom:0in;} -->
    
    <!--[if gte mso 10]> <!   /* Style Definitions */  table.MsoNormalTable 	{mso-style-name:"Table Normal"; 	mso-tstyle-rowband-size:0; 	mso-tstyle-colband-size:0; 	mso-style-noshow:yes; 	mso-style-priority:99; 	mso-style-qformat:yes; 	mso-style-parent:""; 	mso-padding-alt:0in 5.4pt 0in 5.4pt; 	mso-para-margin:0in; 	mso-para-margin-bottom:.0001pt; 	mso-pagination:widow-orphan; 	font-size:10.0pt; 	font-family:"Times New Roman","serif";} -->
    
    <!--[endif]-->
    
    <!--[if gte mso 9]>  <![endif]-->
    
    <!--[if gte mso 9]>   <![endif]-->
    
    <span>The Analysts also create a <strong>Domain Model</strong> spreadsheet listing the business entities that the software will operate with. </span>
  </li>
  <li class="MsoNormal">
    <span>As Business/Functional Analysts work with Architects and Developers to analyze and design the system, they create <strong>Concept Models</strong> to capture what the user&#8217;s mental model is for the software&#8217;s underlying concepts. The Wireframe Modeler creates wireframe GUI layouts packaged into a <strong>GUI Storyboard</strong>, while styles and branding are specified via a <strong>Visual Design Concept </strong><span>by the Graphics Designer</span>. Detailed user interactions are modeled via <strong><Component></strong> <strong>GUI Statecharts </strong>and other specifications are captured as <strong><Component></strong> <strong>Requirements </strong><span> </span>these artifacts are started by Analysts but completed by Architects and Developers during development.</span>
  </li>
</ul>

### Development

<ul type="disc">
  <li class="MsoNormal">
    <span>Early on in the project, Architects evaluate macro technical choices via <<strong>Alternatives> Evaluation</strong> matrices (scores against weighted criteria). Developers may be involved to build throwaway <strong>Prototypes</strong> to explore details of some of these technical alternatives.</span>
  </li>
  <li class="MsoNormal">
    <span>Before much code is written, the Build Engineer should work with Developers to define and automate Configuration Management (CM) and Continuous Integration (CI) and capture relevant tools/steps in a <strong>Build Process </strong>document.</span>
  </li>
  <li class="MsoNormal">
    <span>The high-level structure of the software should be captured by Architects in a <strong>Technical Architecture</strong> diagram & document. Architects and Developers then create <<strong>Component> Design</strong> documents to propose, solidify, and explain the non-trivial aspects of the code. How existing code or customers will be affected may be formally analyzed and documented in <strong>Impact Analysis</strong> writeups jointly created by Architects and Developers. If security is important to the project, a formal architectural risk analysis by a Security Architect will result in a <strong>Threat Model</strong> outlining the key vulnerabilities/Abuse Cases of the system, which then should be mitigated via design or code changes. To help explain the system <strong><Component> Object/Data Models</strong> are often created by Architects and Developers, initially &#8220;as planned&#8221; and finally &#8220;as built.&#8221;</span>
  </li>
  <li class="MsoNormal">
    <span>Various technical standards (<strong>API Strategy</strong>, <strong><GUI, Server, Database></strong> <strong>Coding Standards</strong>, and <strong>GUI Style Guidelines</strong>) should be defined by Architects and Developers early on in the project and refined as the design and code evolves.</span>
  </li>
  <li class="MsoNormal">
    <span>If there is legacy or pre-existing code that will be leveraged by the project, a <strong>Code Reuse Assessment</strong> writeup capturing components, their responsibilities, and key collaborations is very helpful. Data conversion steps for upgrading customers are captured in a <strong>Data Conversion Plan</strong>.</span>
  </li>
  <li class="MsoNormal">
    <span>An<strong> <Internal Release></strong></span><span> consists of demonstrable code and a growing set of unit tests will eventually grow into the <strong>External Release</strong> at the end of the project. <<strong>Internal Release> Notes</strong> at the end of each cycle are used to communicate what features, fixes, and known limitations people should be aware of as the growing codebase is tested.</span>
  </li>
  <li class="MsoNormal">
    <span>As external components are incorporated into the code, Developers must add them to the <strong>Off-the-Shelf Components</strong> list to ensure proper licensing and version tracking/upgrades.</span>
  </li>
</ul>

### Testing

<ul type="disc">
  <li class="MsoNormal">
    <span>The Testing Team Lead creates a risk-driven <strong>Test Strategy</strong> document to specify the overall approach and needs for testing including environment/tools, automation strategy, and quality metrics.</span>
  </li>
  <li class="MsoNormal">
    <span>The Testing Team Lead creates an <strong>Issue Tracking Workflow</strong> & <strong>Submission Checklist</strong> to clarify how issues (defects and/or enhancements) are submitted, fixed, verified and to specify severity level definitions and need for supporting information when submitting issues.</span>
  </li>
  <li class="MsoNormal">
    <span>The Testing<strong> </strong>Team Lead and Testers collaborate to create<strong> <Area> Test Plans</strong></span><span> for various functionality and non-functional areas which are subsequently fleshed out by Manual Testers as <strong>Test Cases/Data</strong> or by Test Automation Specialits as <strong>Regression Test Scripts/Data</strong>.</span>
  </li>
  <li class="MsoNormal">
    <span>The Testing Team Lead delivers internal testing results via a <strong>Test Execution Report </strong><span>detailing what tests passed or failed and comments from Testers and output from failed test scripts</span>. If external validation for specialized areas is sought, they result in <strong><Usability, Security, Performance<span>> Assessment Reports</span></strong>.</span>
  </li>
</ul>

### Documentation

<ul type="disc">
  <li class="MsoNormal">
    <span>Technical Writers produce <strong>User Documentation </strong>such as online help/tutorials, user/training guides, and external release notes.</span>
  </li>
  <li class="MsoNormal">
    <span>Many systems also ship with <strong>Product Content </strong>like tips, best practices, templates, and samples which are typically created by Professional Services staff.</span>
  </li>
</ul>

### Operations

<ul type="disc">
  <li class="MsoNormal">
    <span>The Operations Manager creates a <strong>Deployment Strategy</strong> to define how the software will be moved into production and to map out the various configurations needed for the live system.</span>
  </li>
  <li class="MsoNormal">
    <span>The Operations Manager should also create an <strong>Operational Readiness Checklist</strong> to ensure that all the i&#8217;s are dotted and t&#8217;s are crossed as the system is moved into production.</span>
  </li>
</ul>

### Services

<ul type="disc">
  <li class="MsoNormal">
    <span>Most enterprise-class software requires a set of <strong>Professional Services Offerings</strong><span> defined by the Professional Services Team who also is responsible for creating s</span>pecific <strong>Customer Upgrade Strategy</strong> documents and <strong>Implementation Plans</strong>.</span>
  </li>
</ul>

### Marketing

<ul type="disc">
  <li class="MsoNormal">
    <span>The Marketing Manager creates a <strong>P<span>roduct Launch Strategy </span></strong>to plan the activities surrounding the &#8220;go to market&#8221; timeframe.</span>
  </li>
  <li class="MsoNormal">
    <span>The Marketing Specialist creates <strong>Product Collateral</strong> to assist in sales efforts.</span>
  </li>
</ul>

### Sales

<ul type="disc">
  <li class="MsoNormal">
    <span>The Sales Manager in collaboration with the Sales Account Executives creates a <strong>Product Sales Strategy</strong> to clarify the target markets and pricing.</span>
  </li>
  <li class="MsoNormal">
    <span>The Sales Support Specialist creates a <strong>Sales Presentation</strong> and <strong>Sales Demo</strong> as the project is wrapping up so that these will be ready alongside the finished software.</span>
  </li>
</ul>

<div style="width: 1034px" class="wp-caption alignnone">
  
  <p class="wp-caption-text">
    Artifacts and their interrelationships
  </p>
</div>