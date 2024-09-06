function FormData()
{
let name,email,age,phone,adhaarno,address,date;

name=document.getElementById("name").value;
email=document.getElementById("email").value;
age=document.getElementById("age").value;
phone=document.getElementById("phone").value;
adhaarno=document.getElementById("adhaarno").value;
address=document.getElementById("address").value;
date=document.getElementById("date").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
user_records.push({
	"name":name,
	"email":email,
	"age":age,
	"phone":phone,
	"adhaar":adhaarno,
	"address":address,
    "date":date
})
localStorage.setItem("users",JSON.stringify(user_records));
}