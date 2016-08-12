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
                $('#myModal').modal('show');
                flag++;
            }
        });

        $("body").mouseover(function(){
            if(flag==1)
            {
                $('#myModal').modal('show');
                flag++;
            }
        });
    });







