function formValidation() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("pass").value;


    if (u == "") {
        alert("please fill out username");
        return false;
    }

    else if (p == "") {
        alert("password cannot be empty");
        return false;
    }
    else if (p.length < 8) {
        alert("password cannot have less than 8 characters")
        return false;
    }
    else {
        alert("login successful")
    }

    return true;
}

function data()
{
    let u = document.getElementById("username").value;
    let p = document.getElementById("pass").value;
    const myObj = { "name": u,  "password": p };
    document.getElementById("demo").innerHTML = "welcome "+ myObj.name;
}