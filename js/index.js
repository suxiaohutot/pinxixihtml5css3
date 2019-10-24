$(function () {
    $(function () {
        getData2();
    });

    function getData2() {
        var name = getCookie("name");
        var ages = getCookie("pwd");
        if (name != "") {
            $("#name").text(name);
        }
        if (ages != "") {
            $("#pwd").text(ages);
        }
    }

    //循环得到相应的值
    function getCookie(cname) {
        var ss = document.cookie;
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    }
}