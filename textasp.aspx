<%@ Page Language="C#" AutoEventWireup="true" CodeFile="textasp.aspx.cs" Inherits="textasp" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <script src="js/jquery-3.4.0.min.js"></script>
    <script src="js/Login_check.js"></script>
</head>
<body>
    <form id="form1" runat="server" nethod="post" action="./ashx/Login_check.ashx">
            <div class="col-12 mb-15">
                <input type="text" name="textName" id="iname" placeholder="账号" /><span style="font-size:14px;color:red" id="inamecheck"></span>
            </div>
            <div class="col-12 mb-15">
                <input type="password" name="textPwd" id="ipwd" placeholder="密码"/><span style="font-size:14px;color:red" id="ipwdcheck"></span>
            </div>
            <div class="col-12">
                <input type="submit" id="btn1" style="width:90px" value="登录"/> &nbsp;<!--//button和submit的区别是，button点击之后页面不刷新，submit刷新页面  onclick="myData()" -->
                <a href="register.html"><input type="button" style="width:90px" value="注册"/></a>
                <input type="hidden" name="_viewstate" value="hidden" />
                
            </div>
    </form>
</body>
</html>
