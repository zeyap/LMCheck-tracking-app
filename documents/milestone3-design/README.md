# Milestone 3: Design

## Brainstorming

Each of teammembers did 2 minutes brainstorm ideation for each functionalities we made in previous milestone (2 minutes and 4 sketches per functionalities). And then we grouped all sketches together and discussed as a group to vote great design ideas (circled in color). 

![](brainstorm/brainstorm.jpeg)

<div class='page-break'></div>

**functionality 1:**
The ability to input and track specific exercises / to do lists / what I did last time so i can decide what to do this time etc. 

![](brainstorm/Functionality-1.png)

<div class='page-break'></div>

**functionality 2:**
The ability to track a before and after so that it will be able to calculate the difference to show the user their progress.

![](brainstorm/Functionality-2.png)

<div class='page-break'></div>


**functionality 3:**
 The ability to control the type of information and amount specific to my needs on the landing. 

![](brainstorm/Functionality-3.png)

<div class='page-break'></div>

## Paper Prototypes & User Testing
We created paper prototypes based on our brainstorm design ideas and scenarios. And we gave over 12 user testings and revised our design twice based on test feedbacks.

[Click here for detail.](paper-prototype/)

### Version 1
![](paper-prototype/paper-prototype-v1.png)
<div class='page-break'></div>

### Version 2
![](paper-prototype/paper-prototype-v2-components.png)
<div class='page-break'></div>

### Version FINAL
**phone version**
![](paper-prototype/paper-prototype-FINAL-components.png)
**web version**
![](paper-prototype/paper-prototype-FINAL-components-web.jpeg)
<div class='page-break'></div>



## Site Map
![](SiteMap.jpg)
<div class='page-break'></div>

## Workflow
![](workflow.png)
<div class='page-break'></div>

## Wireframes (Phone & Web)
### Phone version
[Click here](wireframes/wireframes-phone/)

**numeric**
![](wireframes/wireframes-phone/wireframe-phone-numberic.png)
<div class='page-break'></div>

**timer**
![](wireframes/wireframes-phone/wireframe-phone-timer.png)
<div class='page-break'></div>

**to do list**
![](wireframes/wireframes-phone/wireframe-phone-todolist.png)
<div class='page-break'></div>

### Web version
[Click here](wireframes/wireframes-web/)

**numeric**
![](wireframes/wireframes-web/wireframe-web-numeric.png)
<div class='page-break'></div>

**timer**
![](wireframes/wireframes-web/wireframe-web-timer.png)
<div class='page-break'></div>

**to do list**
![](wireframes/wireframes-web/wireframe-web-todolist.png)
<div class='page-break'></div>



## Rationale

### The Design
Our design offers three main types of trackers: time based, numeric measurements and a to-do list. Time based trackers require taps to start / stop a timer in order to log time data. Numeric measurements allow users to enter customized units of measurements and log numeric values associated with the unites they create. To-do lists allow users to enter line items in a list-like format that they can revisit and cross off when appropriate. 

Users are able to create trackers from the home screen. Once tracker creation is prompted, users will specify the tracker type they wish to use (time based, numeric measurement or to-do list) and title it. After creation, the trackers will be accessible from the home screen. When a user accesses a previously created tracker from the home screen, they are directed to a screen that allows them to log new inputs. Both time based and numeric measurements have visual components that show a user’s logs over time in a line graph. Users are also able to access previous logs in an editable table format. 

### Meeting User Needs 
Through our time based and Numeric measurement based trackers, Jason is able to easily log the number of pushups he does and total time spent on the treadmill while he is at the gym. He can also choose to log his weight when it’s convenient for him. Our design will log Jason’s input and automatically associate each input with a timestamp. Jason will be able to access both a table and a visualization of all his logs. This enables Jason to effectively gauge his progress over time as well as look at performance for specific dates so he can set goals for current workouts to continue improving. 

Chelsea can easily track her sleep times and hours by creating a time based tracker. She will need to tap to start the timer before she goes to sleep and tap to stop / finish when she wakes up. If Chelsea is feeling particularly unfocused on a certain day, she can access her sleep tracker inputs in a table format, which will allow her to easily see the total amount of hours she slept the night before. 

Lastly, Heather wants an easy way to be able to keep track of all the things she needs to buy at the grocery store. She can create a to-do list and input all the items she needs line by line. To-do trackers are editable, so line items can be added if she randomly remembers to buy something at a later time. When Heather is at the grocery store, she can pull out her to-do list and check off items as she retrieves them from the store(s).


### User Testing
We employed several rounds of user tests. Tests with initial paper prototypes showed basic flaws in our navigation -- like back buttons appeared in areas that didn’t make sense, etc. We iterated upon these findings quickly. 

Once these issues were addressed, we tested with 4 users. In this version of our design, users are able to create trackers and add modules for different formats of input, which allows users to mix different input formats in a single tracker. For example, a user can create a “workout” tracker and add a to-do, numeric measurement and time based module into this tracker. This requires an additional layer from our final design. Giving our users the ability to mix and match different input formats into one tracker confused them. They didn’t understand why the option to add a “to-do” list was present while creating a workout tracker. Also, because the ability to add different format modules in a single tracker needed to be communicated without utilizing a lot of space. We included small icons at the buttons at the bottom of the screen to signify each module type. This replaced the main navigation buttons, which confused our users. The icons we used were not intuitive, and we struggled with finding icons that effectively conveyed each module type. 

To remedy this, we removed this ability to add different modules to trackers. In our final design, trackers are set up from the home screen. Each tracker is associated with only a single format for a very specific variable (i.e. sleep, pushup, etc.). We created a final paper prototype and user tested with 3 participants. Each participant was given a different scenario, and were able to accomplish our tasks without any problems. 


## Revisions to Scenarios and Personas
Based on feedback from Kyle, we revised scenarios from Milestone 2 to ensure they are specific enough to be tested and measured. We also clarified our Personas' goals so that they are more specific. 
See updated personas here: 
[Jason](revisedContent/persona-jason.png)
[Heather](revisedContent/persona-heather.png)
[Chelsea](revisedContent/persona-chelsea.png)


**Gym tracking:**
Jason, a professional in his late thirties wants to lose weight and be more fit. He starts going to the gym more frequently and wants to increase the productivity of his workouts. He wants to know if his workouts improve over time. 

**Sleep Tracking:**
Chelsea, a working grad student in her mid twenties is often tired due to lack of sleep. She wants to better understand how her sleep habits affect her moods, energy levels and overall mental well-being. 

**Grocery to do list:**
Heather, 28 year old woman working multiple jobs, wants to keep track of all the items she needs to buy from the grocery store. It is difficult for her to remember while juggling two jobs. She needs to be reminded of all the things she needs to buy while she is at the grocery store. 

[(PDF version here.)](revisedContent/scenarios-revised.pdf)
