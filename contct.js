const scriptURL = 'https://script.google.com/macros/s/AKfycbyYnNICpbVPNjSVU1TmnNXpwB2lJOd66vWLGmtxZrE3EnCI7VuWyI3-gBm5heS-DiFm/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById("submit").textContent = "Please wait...";
    document.getElementById("submit").disabled = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            document.getElementById("submit").textContent = "Send Succesfuly";
            setTimeout(() => {
                document.getElementById("email").value = "";
                document.getElementById("textarea").value = "";
                document.getElementById("submit").textContent = "Send";
                document.getElementById("submit").disabled = false;
            }, 3500);
        }).catch(error => {
            console.log(error);
            document.getElementById("submit").textContent = "Please Try Again"
            document.getElementById("submit").disabled = false;
        });
});