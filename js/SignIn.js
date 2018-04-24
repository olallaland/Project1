function signIn(){
    document.getElementById("body").style.opacity = "0.5";
    document.getElementById("SignInBox").style.display = "block";
}
function closeBox(){
    document.getElementById("body").style.opacity = "1";
    document.getElementById("SignInBox").style.display = "none";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
function verify(){
    if(document.getElementById("username").value == ""){
        document.getElementById("alert1").innerHTML = "用户名为空！";
    }
    else if(document.getElementById("username").value !== "" && document.getElementById("password").value == ""){
        document.getElementById("alert2").innerHTML = "密码为空！";
    }
    else if(document.getElementById("username").value !== "" && document.getElementById("password").value !== ""
        && document.getElementById("username").value == "Bucunzai1"){
        document.getElementById("alert1").innerHTML = "用户不存在！";
    }
    else if(document.getElementById("username").value !== "" && document.getElementById("password").value !== ""
        && document.getElementById("username").value !== "Bucunzai1" && document.getElementById("password").value == "wrong123"){
        document.getElementById("alert2").innerHTML = "密码错误！";
    }
    else{
        document.getElementById("alert1").innerHTML = "√";
        document.getElementById("alert2").innerHTML = "√";
        closeBox();
        alert("登录成功！");
        document.getElementById("beforeLog").style.display = "none";
        document.getElementById("afterLog").style.display = "block";
        document.getElementById("beforeLog1").style.display = "none";
        document.getElementById("afterLog1").style.display = "block";
        document.getElementById("beforeLog2").style.display = "none";
        document.getElementById("afterLog2").style.display = "block";
        document.getElementById("beforeLog3").style.display = "none";
        document.getElementById("afterLog3").style.display = "block";
        document.getElementById("beforeLog4").style.display = "none";
        document.getElementById("afterLog4").style.display = "block";
    }
}
function reset1(){
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("alert1").innerHTML = "";
    document.getElementById("alert2").innerHTML = "";
}
function logOut(){
    var r = confirm("确定退出登录吗？");
    if(r == true){
        alert("您已退出登录！");
        document.getElementById("beforeLog").style.display = "block";
        document.getElementById("afterLog").style.display = "none";
        document.getElementById("beforeLog1").style.display = "block";
        document.getElementById("afterLog1").style.display = "none";
        document.getElementById("beforeLog2").style.display = "block";
        document.getElementById("afterLog2").style.display = "none";
        document.getElementById("beforeLog3").style.display = "block";
        document.getElementById("afterLog3").style.display = "none";
        document.getElementById("beforeLog4").style.display = "block";
        document.getElementById("afterLog4").style.display = "none";
    }
}