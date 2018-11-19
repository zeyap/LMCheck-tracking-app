# Milestone 4: Implementation

## Table of Contents



## Effort & Accountability

| Team Member Name  | Effort |
| ------------- | ------------- |
| Sangmin Kim | Numeric measurement, Data Visualization  |
| Zhiyu Mao  |   |
| Zeya Peng  | Dashboard, Screen layout, To-do list function, Data storage  |
| Daniel Ra  | Timer function  |
| Cynthia Yue  | Color Selection, User testing  |
| Zidong Zhang  | Debuging, Organizing documentation, User testing  |

## Scenario-based Design
We tested our design extensively in our last milestone and identified major issues before implementation began. 

To reiterate, we paper prototyped 2 complete versions of our design. 
Paper prototype of our first design: 
https://github.coecis.cornell.edu/info4340-fa2018/jack-and-coke-project/raw/master/documents/milestone3-design/paper-prototype/paper-prototype-v2-components.png 

Paper prototype and Pencil Wireframe of our second design: 
https://github.coecis.cornell.edu/info4340-fa2018/jack-and-coke-project/raw/master/documents/milestone3-design/paper-prototype/paper-prototype-FINAL-components.png 


Changes addressed in this second version were made to the fitness tracker, nav bar, and data visualization. 

Fitness Tracker - originally included + / - buttons to incrementally increase value being tracked by 1. Removed these bottons. In our gym tracking scenario, not all instances will have a need for values to be tracked in increments of 1. If Jason, our gym goer, is going to the gym to record his running distance in miles that day, it will be easier for him to enter the final amount after his running session. Having the +/- buttons gave the impression that tracking in increments of 1 was required / encouraged. 

The Nav Bar - we realized that there wasn't a need for home and settings buttons. The Add Tracer (+) button was placed in the bottom right, rather than the center, for more accessibility. This makes it easier for our users to create a new trackers in all scenarios. 

Data visualization - our original design features a page that displays a graph of activity over time with a table  of specific values per date beneath it. We separated this in our new design -- graph and tables are displaed in separate sections. The original design does not serve Chelsea, our sleep tracker, who wants to look at her previous night's sleep to better understand her current mood. Previous design doesn't make this information accessible because it pushes it beneath the visualization. 

High Fidelity Design 1: 
ENTER LINK HERE 
High fidelity version incorporates a color palette based on a mood map created by our team. We searched for appropirate color choices that convey moods / adjectives users described in our interviews. For example, our interviewees used words such as "productive", "organized" and "improvement" to describe the process of tracking their activities. Different colors are used to reperesent different tracker formats. 


High Fidelity Design 2: 
ENTER LINK HERE
After preliminary user testing, our team decided that our color scheme did not sufficiently separarate each tracker created by the user. For example, a time based tracker has the same header color (blue) as a shopping list. We changed this to make the different colors representing each tracking format consistent throughout the app. This is useful when a user is switching from one scenario to another. For example, when a user exits a gym tracking scenario and enters a grocery list building scenario, different colors will be helpful in representing different scenarios. 


## Planning & Psuedocode 

## Coding 

## User Testing 



