---
title: High Network (Average Response Time)
author: Shahid N. Shah
type: post
date: 2012-10-16T11:40:25+00:00
url: /knowledgebase/sensitive-sops/2012/10/16/high-network-average-response-time-2/
categories:
  - Sensitive SOPs

---
# AppFirst:

<div>
  <div>
  </div>
  
  <div>
    On AppFirst Workbench for the particular server we checked the Intercepted Processes.
  </div>
  
  <div>
    From that we will get process&#8217;s ART and Process ID.
  </div>
  
  <div>
    ![appfirst](/blog/1.jpg#center) 
  </div>
  
  <div>
    <div>
      Now in server on the particular location root@php:/proc/<PID>/cwd# we will get the process location
    </div>
    
    <div>
      In our case majority of the process that took high ART was of hitpshere.
    </div>
    
    <div>
    </div>
    
    <div>
      New Relic:
    </div>
    
    <div>
    </div>
    
    <div>
      We checked the New Relic and in that pages that took most time consuming is /views_pages.
    </div>
    
    <div>
      In Slow Transactions mostly Hitsphsre pages are coming.
    </div>
    
    <div>
      While checking Trace Detals and SQL Statements in details we came to know that the Slowest component is hitsphere_feed_field_formatter_full and this took maximum duration ( Apprx 63000 ms)
    </div>
    
    <div>
     ![newrelic](/blog/2.jpg#center) 
    </div>
    
    <div>
      <div>
      </div>
      
      <div>
      </div>
      
      <div>
        <a href="https://www.netspective.com/wp-content/uploads/2012/10/3.jpg"><img class="alignnone size-large wp-image-60415" title="3" src="https://www.netspective.com/wp-content/uploads/2012/10/3-1024x122.jpg" alt="" width="711" height="84" srcset="https://www.netspective.com/wp-content/uploads/2012/10/3-1024x122.jpg 1024w, https://www.netspective.com/wp-content/uploads/2012/10/3-300x35.jpg 300w, https://www.netspective.com/wp-content/uploads/2012/10/3.jpg 1334w" sizes="(max-width: 711px) 100vw, 711px" /></a>
      </div>
      
      <div>
        <div>
          After checking with the development team, we commented out that function from /usr/share/nginx/www/hitsphere.com/sites/all/themes/hitsphere/template.php and now the ART comes to normal.
        </div>
        
        <div>
        </div>
        
        <div>
          In Appfirst till now we are not getting any alerts.
        </div>
        
        <div>
          In Newrelic graph shows Average Response Time is below 1 sec.
        </div>
      </div>
      
      <div>
        <a href="https://www.netspective.com/wp-content/uploads/2012/10/4.jpg"><img class="alignnone size-full wp-image-60417" title="4" src="https://www.netspective.com/wp-content/uploads/2012/10/4.jpg" alt="" width="993" height="450" srcset="https://www.netspective.com/wp-content/uploads/2012/10/4.jpg 993w, https://www.netspective.com/wp-content/uploads/2012/10/4-300x135.jpg 300w" sizes="(max-width: 993px) 100vw, 993px" /></a>
      </div>
      
      <div>
        <div>
        </div>
        
        <div>
          ***************************************************************************************************
        </div>
        
        <div>
        </div>
        
        <div dir="ltr">
          <div>
            We have set cron to run on every 12 hour.
          </div>
          
          <div>
          </div>
          
          <div>
            After running cron we are getting alerts on Average Response Time.
          </div>
          
          <div>
            While checking NewRelic Slow responses, slow components are from ?<span>theme_feed_field_formatter_full in hitsphere.</span>
          </div>
          
          <div>
            <span><br /> </span>
          </div>
          
          <div>
            With the help of Development Team edited the file /usr/share/nginx/www/hitsphere.com/sites/all/modules/feed_field/feed_field.module by modifying the function &#8220;theme_feed_field_formatter_full&#8221;
          </div>
          
          <div>
          </div>
          
          <div>
            Now ART comes to normal.
          </div>
          
          <div>
          </div>
          
          <div>
            Waited for one hour and ART remains normal. Then for testing we manullay run the cron.
          </div>
          
          <div>
          </div>
          
          <div>
            At that time in new relic at the time span of running cron it shows an increase in the average response time and it bagain come to normal.
          </div>
          
          <div>
            <a href="https://www.netspective.com/wp-content/uploads/2012/10/6.jpg"><img class="alignnone size-full wp-image-60418" title="6" src="https://www.netspective.com/wp-content/uploads/2012/10/6.jpg" alt="" width="729" height="386" srcset="https://www.netspective.com/wp-content/uploads/2012/10/6.jpg 729w, https://www.netspective.com/wp-content/uploads/2012/10/6-300x158.jpg 300w" sizes="(max-width: 729px) 100vw, 729px" /></a>
          </div>
          
          <div>
            <a name="769"></a>For the next few hours ART comes to normal.
          </div>
          
          <div>
            <a href="https://www.netspective.com/wp-content/uploads/2012/10/7.jpg"><img class="alignnone size-full wp-image-60420" title="7" src="https://www.netspective.com/wp-content/uploads/2012/10/7.jpg" alt="" width="929" height="439" srcset="https://www.netspective.com/wp-content/uploads/2012/10/7.jpg 929w, https://www.netspective.com/wp-content/uploads/2012/10/7-300x141.jpg 300w" sizes="(max-width: 929px) 100vw, 929px" /></a>
          </div>
          
          <div>
            <div dir="ltr">
              Now we have updated cron to run again on every 2 hours.
            </div>
            
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>