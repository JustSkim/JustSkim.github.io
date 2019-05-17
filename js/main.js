var sidabar = document.getElementsByClassName("sidabar")[0];
sidabar.innerHTML='<object type="text/html" data="components/sidabar.html" width="100%" height="100%"></object>';

$(document).ready(function(){


//点击按钮即可收起也可展开侧边栏
$(".main>.sidabarButton").click(function(){
    if(sidabar||sidabar.hidden=='true'){
        
        $(".sidabar").animate({
            left:"0"
        },"slow");
        setTimeout(function(){
            $(".main>.sidabarButton").removeClass("sidabar-fold");
            $(".main>.sidabarButton>span").text("《");
            $(".main>.sidabarButton").addClass("sidabar-unfold");
        },1500);  
        sidabar=0;
    }
    else{
        $(".sidabar").animate({
            left:"-300px"
        },"slow");
        $(".main>.sidabarButton>span").text("》");
        $(".main>.sidabarButton").addClass("sidabar-fold");
        $(".main>.sidabarButton").removeClass("sidabar-unfold"); 
        sidabar=1;
    }
});


});


