<%@ WebHandler Language="C#" Class="Register" %>

using System;
using System.Web;
using System.Linq;


public class Register : IHttpHandler
{


    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        //查询用户是否存在
        string cuid = context.Request["textId"];
        string cpwd = context.Request["textPwd"];
        string cname = context.Request["textName"];

        if (cuid == "" || cpwd == "" || cname == "")
        {
            context.Response.Write("用户名 或 密码不能为空");
        }
        else
        {
            DataPinxixiDataContext dsdc = new DataPinxixiDataContext();
            User textu = new User();
            textu.Uid = cuid;
            bool ll = dsdc.User.Contains(textu);
            if (ll)
            {
                context.Response.Write("该账号:“" + cuid + "”已经存在");
            }
            else
            {
                textu.Uname = cname;
                textu.Upwd = cpwd;
                string ccc = "1";
                textu.Ufrozen = Convert.ToChar(ccc);
                dsdc.User.InsertOnSubmit(textu);
                dsdc.SubmitChanges();
                //跳转至中专跳转页面
                context.Response.Redirect("../Register_success_jump.html");

            }
        }
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}