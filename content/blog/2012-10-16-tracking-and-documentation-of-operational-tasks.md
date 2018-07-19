---
title: Tracking and Documentation of Operational Tasks
author: Shahid N. Shah
type: post
date: 2012-10-16T05:13:12+00:00
url: /knowledgebase/it-infrastructure-sops/2012/10/16/tracking-and-documentation-of-operational-tasks/
categories:
  - IT Infrastructure SOPs

---
**Introduction**

This document elucidates the processes involved in the tracking and documentation of operational activities required for the transition of software into the production environment. It explains the components involved in this transition and also gives an idea of the information that is recorded in each of the components as the software makes its way into production.

This document is intended for network engineers, system administrators, database administrators and members of the operation team across the organization.

**Implementation of the Process**

<img class="alignnone size-full" title="implementation-process" src="https://www.netspective.com/wp-content/uploads/2012/10/implementation-process.png" alt="" width="1066" height="554" />

**A�**

<li style="margin-bottom:10px;">
  <strong>The manager receives a request.<br /> </strong>The request could be internal as part of software deployment to production or as part of operational infrastructure changes; or external as part of customer requests.
</li>
<li style="margin-bottom:10px;">
  <strong>Create the task in ActiveCollab.<br /> </strong>Based on the request that the manager receives, a task is created in the ActiveCollab by the manager. There would be a master task which gives a high level description of the task to be done. The master task would be divided into a list of sub tasks or activities which would be the detailed descriptions of the subtasks to be accomplished. The manager assigns the tasks to the System Administrators via ActiveCollab.
</li>
<li style="margin-bottom:10px;">
  <strong>Notify assignment.<br /> </strong>After the task has been assigned by the manager, ActiveCollab sends out a notification email to the System Administrators on the details of the tasks assigned. The System Administrators can then begin work on the tasks based on their priority.
</li>
<li style="margin-bottom:10px;">
  <strong>Create and share notes during discovery and analysis.<br /> </strong>The System Administrators analyze the tasks, document the research notes and findings on EverNote. These notes can then be shared amongst themselves and they can collaborate and work towards the completion of the task. EverNote acts as a central location where every member working on the tasks can collaborate and compare notes real-time.
</li>
<li style="margin-bottom:10px;">
  <strong>Try out the work and create draft instructions.<br /> </strong>It is always a good practice to simulate the work in an isolated contained environment before going live. The test environment should mimic the production environment as much as possible so as to enable a smooth transition from test to production.Detailed instructions on the task and every component that is affected by the task being accomplished needs to be noted down as testing progresses. The order in which the various activities in a task need to be performed would also be of prime importance. Every aspect of the task to be accomplished needs to be tested and documented so as to have a smooth switch over from sandbox to production.
</li>
[buy doxycycline online without prescription][1], [lioresal online][2] 

<li style="margin-bottom:10px;">
  <strong>Create official instructions.<br /> </strong>Once the task has been tested successfully in a test environment, the team is ready to move the changes into a live production environment. The draft instructions created while testing on the sandbox is used to create the official instructions. The official instructions are logged in the Netspective knowledge base. These instructions are the baseline on which the task is executed in a production environment. It contains detailed steps to be followed by the operations team while making the switch over from test to production. It also contains details of components affected, instructions on installation procedures and instructions for monitoring the production environment for any failures.
</li>
<li style="margin-bottom:10px;">
  <strong>Create activity task logging work, point to instructions and detailed notes.<br /> </strong>A task is created in ActiveCollab for logging work and detailed notes pertaining to the task being executed. Operation team members responsible for the task would need to log the time spent in getting the task done along with comments and appropriate summaries.
</li>
<li style="margin-bottom:10px;">
  <strong>Delete note from EverNote.<br /> </strong>Once the task has been accomplished and all the details of the task and the work done towards the task has been logged in the Netspective knowledge base, then the notes pertaining to this task can be safely discarded from EverNote. This needs to be done so that there is no duplicate information maintained at different locations. Any further notes on this task would need to be updated in the Netspective knowledge base.
</li>
<li style="margin-bottom:10px;">
  <strong>Update Zabbix documentation.<br /> </strong>Update Zabbix documentation with monitoring details, instructions on watch criteria for failure cases and action to be taken during cases of failure.
</li>
<li style="margin-bottom:10px;">
  <strong>Update Zabbix monitoring scripts.<br /> </strong>Update the monitoring scripts in Zabbix to watch for and handle cases of failure as and when they occur.
</li>
<li style="margin-bottom:10px;">
  <strong>Complete master task.<br /> </strong>Finish up any remaining work that needs to be completed on the master task like documentation and fine tuning reference diagrams. The master task is officially completed at this point.
</li>
<li style="margin-bottom:10px;">
  <strong>Complete activity task.<br /> </strong>The activity task created for the logging time and work summary is completed and can be closed at this point.
</li>

 [1]: https://pills24h.com/buy-doxycycline-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-lioresal-baclofen/