// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const submitBtn = document.querySelector("main");
function submitEventHandler() {
    const removeChild = (submitBtn) => {
        while (submitBtn.lastChild) {
            submitBtn.removeChild(submitBtn.lastChild);
        }
    }
    removeChild(submitBtn);
    const message = document.createElement("p");
    message.innerText = "Thank you for your message!";
    document.getElementById("contact-page").appendChild(message);
}
submitBtn.addEventListener("click", submitEventHandler);