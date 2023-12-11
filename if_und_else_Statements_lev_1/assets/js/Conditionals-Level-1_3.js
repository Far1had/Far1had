function greaterThan() {
    let age = document.querySelector('#input').value;
    const message = document.querySelector("#message");

    if (age >= 18) {
      message.innerHTML = "Ja, Du darfst shisha rauchen.";
    } else if (age < 18) {
      message.innerHTML = "Nein du darfst keine shisha rauchen";
    } else {
      message.innerHTML = "Ein anderer Fall.";
    }
}
