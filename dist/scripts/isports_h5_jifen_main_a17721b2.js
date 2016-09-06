/* filePath fetchtemp\scripts\version_6b481a07.js*/

var version = '1.0.1';
/* filePath fetchtemp\scripts\isports_h5_saicheng_48befde2.js*/

/**
 * Created by wanghan1 on 2016/9/6.
 */


(function($){
     var length = $(".goal-container").length;
     var my_max_width = $(".goal-left").height();
     //console.log(my_max_width)
     //console.log(length)

    for(var i=0;i<length;i++){

        (function(){
        if($($(".goal-container")[i]).height()>my_max_width){

            var eachHeight = $($(".goal-container")[i]).height();

            //$($(".goal-container")[i]).addClass("moveTop");
            var top = parseInt($($(".goal-container")[i]).css("top"));

            mymove(i,eachHeight);
         }
        })()
    }
    function mymove(i,eachHeight){
        var time = 1000*60*2
        $($(".goal-container")[i]).animate({
                top:-eachHeight+"px"
            },10000,function(){

                if(Math.abs(parseInt($($(".goal-container")[i]).css("top")))==eachHeight){

                    $($(".goal-container")[i]).css("top","0")
                }
                mymove(i,eachHeight);
            }
        );
    }
})(jQuery)

