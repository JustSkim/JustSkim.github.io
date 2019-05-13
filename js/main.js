$(document).ready(function(){

var sidabar = 1; 


//点击“收起”按钮收起侧边菜单
$(".sidabar>button").click(function(){
    $(".sidabar").animate({
        left:"-300px"
    },"slow");
    sidabar=1;
});

//点击按钮即可收起也可展开侧边栏
$(".main>.sidabarButton").click(function(){
    if(sidabar||sidabar.hidden=='true'){
        $(".sidabar").animate({
            left:"0"
        },"slow");
        sidabar=0;
    }
    else{
        $(".sidabar").animate({
            left:"-300px"
        },"slow");
        sidabar=1;
    }
});


});