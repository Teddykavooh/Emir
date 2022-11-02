function sendEmail() {
    let c_name = document.getElementById('customerName').value
    let c_mail = document.getElementById('customerEmail').value
    let c_phone = document.getElementById('customerPhone').value
    let c_message = document.getElementById('customerNote').value
    if (c_name != "") {
        if (c_mail != "") {
            if (c_message != "") {
                Email.send({
                    Host: "smtp.gmail.com",
                    Username: "sender@email_address.com",
                    Password: "Enter your password",
                    To: 'receiver@email_address.com',
                    From: c_mail,
                    Subject: "Contact Related",
                    Body: c_message,
                })
                .then(function (message) {
                    alert("mail sent successfully")
                });
            }
        }
    } else {
        alert("Some details are missing!")
    }
  }