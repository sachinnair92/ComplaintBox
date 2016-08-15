/**
 * Created by voodoo on 12/8/16.
 */
$('#myModal').modal({
    backdrop: 'static',
    keyboard: false
});



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
            $("#r_uname_div").removeClass("has-success");
            $("#r_uname_div").removeClass("has-error");
            $("#r_uname_div").addClass("has-success");
            $("#r_uname_err").hide();
            $("#r_uname_succ").show();
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

        if(val=="")
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
    $('#LoginModal').modal('hide');
    $('#RegisterModal').modal('show');
}

function go_to_log_page(){
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
        'url' : 'https://complaintbox-server.herokuapp.com/api/Login/validate_user',
        'type' : 'GET',
        async:false,
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