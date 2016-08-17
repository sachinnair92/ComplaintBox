/**
 * Created by voodoo on 12/8/16.
 */
$('#myModal').modal({
    backdrop: 'static',
    keyboard: false
});


 var base_url="https://complaintbox-server.herokuapp.com/api/";


 /*var base_url="http://localhost:7001/api/";
*/
    $(document).ready(function(){
        var flag = 1;

        $('body').click(function(){
            if(flag==1)
            {
               /* $("#LoginModal").css({ opacity: 0.85 });*/
                $('#LoginModal').modal('show');
                flag++;
            }
        });

        $("body").mouseover(function(){
            if(flag==1)
            {
               /* $("#LoginModal").css({ opacity: 0.85});*/
                $('#LoginModal').modal('show');
                flag++;
            }
        });



        $('.date').datepicker({
            autoclose: true,
            orientation:"bottom",
            todayHighlight: true,
        });

        $('.modal').on('hidden.bs.modal', function(e)
        {
            $(this).removeData();
        }) ;




    });


function registration_page_check_name(e){
    if(e=="blur" || e.keyCode==9)
    {
       var val=$("#r_name").val();

        if(val=="")
        {
            $("#r_name_div").removeClass("has-success");
            $("#r_name_div").removeClass("has-error");
            $("#r_name_div").addClass("has-error");
            $("#r_name_succ").hide();
            $("#r_name_err").show();
        }else
        {
            $("#r_name_div").removeClass("has-success");
            $("#r_name_div").removeClass("has-error");
            $("#r_name_div").addClass("has-success");
            $("#r_name_err").hide();
            $("#r_name_succ").show();
        }
    }
 }

function registration_page_check_dob(e){
    if(e=="blur" || e.keyCode==9)
    {
        var val=$("#r_dob").val();

        if(val=="")
        {
            $("#r_dob_div").removeClass("has-success");
            $("#r_dob_div").removeClass("has-error");
            $("#r_dob_div").addClass("has-error");
        }else
        {
            $("#r_dob_div").removeClass("has-success");
            $("#r_dob_div").removeClass("has-error");
            $("#r_dob_div").addClass("has-success");
        }
    }
}
var flag=0;
function registration_page_check_uname(e){
    if(e=="blur" || e.keyCode==9)
    {
        var val=$("#r_uname").val();

        if(val=="")
        {
            $("#r_uname_div").removeClass("has-success");
            $("#r_uname_div").removeClass("has-error");
            $("#r_uname_div").addClass("has-error");
            $("#r_uname_succ").hide();
            $("#r_uname_err").show();
        }else
        {

            if(flag==0)
            {

                $("#r_uname_div").removeClass("has-success");
                $("#r_uname_div").removeClass("has-error");
                $("#r_uname_err").hide();
                $("#r_uname_succ").hide();

                    flag=1;
                $("#r_button").prop("disabled",true);
                    $.ajax({
                        'url' : base_url+'Login/username_availability_check',
                        'type' : 'GET',
                        useDefaultXhrHeader: false,
                        'data' : {
                            'user_name' : val,
                        },
                        //The response from the server
                        'success' : function(data) {
                            flag=0;
                            $("#r_button").prop("disabled",false);
                            if(data.response=="true")
                            {
                                $("#r_uname_div").removeClass("has-success");
                                $("#r_uname_div").removeClass("has-error");
                                $("#r_uname_div").addClass("has-success");
                                $("#r_uname_err").hide();
                                $("#r_uname_succ").show();
                            }else
                            {
                                $("#r_uname_div").removeClass("has-success");
                                $("#r_uname_div").removeClass("has-error");
                                $("#r_uname_div").addClass("has-error");
                                $("#r_uname_succ").hide();
                                $("#r_uname_err").show();
                            }
                        },
                        'failure': function(){
                            flag=0;
                            $("#r_button").prop("disabled",false);
                        }
                    });
            }
        }
    }
}

function registration_page_check_pass(e){
    if(e=="blur" || e.keyCode==9)
    {
        var val=$("#r_pass").val();

        if(val=="")
        {
            $("#r_pass_div").removeClass("has-success");
            $("#r_pass_div").removeClass("has-error");
            $("#r_pass_div").addClass("has-error");
            $("#r_pass_succ").hide();
            $("#r_pass_err").show();
        }else
        {
            $("#r_pass_div").removeClass("has-success");
            $("#r_pass_div").removeClass("has-error");
            $("#r_pass_div").addClass("has-success");
            $("#r_pass_err").hide();
            $("#r_pass_succ").show();
        }
    }
}

function registration_page_check_repass(e){
    if(e=="blur" || e.keyCode==9)
    {
        var val=$("#r_repass").val();
        var val1=$("#r_pass").val();

        if(val=="" || val1!=val)
        {
            $("#r_repass_div").removeClass("has-success");
            $("#r_repass_div").removeClass("has-error");
            $("#r_repass_div").addClass("has-error");
            $("#r_repass_succ").hide();
            $("#r_repass_err").show();
        }else
        {
            $("#r_repass_div").removeClass("has-success");
            $("#r_repass_div").removeClass("has-error");
            $("#r_repass_div").addClass("has-success");
            $("#r_repass_err").hide();
            $("#r_repass_succ").show();
        }
    }
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}



function registration_page_check_email(e){
    if(e=="blur" || e.keyCode==9)
    {
        var val=$("#r_email").val();
        if(val=="" || validateEmail(val)==false)
        {
            $("#r_email_div").removeClass("has-success");
            $("#r_email_div").removeClass("has-error");
            $("#r_email_div").addClass("has-error");
            $("#r_email_succ").hide();
            $("#r_email_err").show();
        }else
        {
            $("#r_email_div").removeClass("has-success");
            $("#r_email_div").removeClass("has-error");
            $("#r_email_div").addClass("has-success");
            $("#r_email_err").hide();
            $("#r_email_succ").show();
        }
    }
}

function registration_page_check_addr(e){
    if(e=="blur" || e.keyCode==9)
    {
        var val=$("#r_addr").val();

        if(val=="")
        {
            $("#r_addr_div").removeClass("has-success");
            $("#r_addr_div").removeClass("has-error");
            $("#r_addr_div").addClass("has-error");
            $("#r_addr_succ").hide();
            $("#r_addr_err").show();
        }else
        {
            $("#r_addr_div").removeClass("has-success");
            $("#r_addr_div").removeClass("has-error");
            $("#r_addr_div").addClass("has-success");
            $("#r_addr_err").hide();
            $("#r_addr_succ").show();
        }
    }
}

function validateNumber(event) {
    var key = window.event ? event.keyCode : event.which;

    if (event.keyCode === 8 || event.keyCode === 46
        || event.keyCode === 37 || event.keyCode === 39) {
        return true;
    }
    else if ( key < 48 || key > 57 ) {
        return false;
    }
    else return true;
};



function registration_page_check_mob(e){

    var x=validateNumber(e);


    if(e=="blur" || e.keyCode==9)
    {
        var val=$("#r_mob").val();

        if(val=="" || val.length!=10)
        {
            $("#r_mob_div").removeClass("has-success");
            $("#r_mob_div").removeClass("has-error");
            $("#r_mob_div").addClass("has-error");
            $("#r_mob_succ").hide();
            $("#r_mob_err").show();
        }else
        {
            $("#r_mob_div").removeClass("has-success");
            $("#r_mob_div").removeClass("has-error");
            $("#r_mob_div").addClass("has-success");
            $("#r_mob_err").hide();
            $("#r_mob_succ").show();
        }
        return;
    }

    if(x==false)
    {
        e.preventDefault();
    }
}



function registration_page_check_landno(e){

    var x=validateNumber(e);


    if(e=="blur" || e.keyCode==9)
    {
        return;
    }

    if(x==false)
    {
        e.preventDefault();
    }
}

function go_to_reg_page(){

    $("#l_uname").val("");
    $("#l_pass").val("");

    $("#l_uname_div").removeClass("has-success");
    $("#l_pass_div").removeClass("has-success");


    $("#l_uname_div").removeClass("has-error");
    $("#l_pass_div").removeClass("has-error");


    $('#LoginModal').modal('hide');
    $('#RegisterModal').modal('show');

}

function go_to_log_page(){

    $("#r_name").val("");
    $("#r_dob").val("");
    $("#r_uname").val("");
    $("#r_pass").val("");
    $("#r_repass").val("");
    $("#r_email").val("");
    $("#r_addr").val("");
    $("#r_mob").val("");
    $("#r_landno").val("");
    $("#r_OTP").val("");

    $("#r_name").prop("disabled", false);
    $("#r_dob").prop("disabled", false);
    $("#r_uname").prop("disabled", false);
    $("#r_pass").prop("disabled", false);
    $("#r_repass").prop("disabled", false);
    $("#r_email").prop("disabled", false);
    $("#r_addr").prop("disabled", false);
    $("#r_mob").prop("disabled", false);
    $("#r_landno").prop("disabled", false);
    $("#r_verifybutton").prop("disabled",false);
    $("#r_cancelbutton").prop("disabled",false);
    $("#r_button").prop("disabled",false);


    $("#r_name_div").removeClass("has-success");
    $("#r_dob_div").removeClass("has-success");
    $("#r_uname_div").removeClass("has-success");
    $("#r_pass_div").removeClass("has-success");
    $("#r_repass_div").removeClass("has-success");
    $("#r_email_div").removeClass("has-success");
    $("#r_addr_div").removeClass("has-success");
    $("#r_mob_div").removeClass("has-success");
    $("#r_OTP_div").removeClass("has-success");

    $("#r_name_div").removeClass("has-error");
    $("#r_dob_div").removeClass("has-error");
    $("#r_uname_div").removeClass("has-error");
    $("#r_pass_div").removeClass("has-error");
    $("#r_repass_div").removeClass("has-error");
    $("#r_email_div").removeClass("has-error");
    $("#r_addr_div").removeClass("has-error");
    $("#r_mob_div").removeClass("has-error");
    $("#r_OTP_div").removeClass("has-error");

    $("#r_name_succ").hide();
    $("#r_uname_succ").hide();
    $("#r_pass_succ").hide();
    $("#r_repass_succ").hide();
    $("#r_email_succ").hide();
    $("#r_addr_succ").hide();
    $("#r_mob_succ").hide();

    $("#r_name_err").hide();
    $("#r_uname_err").hide();
    $("#r_pass_err").hide();
    $("#r_repass_err").hide();
    $("#r_email_err").hide();
    $("#r_addr_err").hide();
    $("#r_mob_err").hide();
    $("#r_OTP_err").hide();








    $('#RegisterModal').modal('hide');
    $('#LoginModal').modal('show');

}

function login_ajax_call()
{
    $("#l_uname_div").removeClass("has-success");
    $("#l_uname_div").removeClass("has-error");

    $("#l_pass_div").removeClass("has-success");
    $("#l_pass_div").removeClass("has-error");


    var uname=$("#l_uname").val();
    var pass=$("#l_pass").val();

    if(uname=="" )
    {
        $("#l_uname_div").addClass("has-error");
        return;
    }

    if(pass=="" )
    {
        $("#l_pass_div").addClass("has-error");
        return;
    }



    $.ajax({
        'url' : base_url+'Login/validate_user',
        'type' : 'GET',
        useDefaultXhrHeader: false,
        'data' : {
            'user_name' : uname,
            'password' : pass,
        },
        //The response from the server
        'success' : function(data) {
            alert(data.response);
        }
    });
}

var request_id;

function register_ajax_call(){
    registration_page_check_name("blur");
    registration_page_check_dob("blur");
    registration_page_check_email("blur");
    registration_page_check_pass("blur");
    registration_page_check_repass("blur");
    registration_page_check_addr("blur");
    registration_page_check_mob("blur");

    var r_name_div=$("#r_name_div");
    var r_dob_div=$("#r_dob_div");
    var r_uname_div=$("#r_uname_div");
    var r_email_div=$("#r_email_div");
    var r_pass_div=$("#r_pass_div");
    var r_repass_div=$("#r_repass_div");
    var r_addr_div=$("#r_addr_div");
    var r_mob_div=$("#r_mob_div");

    if(!r_uname_div.hasClass("has-success"))
    {
        $("#r_uname_div").removeClass("has-success");
        $("#r_uname_div").removeClass("has-error");
        $("#r_uname_div").addClass("has-error");
        $("#r_uname_succ").hide();
        $("#r_uname_err").show();
        return;
    }

    if(!r_name_div.hasClass("has-success") || !r_dob_div.hasClass("has-success") || !r_uname_div.hasClass("has-success")|| !r_email_div.hasClass("has-success")|| !r_pass_div.hasClass("has-success")|| !r_repass_div.hasClass("has-success") || !r_addr_div.hasClass("has-success")|| !r_mob_div.hasClass("has-success"))
    {
        return;
    }

    $("#r_name").prop("disabled", true);
    $("#r_dob").prop("disabled", true);
    $("#r_uname").prop("disabled", true);
    $("#r_pass").prop("disabled", true);
    $("#r_repass").prop("disabled", true);
    $("#r_email").prop("disabled", true);
    $("#r_addr").prop("disabled", true);
    $("#r_mob").prop("disabled", true);
    $("#r_landno").prop("disabled", true);

    var mob_no="+91"+$("#r_mob").val();

    request_id=null;


    $.ajax({
        'url' : base_url+'SMS/request_OTP',
        'type' : 'POST',
        useDefaultXhrHeader: false,
        'data' : {
            'mob_no' : mob_no,
        },
        //The response from the server
        'success' : function(data) {
            flag=0;
            $("#r_button").prop("disabled",false);
            if(data.response=="success")
            {
                $("#r_OTP_text").text("(OTP has been sent to "+mob_no+")");
                request_id=data.request_id;
                $("#r_OTP_div").show();
                $("#r_verifybutton").show();
                $("#r_cancelbutton").show();
                $("#r_button").hide();
            }else
            {
               r_cancel_OTP();
            }
        },
        'failure': function(){
            r_cancel_OTP();
        }
    });





}

function r_cancel_OTP(){
    $("#r_OTP").val("");
    $("#r_name").prop("disabled", false);
    $("#r_dob").prop("disabled", false);
    $("#r_uname").prop("disabled", false);
    $("#r_pass").prop("disabled", false);
    $("#r_repass").prop("disabled", false);
    $("#r_email").prop("disabled", false);
    $("#r_addr").prop("disabled", false);
    $("#r_mob").prop("disabled", false);
    $("#r_landno").prop("disabled", false);
    $("#r_OTP_div").hide();
    $("#r_verifybutton").hide();
    $("#r_cancelbutton").hide();
    $("#r_button").show();
}

function r_verify_OTP(e){

    var x=validateNumber(e);

    $("#r_OTP_div").removeClass("has-success");
    $("#r_OTP_div").removeClass("has-error");
    $("#r_OTP_err").hide();

    if(e=="blur")
    {
        var r_OTP=$("#r_OTP").val();

        if(r_OTP=="" || r_OTP.length!=6)
        {
            $("#r_OTP_div").addClass("has-error");
            $("#r_OTP_err").show();
        }else
        {
            var r_name=$("#r_name").val();
            var r_dob=$("#r_dob").val();
            var r_uname=$("#r_uname").val();
            var r_email=$("#r_email").val();
            var r_pass=$("#r_pass").val();
            var r_addr=$("#r_addr").val();
            var r_mob="+91"+$("#r_mob").val();
            var r_land_no=$("#r_landno").val();

            if(r_land_no=="")
            {
                r_land="null";
            }
            $("#r_verifybutton").prop("disabled",true);
            $("#r_cancelbutton").prop("disabled",true);
            $.ajax({
                'url' : base_url+'Login/register_user',
                'type' : 'POST',
                useDefaultXhrHeader: false,
                'data' : {
                    "name": r_name,
                    "dob":r_dob,
                    "user_name":r_uname,
                    "password":r_pass,
                    "email":r_email,
                    "address":r_addr,
                    "m_no":r_mob,
                    "l_no":r_land_no,
                    "request_id":request_id,
                    "verification_OTP":r_OTP,
                },
                //The response from the server
                'success' : function(data) {
                    if(data.status=="true")
                    {
                        $("#r_OTP_div").hide();
                        $("#r_verifybutton").hide();
                        $("#r_cancelbutton").hide();
                        $("#r_button").show();
                        alert("Registration Successfull");
                        go_to_log_page();
                    }else
                    {
                        $("#r_OTP_div").addClass("has-error");
                        $("#r_OTP_err").show();

                    }
                    $("#r_verifybutton").prop("disabled",false);
                    $("#r_cancelbutton").prop("disabled",false);

                },
                'failure': function(){
                    $("#r_OTP_div").addClass("has-error");
                    $("#r_OTP_err").show();
                    $("#r_verifybutton").prop("disabled",false);
                    $("#r_cancelbutton").prop("disabled",false);
                }
            });
        }
        return;
    }

    if(x==false)
    {
        e.preventDefault();
    }


}