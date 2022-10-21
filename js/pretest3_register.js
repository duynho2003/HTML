function uname(){
    var username = document.getElementById("user").value;
    // var lengthname = /^[A-Za-z ]{6,30}$/;
    var result = "Name: " + username;

    if (username == ""){
        alert("Tên không được để trống");
        return false;
    }
    a.push(result);
    return true;
}

function checkradio(){
    var checkgd = document.querySelector(".gend:checked").value;
    var resultgender = "Gender: " + checkgd;
    a.push(resultgender);
    return true;
}

function address(){
    var ad = document.getElementById("txtAddress").value;
    var address = "Address: " + ad;
    a.push(address);
    return true;
}

function checkmail(){
    var mail = document.getElementById("email").value;
    var checkmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var xmail = "Email: " + mail;
    if (mail == "") {
        alert("Email không được để trống");
        return false;
    }   else if (!checkmail.test(mail)){

        alert("Bạn đã nhập sai định dạng Mail");
        return false;
    }
    a.push(xmail);
    return true;
}

function phone(){
    var tel = document.getElementById("phone").value;
    var phonenum = "Phone: "+ tel ;
    if (tel == ""){
        alert("Số điện thoại không được để trống");
        return false;
    }
    
    a.push(phonenum);
    return true;
}
function selectqualification(){

    var theselect = register.cbqualification;
    var vqua = theselect[theselect.selectedIndex].value;
    var qualifications = "Qualification: " + vqua;
    a.push(qualifications);
    return true;
}

function get(){
    a = [];
    a.push("Student Information Successful Registration");
    a.push("----------");
    if (uname() && checkradio() && address() && checkmail() && phone() && selectqualification()){
        alert(a.join("\n"));
    }
    return false;
}