function checkAge() {
    let age = document.querySelector('#ageInput').value;
    let checked = document.querySelector('#checked').checked;
    const message = document.querySelector("#message");

    if (age > 18 && checked) {
      message.innerHTML = "Du bist über 18 Jahren alt.";
    } else if (age < 18 && checked) {
      message.innerHTML = "Du bist unter 18 Jahren alt..";
    } else if (age = 18 && checked) {
        message.innerHTML = "Du bist genau 18 Jahren alt..";
      }else {
      message.innerHTML = "Ein anderer Fall.";
    }
}
