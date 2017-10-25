/**
 * Created by lenovo on 2017/10/25.
 */
$(function () {
    $(".bb").hide()
    $("#box").click(function () {
        $.ajax({
            url:"http://localhost:3000/shuju",
            type:"GET",
            success:function (e) {
                $(".bb").toggle()
                console.log(e);
                $("b").html(e.name);
                $("i").html(e.age);
                $("s").html(e.aihao);
                /*var data=JSON.stringify(e)
                console.log(data)
                $("#b").html(data)*/
            }
        })
    })
});