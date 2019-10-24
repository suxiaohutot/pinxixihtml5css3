<%@ WebHandler Language="C#" Class="Login_check" %>

using System;
using System.Web;
using System.Linq;
using System.IO;
using System.Data.Linq;

public class Login_check : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";

        //查询用户是否存在
        string cuid = context.Request["textName"];
        string cpwd = context.Request["textPwd"];

        if (cuid == "" || cpwd == "")
        {
            context.Response.Write("用户名或者密码为空");
        }
        else
        {
            DataPinxixiDataContext dsdc = new DataPinxixiDataContext();
            User textu = new User();
            textu.Uid = cuid;
            bool ll = dsdc.User.Contains(textu);
            if (ll)
            {
                User us = dsdc.User.Single(p => p.Uid == cuid);
                if (Convert.ToInt32(cpwd) == Convert.ToInt32(us.Upwd))
                {
                    context.Response.Write("登录成功 账号和密码 正确");
                    //context.Response.Redirect("../Login_success_jump.html");

                }
                else
                {
                    context.Response.Write("密码错误");
                    //context.Response.Redirect("../Login.html");
                }
            }
            else
            {
                context.Response.Write("该账号:“" + cuid + "”不存在");
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