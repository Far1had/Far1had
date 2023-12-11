function checkAge() {
    let quality = document.querySelector('#ageInput').value;
    let checked = document.querySelector('#checked').checked;
    const message = document.querySelector("#message");

    if (quality >= 0 && quality <= 3  && checked) {
      message.innerHTML = "Die Wetter Qualität ist: schlecht!";
    } else if (quality >= 4 & quality <= 7 && checked) {
      message.innerHTML = "Die Wetter Qualität ist: Okay!";
    } else if (quality >= 8 & quality <= 10 && checked) {
        message.innerHTML = "Die Wetter Qualität ist: Super!";
      }else {
      message.innerHTML = "kann zu heiss oder zu kalt sein";
    }
}
