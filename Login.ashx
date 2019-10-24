<%@ WebHandler Language="C#" Class="Login" %>

//using System;
//using System.Web;
//using System.IO;

//public class Login : IHttpHandler {

//    public void ProcessRequest (HttpContext context) {
//        context.Response.ContentType = "text/html";
//        //context.Response.Write("Hello World");

//        //string name = context.Request["midAcc"];
//        //string pwd = context.Request["midPsw"];

//        string path = context.Request.MapPath("login.html");//转换为绝对路径<a href="../login.html">../login.html</a>
//        string html = File.ReadAllText(path);//获取文件内容
//        string _vs = context.Request.Form["_viewstate"];
//        bool ispoatback = !string.IsNullOrEmpty(_vs);
//        if(ispoatback)
//        {
//            string name = context.Request.Form["textName"];
//            string pwd = context.Request.Form["textPwd"];

//            if (name == "" && pwd == "")
//            {
//                context.Response.Write("输入内容为空");
//            }
//            else
//            {
//                if(name == "qaz" && pwd == "123")
//                {

//                    context.Response.Write("登录成功");
//                }
//                else
//                {
//                    context.Response.Write("登录失败00000000");
//                    context.Response.Write(html);
//                }
//            }
//        }
//        else//是首次加载get请求
//        {
//            context.Response.Write(html);
//        }

//    }

//    public bool IsReusable {
//        get {
//            return false;
//        }
//    }

//}