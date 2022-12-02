var contactbutton = document.getElementById('submit-button-contact');
contactbutton.setAttribute('disabled', 'true');
contactbutton.style.background = "black";
contactbutton.style.color = "grey";
contactbutton.style.border = "1px solid grey";

document.getElementById('form-contact').addEventListener('change', event => {
    if (
        document.getElementById('subject').value != ''
        && document.getElementById('email').value != ''
        && document.getElementById('Name').value != ''
        && document.getElementById('firstName').value != ''
        && document.getElementById('content').value != ''
    ) {
        document.getElementById('submit-button-contact').removeAttribute('disabled')
        contactbutton.style.background = "lightblue";
        contactbutton.style.color = "black";
        contactbutton.style.border = "1px solid white";
    }
})