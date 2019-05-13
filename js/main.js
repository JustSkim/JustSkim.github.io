$(document).ready(function(){

var sidabar = 1; 


//点击“收起”按钮收起侧边菜单
$(".sidabar>button").click(function(){
    $(".sidabar").hide();
    sidabar=1;
});

//点击按钮即可收起也可展开侧边栏
$(".main>.sidabarButton").click(function(){
    if(sidabar||sidabar.hidden=='true'){
        $(".sidabar").css("display","inline-block");
        sidabar=0;
    }
    else{
        $(".sidabar").hide();
    }
});


});