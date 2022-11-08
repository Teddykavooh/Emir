document.getElementById("cont_form").addEventListener("submit",sendEmail);
function sendEmail() {
    let c_name = document.getElementById('customerName').value;
    let c_mail = document.getElementById('customerEmail').value;
    let c_phone = document.getElementById('customerPhone').value;
    let c_message = document.getElementById('customerNote').value;
    if (c_name != "") {
        if (c_mail != "") {
            if ((c_mail != "") && (ValidateEmail(c_mail))) {
                Email.send({
                    Host: "smtp.gmail.com",
                    Username: "sender@email_address.com",
                    Password: "Enter your password",
                    To: "info@emirtravelagency.co.ke",
                    From: c_mail,
                    Subject: "Contact Related",
                    Body: c_phone +"\n"+ c_message,
                })
                .then(function (message) {
                    alert("Mail sent successfully");
                });
            }
        }
    } else {
        alert("Some details are missing!");
    }
  }

  document.getElementById("greet_form").addEventListener("submit",sendGreetEmail);
  function sendGreetEmail() {
    let g_name = document.getElementById('g_name').value;
    let g_mail = document.getElementById('g_mail').value;
    if (g_name != "") {
        if ((g_mail != "") && (ValidateEmail(g_mail))) {
            Email.send({
                Host: "smtp.gmail.com",
                Username: "sender@email_address.com",
                Password: "Enter your password",
                To: "info@emirtravelagency.co.ke",
                From: g_mail,
                Subject: "Greeting!!!",
                Body: g_name + " just said Hi!",
            })
            .then(function (message) {
                alert("Greeting sent successfully");
            });
        }
    } else {
            alert("Some details are missing!");
        }
  }

  function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
    //   alert("Valid email address!");
  
    //   document.form1.text1.focus();
  
      return true;
  
    } else {
  
    //   alert("Invalid email address!");
  
    //   document.form1.text1.focus();
  
      return false;
  
    }
  
  }