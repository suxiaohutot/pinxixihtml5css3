$(function () {
    $(function () {
        name = $("#iname").text();
        pwd = $("#ipwd").text();

        $("#btn").on("click", function () {
            jump2();
        });
    });

    function jump2() {
        document.cookie = "name=" + name;
        document.cookie = "age=" + pwd;
        window.location.href = "index.html";
    }

    //$("#iname").blur(function () {
    //    if ($(this).val() != "") {
    //        var reg = /^[a-zA-Z0-9_-]{4,16}$/;
    //        if (reg.text($(this).val())) {
    //            $.post("./ashx/Login_check.ashx", { "textName": $(this).val() }, function (data) {

    //            });
    //        } else {
    //            $($("#inamecheck").text("手机号只能是数字"))
    //        }
    //    } else {
    //        $("#inamecheck").text("手机号不能为空");
    //    }
    //});

    //$("#iname").blur(function () {
    //    if ($(this).val() != "") {
    //        var reg = /^[a-zA-Z0-9_-]{4,16}$/;
    //        if (reg.text($(this).val())) {
    //            $.post("./ashx/Login_check.ashx", { "textName": $(this).val() }, function (data) {
    //                if (data == "yes") {
    //                    $("#inamecheck").text("用户名已存在");
    //                }
    //                else {
    //                    $("#inamecheck").text("此用户名可用");
    //                }
    //            })
    //        }
    //        else {
    //            $("#inamecheck").text("用户名只能是字母数字组合！！！！");
    //        }
    //    }
    //    else {
    //        $("#inamecheck").text("用户名不能为空0");
    //    }
    //});

    //$("#ipwd").blur(function () {
    //    if ($(this).val() != "") {
    //        var reg = /^[a-z0-9_-]{6,18}$/;
    //        if (reg.text($(this).val())) {
    //        }
    //        else {
    //            $("#ipwdcheck").text("密码只能是字母数字组合！！！！");
    //        }
    //    }
    //    else {
    //        $("#ipwdcheck").text("密码不能为空");
    //    }
    //});

    //$("#btn1").one('click', function () {
    //    alert('submit被点击'); 

    //});
});