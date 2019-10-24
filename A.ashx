<%@ WebHandler Language="C#" Class="a" %>


////using System;
////using System.Collections.Generic;
////using System.Linq;
////using System.Web;
////using System.Web.Script.Serialization;
////using System.IO;

////public class MSG
////{
////    public string txt1 { set; get; }
////    public string txt2 { set; get; }
////}

////public class A : IHttpHandler
////{

////    public void ProcessRequest(HttpContext context)
////    {
////        //定义两组数据，待会儿序列化之后传递给前端
////        List<string> ls1 = new List<string>() { "yes", "正确" };
////        List<string> ls2 = new List<string>() { "no", "错误" };
////        //接收前端传递过来的数据
////        context.Response.ContentType = "application/json";
////        var data = context.Request;
////        var stream = new StreamReader(data.InputStream).ReadToEnd();
////        var msgdata = new JavaScriptSerializer().Deserialize<MSG>(stream);
////        //验证前端的数据，并传递相应的数据给前端
////        if (msgdata.txt1 == "123" && msgdata.txt2 == "456")
////        {
////            context.Response.Write(new JavaScriptSerializer().Serialize(ls1));
////        }
////        else
////        {
////            context.Response.Write(new JavaScriptSerializer().Serialize(ls2));
////        }

////    }

////    public bool IsReusable
////    {
////        get
////        {
////            return false;
////        }
////    }

////}