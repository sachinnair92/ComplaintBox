<%--
  Created by IntelliJ IDEA.
  User: voodoo
  Date: 12/8/16
  Time: 6:13 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Welcome</title>
  <link href="css/index.css" rel='stylesheet' type='text/css' />
  <link href="css/bootstrap.css" rel="stylesheet">
  <link href="css/bootstrap-datepicker.css" rel="stylesheet">
  <script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.js"></script>
  <script type="text/javascript" src="js/bootstrap-datepicker.js"></script>
  <script type="text/javascript" src="js/index.js"></script>
</head>
<body>





<div align="center"><img src="images/Make_In_India_Logo.jpg" id="bg"></div>



<!------------------------------------------ Login Page----------------------------------------------------------------->


<div class="modal fade" id="LoginModal" tabindex="-1" data-backdrop="static" data-keyboard="false" role="dialog" aria-labelledby="LoginModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 style="color: gray;text-align: center;" class="modal-title"><b>ComplaintBox</b></h3>
      </div>
    <label class="modal-body">
      <h4 style="color: grey;margin-bottom: 3%" ><b>Login into Your Account</b></h4>

      <table  >
        <th style="width: 55%">



        <div class="form-inline">
          <div class="form-group has-feedback" style="width: 30ch" id="l_uname_div">
            <div class="input-group">
              <div class="input-group-addon"><span class=" glyphicon glyphicon-user" aria-hidden="true"></span></div>
              <input type="text" class="form-control" id="l_uname" placeholder="Username">
            </div>
          </div>
        </div>

          <br/>

          <div class="form-inline">
            <div class="form-group has-feedback" style="width: 30ch" id="l_pass_div">
              <div class="input-group">
                <div class="input-group-addon"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></div>
                <input type="password" class="form-control" id="l_pass" placeholder="Password">
              </div>

            </div>
          </div>
          <br/>
          <button type="button" class="btn btn-success" onclick="login_ajax_call();" style="width: 30ch">Login</button>
          <br/><br/>
          <label style="margin-left: 15ch">Forgot Password</label>
          <% for (int i=0;i<2;i++){ %>
          <br/>
          <%}%>
      </th>

        <th>
          <div class="form-inline">


            <table  >
              <th >
                <% for (int i=0;i<3;i++){ %>
                &nbsp;
                <%}%>or

            </th>
              <th>
                <button type="button" onclick="go_to_reg_page();" style="margin-left: 20%;width: 130%" class="btn btn-warning">New Registration</button>
                <br/><br/>
                <button type="button" style="margin-left: 20%;width: 130%" class="btn btn-info">Anonymous Complaint</button>
              </th>
              </table>
      </div>
        </th>

      </table>

    </div>
    </div>
  </div>
</div>

<!-------------------------------------------------------------------------------------------------------------------------->


<!------------------------------------------ Register Page----------------------------------------------------------------->

<div class="modal fade" id="RegisterModal" tabindex="-1" data-backdrop="static" data-keyboard="false" role="dialog" aria-labelledby="RegisterModal">
<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">

        <table  width="100%">
          <th width="5%" >
            <img src="images/back.png" onclick="go_to_log_page();" style="width: 3ch; height: 3ch; align-content: center" alt="back button"/>
          </th>
          <th >
            <label style="color: gray;margin-left: 13ch;font-size: x-large" class="modal-title"><b>ComplaintBox</b></label>
          </th>
        </table>
      </div>
      <div class="modal-body" >

        <h4 style="color: grey;margin-bottom: 3%;text-align: center"  ><b>New Registration</b></h4>
        <br/>
        <div class="form-group  has-feedback" id="r_name_div" style="width: 60%;margin-left: 20%">
          <label class="control-label" >Name</label>
          <input type="text"  class="form-control" id="r_name" aria-describedby="inputSuccess2Status" onkeydown="registration_page_check_name(event);" onblur="registration_page_check_name('blur');" >
          <span style="display: none ;" id="r_name_succ" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
          <span style="display: none ;" id="r_name_err" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
        </div>

        <div class="form-group  has-feedback" id="r_dob_div" style="width: 60%;margin-left: 20%">
          <label class="control-label" >Date of Birth</label>
          <div class="input-group date" data-provide="datepicker" data-date-end-date="0d">
            <input type="text" id="r_dob" class="form-control" onkeydown="registration_page_check_dob(event);" onchange="registration_page_check_dob('blur');" onblur="registration_page_check_dob('blur');" >
            <div class="input-group-addon">
              <span class="glyphicon glyphicon-th"></span>
            </div>
          </div>
        </div>

        <div class="form-group  has-feedback" id="r_uname_div" style="width: 60%;margin-left: 20%">
          <label class="control-label" >Username</label>
          <input type="text"  class="form-control" id="r_uname" aria-describedby="inputSuccess2Status" onkeydown="registration_page_check_uname(event);" onblur="registration_page_check_uname('blur');">
          <span style="display: none ;" id="r_uname_succ" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
          <span style="display: none ;" id="r_uname_err" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
        </div>
        <%--has-success--%>
        <%--has-error--%>
        <div class="form-group  has-feedback" id="r_pass_div" style="width: 60%;margin-left: 20%">
          <label class="control-label" >Password</label>
          <input type="password"  class="form-control" id="r_pass" aria-describedby="inputSuccess2Status" onkeydown="registration_page_check_pass(event);" onblur="registration_page_check_pass('blur');">
          <span style="display: none ;" id="r_pass_succ" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
          <span style="display: none ; " id="r_pass_err" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
        </div>

        <div class="form-group  has-feedback" id="r_repass_div" style="width: 60%;margin-left: 20%">
          <label class="control-label" >Repeat Password</label>
          <input type="password"  class="form-control" id="r_repass" aria-describedby="inputSuccess2Status" onkeydown="registration_page_check_repass(event);" onblur="registration_page_check_repass('blur');">
          <span style="display: none ;" id="r_repass_succ" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
          <span style="display: none ;" id="r_repass_err" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
        </div>

        <div class="form-group  has-feedback" id="r_email_div" style="width: 60%;margin-left: 20%">
          <label class="control-label" >Email Id</label>
          <input type="text"  class="form-control" id="r_email" aria-describedby="inputSuccess2Status" onkeydown="registration_page_check_email(event);" onblur="registration_page_check_email('blur');">
          <span style="display: none ;" id="r_email_succ" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
          <span style="display: none ;" id="r_email_err" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
        </div>

        <div class="form-group  has-feedback" id="r_addr_div" style="width: 60%;margin-left: 20%">
          <label class="control-label" >Address</label>
          <input type="text"  class="form-control" id="r_addr" aria-describedby="inputSuccess2Status" onkeydown="registration_page_check_addr(event);" onblur="registration_page_check_addr('blur');">
          <span style="display: none ;" id="r_addr_succ" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
          <span style="display: none ;" id="r_addr_err" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
        </div>

        <div class="form-group  has-feedback" id="r_mob_div" style="width: 60%;margin-left: 20%">
          <label class="control-label" >Mobile Number</label>

          <input type="text"  class="form-control" id="r_mob" aria-describedby="inputSuccess2Status" onkeydown="registration_page_check_mob(event);" onblur="registration_page_check_mob('blur');">
          <span style="display: none ;" id="r_mob_succ" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
          <span style="display: none ;" id="r_mob_err"  class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
        </div>

        <div class="form-group  has-feedback" style="width: 60%;margin-left: 20%">
          <label class="control-label" >Landline Number (Optional)</label>
          <input type="text"  class="form-control" id="r_landno" aria-describedby="inputSuccess2Status" onkeydown="registration_page_check_landno(event);" onblur="registration_page_check_landno('blur');">
        </div>

        <br/>
        <div style="text-align: right">
        <button type="button" style="margin-right:5%;width: 30%" class="btn btn-success">Register</button>
        </div>
        <br/><br/>
      </div>

    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->



<!-------------------------------------------------------------------------------------------------------------------------->








</body>
</html>
