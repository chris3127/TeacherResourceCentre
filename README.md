# T4A2 - Full Stack Application Part B

# Teacher Resource Centre



This application has not been successfully deployed. 

The backend api was attempted to be run using Heroku but would not connect the the database.

https://git.heroku.com/teacher-resource-centre.git

The frontend was build but not deployed.

The monorepo is available here:

https://github.com/chris3127/TeacherResourceCentre

## Website Description

\- Purpose
\- Functionality / features
\- Target audience
\- Tech stack

The Teacher Resource Centre (TRC) is designed as a document storage and retrieval application and database.
The goal is to reduce duplication of effort by making available teaching resources that are grouped by subject, year, state and level.

**The purpose** of the website is to reduce the time and effort that is required to create high quality resources for the classroom, a task that is generally undertaken out of work hours, to reduce the workload of teachers outside the classroom.

**The functionality** of the TRC MVP attempted to connect to a document database where a teacher could see a list of documents available which would correspond to lessons to teach. They would be able to add new documents and edit existing ones.

Post-MVP will have a login function to identify users, more data fields for the documents and filtering based on lesson requirements.

The initial login function will serve to identify each individual user. During the initial phase, each user will have access to all the resources in the database, however this will change as users will be grouped and access limited to the resource group they have paid for.

The search functionality has been simplified after User Testing. Previously the documents were filtered based on year, state, level and subject, however that was found to be too complex so all documents are now displayed when the website is opened for a simple User Experience (UX).  Future iterations will incorporate filtering to remove unnecessary documents and user roles will restrict the ability to edit and delete documents.

The backend database will not store the resources directly, rather links and descriptions to enable faster searching. The resources will be stored in a larger database, and cached in local CDNs for faster delivery, similar to the Spotify architecture.

**The target audience** of the application is teachers and educators who, as Australia moves to a national curriculum, are now required to create all new resources for their lessons. Having a pool of high quality resources available will allow teachers and educators to focus on better classroom experiences tailored to the level of their students and compliant with the relevant state Department of Education guidelines. Ultimately, it aims to give teachers more time to focus on the students and less time spent creating resources and preparing for departmental audits.

**The Tech Stack** of the application will be a MERN stack. The front-end framework will be React, the back-end framework will be Express, the Javascript runtime environment will be Node and the database will be MongoDB Atlas.



## Dataflow Diagram

The TRC dataflow diagram is located in the docs folder (TRCDataflow.pdf).



## Application Architecture Diagram

The TRC application architecture diagram is located in the docs folder (TRCArchitecture.pdf).

It covers a high level overview of the MVP application. There are 5 specific parts covering the presentation layer, authentication, business logic (including middleware), the Mongo database and file storage.

**1.** Presentation layer is primarily React and Javascript with a small amount of HTML.

**2.** The authentication will be run through the middleware PassportJS using Javascript Web Tokens to authenticate the API endpoints. (not complete)

**3.** The business logic will be written in Javascript. The server runtime environment will be using NodeJS with an ExpressJS framework. 

Middleware including Helmet for secuity, bodyparser for API calls and mongoose to connect to the Mongo database. 

**4.** The database that will be used is MongoDB Atlas. Queries will be passed in the MVP in GET requests, to return JSON data.

**5.** The main resource storage will be separate from the queried database. The individual resources will be linked to allow the user to download the resource independently. This structure may change post-MVP to further control access to the resources.



## Wireframes

Wireframes were created in InVision Studio and accessible through this link to view as one. 

https://chris621770.invisionapp.com/freehand/TRC-7E6npicO9?v=1nAxpcGuPdOxhkssz9ygXg%3D%3D&linkshare=urlcopied

Individual page screenshots are included in the docs folder.

Link to images hosted on imgur:

https://imgur.com/a/geJwf6b





## Trello

Screenshots of Trello project workflow in docs folder. 

The board is set up with Agile methodology in mind. As user stories that encompass specific functionality are created as a new card they are put in the backlog and assigned a priority tag. Cards that are to be worked on during the sprint are relocated to the To Do list, and when work begins they are moved to the In Progess list. Upon completion they are sent to the review list to undergo code review and testing before being moved to the Done list. 

Currently the MVP user story relating to accessing the database is working locally but is unable to connect to the database through Heroku. The functionality of adding and editing records was incorporated and the secure login and user identification has been moved to post MVP sprint.

