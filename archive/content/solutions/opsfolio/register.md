+++
title = "Register"
layout = "register" 
url = "/solutions/opsfolio/register"
slug ="register"
+++
<div class="form-section-block">
  <div class="form-section">
    <form action="https://formspree.io/Gunjan.siroya@netspective.com" method="POST" id="registerform">
      <div class="col-md-6">
        <div class="form-group">
           <input type="text" name="Name" placeholder="Name*" id="firstname" class="form-control">
           <span  class="error" id="name" style="display:none">The field Required.</span>
        </div>
        <div class="form-group">
          <input type="text" name="Job Title" id="job_title" placeholder="Job Title" class="form-control">
         </div>
        <div class="form-group">
          <input type="text" name="Address" id="address" placeholder="Address" class="form-control">
        </div>
        <div class="form-group">
          <input type="text" name="Postal Code" id="postalcode" placeholder="ZIP/Postal Code" class="form-control">
        </div>
        <div class="form-group">
          <input type="text" name="Remarks" id="remarks" placeholder="Remarks" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <input type="email" name="_replyto" placeholder="Email*" id="emailaddress" class="form-control">
          <span  class="error" id="email" style="display:none">The field Required.</span>
        </div>
        <div class="form-group">
          <input type="text" name="Organization" id="organization" placeholder="Organization" class="form-control">
        </div>
        <div class="form-group">
          <input type="text" name="Country" id="country" placeholder="Country" class="form-control">
        </div>
        <div class="form-group">
          <input type="text" name="Phone Number" id="phonenumber" placeholder="Phone Number" class="form-control">
        </div>
        <div class="form-group">
          <input type="hidden" name="Subject" id="formtitle" value="" class="form-control">
        </div>
        <div class="form-group">
          <input type="submit" value="Sign Up" id="signup"class="btn btn-primary register">
          <input type="submit" value="Reset" id="resetform" class="btn btn-primary register">
        </div>
      </div>
    </form>   
  </div>
</div>

