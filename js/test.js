
function wt()
{
var con;
con=confirm("请选择一个按钮（确定或取消）：");
if(con==true)
{
    alert("确定");
    location.href="../select.html";
}
else 
{
    alert("取消");
    location.href="index.html";
}
}