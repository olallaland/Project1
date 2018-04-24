function register(){
    document.getElementById("body").style.opacity = "0.5";
    document.getElementById("registerBox").style.display = "block";
}
function closeBox2(){
    document.getElementById("body").style.opacity = "1";
    document.getElementById("registerBox").style.display = "none";
    document.getElementById("userName2").value = "";
    document.getElementById("pwd1").value = "";
    document.getElementById("pwd2").value = "";
    document.getElementById("email").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("addr").value = "";
    document.getElementById("alert2-1").innerHTML = "";
    document.getElementById("alert2-2").innerHTML = "";
    document.getElementById("alert3").innerHTML = "";
    document.getElementById("alert4").innerHTML = "";
}
function chkvalue(txt) {
    var regNum = /(^([a-zA-Z]+[0-9]+)$)|(^[0-9]+[a-zA-Z]+$)/;
    if(txt.value=="") {
        document.getElementById("alert2-1").innerHTML = "用户名不能为空";
        document.getElementById("submit").disabled = true;
    }
    else if(txt.value !== "" && txt.value.length < 6 || !regNum.test(txt.value)){
        document.getElementById("alert2-1").innerHTML = "用户名不得少于六位,不得为纯数字或纯字母";
        document.getElementById("submit").disabled = true;

    }
    else{
        document.getElementById("alert2-1").innerHTML = "√";
        document.getElementById("submit").disabled = false;

    }

}
function checkpwd1(password) {
    if(password.value=="") {
        document.getElementById("alert2-2").innerHTML = "密码不能为空";
        document.getElementById("submit").disabled = true;

    }
    else if(password.value !== "" && password.value.length < 6){
        document.getElementById("alert2-2").innerHTML = "密码至少六位";
        document.getElementById("submit").disabled = true;

    }
    else if(password.value !== "" && password.value == document.getElementById("userName").value){
        document.getElementById("alert2-2").innerHTML = "密码不得用户名相同";
        document.getElementById("submit").disabled = true;

    }
    else{
        document.getElementById("alert2-2").innerHTML = "√";
        document.getElementById("submit").disabled = false;

    }
}
function chkpwdVal() {
    var pwd1 = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById("pwd2").value;
    if(pwd1 !== "" && pwd2 !== "" && pwd1 == pwd2){
        document.getElementById("alert3").innerHTML = "√";
        document.getElementById("submit").disabled = false;

    }
    else {
        document.getElementById("alert3").innerHTML = "×";
        document.getElementById("submit").disabled = true;
    }
}
function checkpwd2(password) {
    if(password.value=="") {
        document.getElementById("alert3").innerHTML = "密码不能为空";
        document.getElementById("submit").disabled = true;

    }
    else if(document.getElementById("pwd1").value !== "" && document.getElementById("pwd2").value !== "" && document.getElementById("pwd1").value == document.getElementById("pwd2").value){
        document.getElementById("alert3").innerHTML = "√";
        document.getElementById("submit").disabled = false;

    }
}
function chkemail(email){
    var myReg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    if(email.value == ""){
        document.getElementById("alert4").innerHTML = "邮箱不能为空";
        document.getElementById("submit").disabled = true;

    }
    else if(email.value !== "" && !myReg.test(email.value)){
        document.getElementById("alert4").innerHTML = "邮箱格式错误";
        document.getElementById("submit").disabled = true;

    }
    else{
        document.getElementById("alert4").innerHTML = "√";
        document.getElementById("submit").disabled = false;
    }
}
function registerla(){
    if(document.getElementById("submit").disabled == false && document.getElementById("userName2").value !== "luoty123"){
        closeBox2();
        alert("注册成功并登录！");
        var a = document.getElementById("beforeLog").innerHTML;
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
    else if(document.getElementById("submit").disabled == false && document.getElementById("userName2").value == "luoty123"){
       alert("注册失败，用户已存在！")
    }
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
