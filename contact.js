document.getElementById('sendButton').addEventListener('click', function () {
  const name = document.getElementById('getname').value;
  const email = document.getElementById('getemail').value;
  const subject = document.getElementById('getsubject').value;
  const message = document.getElementById('getmessage').value;
  const phone = document.getElementById('getphone').value;

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');
  const alertMsg = document.getElementById('alertMsg');

  // Reset previous error messages
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
  alertMsg.style.display = "none";

  let isValid = true;

  // Validation
  if (name.trim() === "") {
      nameError.textContent = "Please enter your name!!";
      isValid = false;
  }

  if (email.trim() === "") {
      emailError.textContent = "Please enter your email!!";
      isValid = false;
  }

  if (phone.trim() === "") {
      phoneError.textContent = "Please enter your phone number!!";
      isValid = false;
  }

  if (subject.trim() === "") {
      subjectError.textContent = "Please enter the subject!!";
      isValid = false;
  }

  if (message.trim() === "") {
      messageError.textContent = "Please enter your message!!";
      isValid = false;
  }

  if (isValid) {
      const mailtoLink = `mailto:agnesrukundo1998@gmail.com?subject=Message from ${name} / ${phone} : ${subject} &body=${message}%0A%0AReply to: ${email}`;
      window.location.href = mailtoLink;

      alertMsg.style.display = "block";
      setTimeout(function () {
          alertMsg.style.display = "none";
      }, 4000);
  }
});


  //for alert message after sending a message

//   function showAlert() {
    
//     var alertBox = document.getElementById("alertMsg");
//     alertBox.style.display = "block";

//     setTimeout(function(){
//       alertBox.style.display = "none";
//     }, 4000);
//   }
//   showAlert()
  
// });

