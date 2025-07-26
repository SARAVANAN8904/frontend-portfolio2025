
  const form = document.querySelector("form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        form.reset(); 
        successMessage.style.display = "block"; 
        setTimeout(() => {
          successMessage.style.display = "none"; 
        }, 4000);
      } else {
        alert("Failed to send message. Try again.");
      }
    })
    .catch(error => {
      alert("Something went wrong!");
      console.error("Form error:", error);
    });
  });

