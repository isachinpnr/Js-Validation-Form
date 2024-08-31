let submit = document.getElementById("button");

// we make all the data into a saprate funtion access into each with ID name....
// and make a "data" name of function 

function data() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;

    // all conditon apply is here.....
    if (username == "" || password == "" || email == "" || number == "" || confirmPassword == "") {
        alert("all filled are medontary");
        return false;
    }
    else if (username.length < 5) {
        alert("username should not be less then in 5 characters")
        return false;
    } else if (number.length < 10 || number.length > 10) {
        alert("number should be on 10 digits")
        return false;
    } else if (isNaN(number)) {
        alert("only number are allowed");
        return false;
    } else if (password != confirmPassword) {
        alert("password are not matched");
        return false;
    } else if (password == "password" || password == username) {
        alert("password not allowed as username or 'password' ");
        return false;
    } else {
        return true;
    }


}

