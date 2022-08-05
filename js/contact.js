function postContactUs(preventForm) {
    preventForm.preventDefault(); 

    let fullName = document.getElementById("full-name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message =document.getElementById("textarea").value;
  
    // Using fetch to push to API
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "text/plain, application/json, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: fullName, email: email, phone: phone, message: message}),
    })
      .then((response) => response.json())
      .then((contactData) => console.log(contactData));
};

const submitButton = document.getElementById("send-button");

submitButton.addEventListener('click', () => {
    postContactUs();
});



//     let fullName = document.getElementById("full-name").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phone").value;
//     let message = document.getElementById("phone").value;

//     const newMessage = {
//         name: fullName,
//         email: email,
//         phone: phone,
//         message: message
//     }

//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify(newMessage),
//         headers: {
//             Accept: "text/plain, application/json, */*",
//             "Content-type": "application/json",
//         }
//     })
//     .then((response) => response.json())
//     .then((contactData) => console.log(contactData));
// });

