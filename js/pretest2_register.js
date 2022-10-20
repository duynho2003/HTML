function loginname() {// lấy giá trị thẻ loginname
    var loginame = document.getElementById("user").value;
    var name = /^[A-Za-z ]{3,20}$/;
    var n = "Login Name: " + loginame;

    if (name.test(loginame)) {
        a.push(n);
        return true;
    } else {
        alert("Khong dung Format name. Yeu cau nhap lai");
        return false;
    }  
}

function password(){// lay gia tri mat khau
    var pw = document.getElementById("pass").value;
    //kiem tra dien mat khau
    if (pw == ""){
        document.getElementById("message").innerHTML = "Yeu cau nhap mat khau";
        return false;
    }
}
// function verifyPassword(){// xac minh mat khau
//     var password = document.getElementById("pass2").value;
//     //kiem tra dien mat khau
//     if (password == ""){
//         alert("Yeu cau nhap xac minh mat khau");
//         return false;
//     }
// }
// //minimum password length validation  
// if(pw.length < 8) {  
//     document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
//     return false;  
// }

function fullname(){
var fulname = document.getElementById("user2").value;
var name2 = /^[A-Za-z ]{3,20}$/;
var n = "Fullname: " + fulname;

if (name2.test(fulname)) {
    a.push(n);
    return true;
} else {
    alert("Khong dung Format name. Yeu cau nhap lai");
    return false;
    }  
}

function address(){
    var ad = document.getElementById("txtAddress").value;
    var address = "Address: " + ad;
    if (ad == ""){
        alert("Địa chỉ không được để trống");
        return false;
    }
    a.push(address);
    return true;
}

function checkmail(){
    var mail = document.getElementById("email").value;
    var checkmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var xmail = "Mail: " + mail;
    if (mail == "") {
        error.push("Email không được để trống");
        return false;
    }   else if (!checkmail.test(mail)){

        alert("Bạn đã nhập sai định dạng Mail");
        return false;
    }
    a.push(xmail);
    return true;
}

function checkradio() {// lấy giá trị thẻ sex
    var checkgd = document.querySelector(".gend:checked").value;
    var resultgender = "Sex: " + checkgd;
    a.push(resultgender);
    return true;
}

function dob() { // lấy giá trị thẻ date of birth
    var ngaysinh = document.getElementById("dob").value;
    var re = /\d{4}/;
    var namsinh = re.exec(ngaysinh);
    var namhientai = new Date().getFullYear();
    var tuoi = namhientai - namsinh;
    var birth = "Birthday: " + ngaysinh;

    if (tuoi < 17) {
        alert("Bạn chưa đủ 17 tuổi");
        return false;
    } else {
        a.push(birth);
        return true;
    }
}

function selectcountry() { // lấy giá trị thẻ select

    var theselect = register.cbCountry;
    var vcity = theselect[theselect.selectedIndex].value;
    var cities = "Country: " + vcity;
    a.push(cities);
    return true;
}

function phone(){
    var tel = document.getElementById("phone").value;
    var phonenum = "Phone: "+ tel ;
    if (tel == ""){
        alert("Yeu cai nhap so dien thoai");
        return false;
    }
    
    a.push(phonenum);
    return true;
}

function checkhobbies(){
    var checkbox = document.getElementsByName("hobby");
    var result = "Hobbies: ";

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            result = result + checkbox[i].value + ',';
        }
    }
    a.push(result);
    return true;
}

function cmm(){
    var commment = document.getElementById("note").value;
    a.push("Comment: " + commment);
    return true; 
}

function get(){
    a = [];
    a.push("Welcome to Education Web");
    a.push("----------");
    if (loginname() && fullname() && address() && checkmail() && checkradio() && dob() && selectcountry() && phone() && checkhobbies() && cmm()){
        alert(a.join("\n"));
    }
    return false;
}