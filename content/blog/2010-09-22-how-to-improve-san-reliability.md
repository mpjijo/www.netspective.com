---
title: How to improve SAN reliability
author: Shahid N. Shah
type: post
date: 2010-09-22T09:58:18+00:00
url: /government-20/2010/09/22/how-to-improve-san-reliability/
categories:
  - Government 2.0
  - Netspective Blogs

---
Recent times have seen frequent data center outages that have seriously affected the day-to-day lives of ordinary citizens. The latest to hog the headlines was the one at Virginia Information Technologies Agency&#8217;s (VITA) Storage Area Network (SAN) located at a large suburban Richmond Computing Center. The problem began on August 25, 2010 with the crash of a pair of three-year-old EMC DMX-3 memory cards. Technical glitches that grew from there soon mushroomed into a weeklong ordeal that affected 485 of the 4800 odd servers at the Center. The outage paralyzed some of the state&#8217;s core agencies and left Gov. Bob McDonnell fuming, prompting him to institute an independent inquiry into the incident. Northrop Grumman that had won the $2.4 billion 10-year contract to manage VITA&#8217;s data centers had a very irate administration on its hands, and plenty of explaining to do.

The VITA incident came close on the heels of another major SAN outage that hit the Kansas Department of Health and Environment crippling the functioning of initiatives like the Kansas Immunization Program; the Kansas Women, Infants and Children program; Bureau of Surveillance and Epidemiology; Health Occupations Credentialing; and the Child Care Program. Though these are isolated incidents, they have sparked serious discussion on whether SAN is really the answer for a flexible, high performance and highly scalable storage environment.

##### Why troubleshooting SAN is such a complex affair.

SAN is essentially a networked pool of high-speed storage devices connected to servers through special SAN switches, allowing rapid data backup and restore, as well as movement and sharing of data between multiple servers. What makes troubleshooting SAN blackouts and brown-outs a daunting task is the increasing complexity of SAN hardware, as well as the multitude of devices and services that exist between the application servers and the storage equipment today.

##### Start with your Servers

Servers make up a major portion of the SAN component stack, and that&#8217;s where you should start looking when troubleshooting performance issues. Current SAN architectures use multiple, independent paths to access RAID-protected data. And with the multi-pathing software being hosted on the servers along with the volume manager, the operating systems, the HBA drivers, and the HBA firmware apart from a host of other things, there&#8217;s a lot that can go wrong with servers. Unless you have each of these components configured as specified by the storage vendor, trouble is just waiting to happen.

##### Regularly update documents

Documenting the SAN topology and defining the performance baselines is an area you should focus your attention on. Capacity growth over time can bring in added complexity, leading to unacceptable performance reductions. You should document these changes to the SAN environment prior to implementation, and the performance baselines must be suitably updated. You should back up and store the switch configuration after every change to the SAN environment, preferably using an automated script. This will enable you to roll-back quickly in case of a mess up while executing the change.

##### Provide real-time access to traffic on SAN links

SAN performance monitoring is a strategic component that should form an integral part of your SAN implementation initiative. Switch and storage management tools provide summary and configuration information about the SAN, but they are blind to the multiple layers of traffic on the SAN links that can impact performance or cause an outage. Your engineers should be allowed non-disruptive access to the multiple layers of traffic on SAN links to conduct real-time analysis if they are to minimize outages and slowdowns. They should be equipped with proper tools and backed by supporting processes to track down critical SAN problems such as application I/O slowdowns, fabric bottlenecks, and device failures at any layer in the protocol stack.

##### Use metrics-based measurement

Metrics-based measurements are objective and repeatable. They accurately reflect network and application performance, and point the way to remedial measures that you should take to rectify problems. It is also advisable to have a metrics-based automated response system in place. Such systems trigger alarms to warn you when performance deteriorates beyond acceptable threshold limits, and will automatically shut down the device that caused the incident, while simultaneously collecting all possible data on the instance to help in the troubleshooting process.

##### Fundamental preventive measures

Suggested below are some fundamental steps that you ought to take to prevent data outages and minimize their impact in the event of occurrence:

  1. Define a contingency policy clearly defining its objectives, scope, key resources assigned, and their roles and responsibilities.
  2. Conduct a business impact analysis (BIA) taking into consideration the availability and performance requirements, and the possible repercussions of failure to adequately meet those requirements. Prioritize critical IT systems and components on the basis of this analysis.
  3. Identify and put in place preventive controls and measures that reduce the probability of disaster occurring or reduce the effects that system disruptions can have on routine functioning of your organization.
  4. Develop recovery strategies based on the types of disasters that you need to be prepared for, and the criticality of various IT systems and components to ensure quick rebound following a disruption.
  5. Develop an IT contingency plan that provides detailed guidance and procedures for restoring a damaged system.
  6. Submit the plan to rigorous tests to identify gaps in the plan. Provide intensive training and conduct regular exercises to keep recovery personnel always in a state of readiness.
  7. Update the plan periodically to keep it current with system enhancements.

Even with these preventive and precautionary measures in place SAN failures can still happen, leaving a lot of stranded data that will be lost. The only option you have then is to fall back on to Plan B, which is to rebuild the lost data from scratch. This is not a very exciting prospect I concede, but you don&#8217;t have much by way of choice. [periactin no rx][1], [cheap dapoxetine][2]

 [1]: https://pills24h.com/buy-periactin-cyproheptadine-online-without-prescription/
 [2]: http://prestige-pharmacy.com/dapoxetine-modern-drug/