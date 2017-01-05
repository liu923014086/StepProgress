$(function(){

   // stepDone(3);
    stepUnDone(2);

    /**
     * 完成了第几步,传入一共第几步完成的参数
     */
    function stepDone(number) {

        $("#liudaxia li").each(function () {
           var nu =  $(this).find("div span[class='ui-step-cont-number']").text();
            if(number==nu){
                var className = $(this).attr("class");
                if(className=="step-active"){
                    $(this).removeClass("step-active").addClass("step-done");
                }else{
                    alert("该步骤可能已经完成");
                }
            }
        });

    }

    /**
     * 设置第几步没有完成
     * @param number
     */

    function stepUnDone(number) {

        $("#liudaxia li").each(function () {
            var nu =  $(this).find("div span[class='ui-step-cont-number']").text();
            if(number==nu){
                var className = $(this).attr("class");
                if(className=="step-done"){
                    $(this).removeClass("step-done").addClass("step-active");
                }else{
                    alert("该步骤没有完成");
                }
            }
        });

    }

});