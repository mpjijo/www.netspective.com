---
title: How to plan for disaster recovery in healthcare and other data critical environments
author: Shahid N. Shah
type: post
date: 2010-09-27T09:59:14+00:00
url: /government-20/2010/09/27/how-to-plan-for-disaster-recovery-in-healthcare-and-other-data-critical-environments/
categories:
  - Government 2.0
  - Netspective Blogs

---
In March 2010, exchange of patient medical information at VA-DOD had to be shutdown because errors kept popping up. In May 2008, heavy flooding forced evacuation of 176 patients from Mercy Medical Center in Cedar Rapids, Iowa as flood waters and sewage seeped into its basement. They barely managed to save their medical records. In May 2007, a massive storm ripped through Greensburg, Kansas and razed the Kiowa County Memorial Hospital, along with 95% of the town. The patients and staff were rescued. It was initially thought that all 17,000 patient records had been lost. After searching through the rubble they were fortunate to find that most of these were secure in a file cabinet. These were close calls, but umpteen such events keep happening, and it&#8217;s not always that luck is on your side.

Like with every other segment that relies heavily on information technology, ensuring the availability of data is of paramount importance in the healthcare sector, more so because people&#8217;s lives depend on it. In fact, DR ranked top on healthcare providers IT shopping lists according to a recent survey on spending priorities of the global healthcare industry, with 44 percent considering it as their top IT investment priority. Moreover, Federal mandates such as the Health Insurance Portability and Accountability Act (HIPAA) and the Joint Commission on Accreditation of Healthcare (JHACO) regulations also require healthcare providers to have data backup, DR and emergency mode operation plans in place.

#### Building a Disaster Recovery Plan:

With hospitals, insurance companies, laboratories, physicians offices, clinics and imaging centers continually accessing the system to add or recover data, ensuring information availability is a very critical need. Even an hour of downtime can have severe repercussions and could negatively impact patient care, apart from causing a lot of other collateral damage. Two key metrics on which you should base your Disaster Recovery plans are the Recovery Time Objective (RTO) and Recovery Point Objective (RPO). These metrics define the allowable down-time and the allowable data-loss per application. The smaller the RTO and RPO window is, the more complex and expensive the recovery plans become. Given below are the basic steps to be followed while building your DR plan:

  1. Secure commitment from top management for allocating adequate time and resources to develop an effective DR plan.
  2. Establish a planning committee that includes representatives from all functional areas of your organization to oversee the development and implementation of the plan.
  3. Perform a risk and business impact analysis taking into consideration all possible disaster scenarios including those arising out of natural, technical and human factors, and rate the probability of their occurrence on a scale of 1 to 5.
  4. Prioritize critical functional areas that are required to continue operations in the event of disaster.
  5. Evaluate various backup options available and identify one that is practical and economically viable for your organization.
  6. Collate essential information such as software / hardware inventory, storage location inventory, backup position, notification checklist, and communication protocol including contact numbers. Using pre-formatted forms helps you do this faster.
  7. Document the plan incorporating step-by-step procedures to be followed and assign responsibilities to appropriate team members for key functional areas such as administrative actions, facilities control, logistics management, customer support, system backup, and restoration.
  8. Test the plan to evaluate the reliability of backup facilities and procedures and identify areas that need modification, if any.
  9. Secure approval of the plan from top management.
 10. Train all personnel involved in backup and recovery procedures. Modify plan from time to time taking into account changed scenarios

#### Currently available DR options:

Listed below are some of the data backup and recovery options currently available. Choose one that is appropriate for your organization.

  * **Tape backup**<span style="text-decoration: underline;">s</span> can serve as a second backup source stored in offsite locations, but are risky, slow and unreliable.
  * **Disk-to-Disk technology** more secure and convenient and can automatically back up from different locations. However, on the downside, disk is more expensive as a storage medium than tapes.
  * **Vaulting** automatically backs up select files at scheduled intervals.
  * **Mirroring / Replication** &#8211; this disk-to-disk process simply creates a data copy between two disk platforms. When trouble strikes the original, data can be restored from the replicated version or possibly even accessed directly from there. Can restore a crashed computer system within hours, instead of days.
  * **Storage Area Network (SAN)** usually found to be reliable, but troubleshooting can be a Herculean task, proved as recently as last month with the massive outage at Virginia Information Technologies Agency&#8217;s Storage Area Network at Richmond.
  * **WAN Optimization** bandwidth friendly, this technology can move tons of data and meet strict recovery requirements.
  * **De-duplication** Often called ?intelligent compression or ?single instance storage, it is designed to minimize use of storage space, and looks for repeating patterns of data at the block and bit levels. After an initial backup, only changed blocks are written to disk during subsequent jobs, thus consuming significantly less storage space.
  * **Continuous Data Protection (CDP)** continuously captures data modifications and stores changes independently of the primary data, enabling recovery points from any point in the past. Offers fine granularities of restorable objects to infinitely variable recovery points.
  * **Snapshot** With snap shot technology, data recovery takes place as fast as the backup process. It creates incremental and differential images with almost zero latency, so there is no need to shut down system applications.

#### Practical tips to improve data availability:

  * Store the data in an all-disk environment, with the newest or regularly accessed data stored in higher-end disk storage devices, and unused or less critical data stored and archived in lower cost disk storage devices.
  * To ensure business continuity, replicate the data across different data centers so that if one data center goes down, the other data center kicks in with zero disruption.
[zoloft for sale][1], [zithromax reviews][2] 

  * Protect your network from infiltration by subscribing to network security. Choose from the numerous security seals available online to perform standard and advanced audit of your system to keep it secure against hacking threats.
  * Ensure 24&#215;7 monitoring and management as well as onsite / remote troubleshooting.
  * Conduct regular disaster recovery drills and periodically test your disaster recovery plan
  * Establish downtime procedures and have carefully drawn out medical treatment protocols in place to switch to during automation failures.
  * Have subject matter experts review networking design, technologies, components and requirements. They can help support Information Availability goals during network outages, especially prolonged ones.

A robust DR plan is like a healthcare plan which guarantees that you will come out fine in the end, should calamity strike. Bad choices can fritter away scarce dollars, risk regulatory compliance, and fail to deliver access to your backups when most needed. Simply put, not having a good DR plan in place is courting disaster.

 [1]: https://pills24h.com/buy-zoloft-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-zithromax-online/