(function () {
    
    // Get the registration <form> element from the DOM.
    var form = document.getElementById("registration-form");
    var submitButton = form.querySelector("button");
    // Get the <input> elements from the DOM.
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");

    var checkPasswords = function() {
        var passwordsMatch = passwordInput.value === confirmPasswordInput.value;
        if (passwordsMatch) {
            // Clear any previous error message.
            confirmPasswordInput.setCustomValidity("");
        } else {
            // Setting this error message will prevent the form from being submitted.
            confirmPasswordInput.setCustomValidity("Las contraseñas no coinciden.");
        }
    };

    var addPasswordInputEventListeners = function() {
        passwordInput.addEventListener("input", checkPasswords, false);
        confirmPasswordInput.addEventListener("input", checkPasswords, false);
    };

    var formSubmissionAttempted = function() {
        form.classList.add("submission-attempted");
    };

    var addSubmitClickEventListener = function() {
        submitButton.addEventListener("click", formSubmissionAttempted, false);
    };

    addPasswordInputEventListeners();
    addSubmitClickEventListener();

}());
