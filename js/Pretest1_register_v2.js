var a = [];
a.push("Member Information");
a.push("------------------");

function fullname() {// lấy giá trị thẻ fullname
    var fulname = document.getElementById("txtUser").value;
    var name = /^[A-Za-z ]{3,20}$/;
    var n = "Name: " + fulname;

    if (name.test(fulname)) {
        a.push(n);
        return true;
    } else {
        alert("Khong dung Format name. Yeu cau nhap lai");
        return false;
    }
}
function checkradio() {// lấy giá trị thẻ gender
    var checkgd = document.querySelector(".gend:checked").value;
    var resultgender = "Gender: " + checkgd;
    a.push(resultgender);
    return true;
}

function checkhobbies() {// lấy giá trị thẻ hobbies
    var checkbox = document.getElementsByName('hobby');
    var result = "Hobbies: ";

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            result = result + checkbox[i].value + ',';
        }
    }
    a.push(result);
    return true;
}
function dob() { // lấy giá trị thẻ date of birth
    var ngaysinh = document.getElementById("txtDob").value;
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

function checkmail() {// lấy giá trị thẻ mail
    var mail = document.getElementById('txtMail').value;
    var checkmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var xmail = "Mail: " + mail;
    if (mail == "") {
        error.push("Email không được để trống");
        return false;
    } else if (!checkmail.test(mail)) {

        alert("Bạn đã nhập sai định dạng Mail");
        return false;
    }
    a.push(xmail);
    return true;
}
function address() {// lấy giá trị thẻ address

    var ad = document.getElementById('txtAddress').value;
    var address = "Address: " + ad;
    if (ad == "") {
        alert("Địa chỉ không được để trống");
        return false;
    }
    a.push(address);
    return true;
}
function phone() { // lấy giá trị thẻ phone number

    var tel = document.getElementById('Phone').value;
    var phonenum = "Phone: " + tel;
    if (tel == "") {
        alert("Yêu cầu nhập số điện thoại");
        return false;
    }

    a.push(phonenum);
    return true;
}
function selectcity() { // lấy giá trị thẻ select

    var theselect = register.cbCity;
    var vcity = theselect[theselect.selectedIndex].value;
    var cities = "City: " + vcity;
    a.push(cities);
    return true;
}
function cmm() {

    var commment = document.getElementById("txtcom").value;
    a.push('Comment: ' + commment);
    return true;
}


function get() {
    a = [];
    a.push("Member Information");
    a.push("------------------");
    if (fullname() && checkradio() && checkhobbies() && dob() && address() && checkmail() && phone() && selectcity() && cmm()) {
        alert(a.join("\n"));
    }
    return false;
}

