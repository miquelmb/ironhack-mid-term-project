document.getElementById("send-button").addEventListener("click", addPost)


function addPost(preventForm) { 
    preventForm.preventDefault();

    //bring info from different inputs
    let fullName = document.getElementById("full-name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message =document.getElementById("textarea").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            Accept: "text/plain, application/json, */*", "Content-type": "application/json",
        },
        body: JSON.stringify({name: fullName, email: email, phone: phone, message: message})
    })
    .then( response => {
        //read response status and create an alert
        if (response.status === 201) {alert("El formulario se ha enviado correctamente")}
        return response.json()
      })
      .then((formData) => console.log(formData))
}