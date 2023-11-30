function validateLoginForm() {
    var emailInput = document.getElementById("emailInput").value;
    var passwordInput = document.getElementById("passwordInput").value;

    var errorMessage = "";

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput)) {
        errorMessage = "Insira um e-mail válido.";
    }

    var errorElement = document.getElementById("error-message");
    errorElement.innerHTML = errorMessage; 
    
    if (errorMessage !== "") {
        errorElement.classList.remove("success-message");
        errorElement.classList.add("error-message");
    } else {
        errorElement.classList.remove("error-message");
        errorElement.classList.add("success-message");
        errorElement.innerHTML = "Redirecionando...";
    }
}