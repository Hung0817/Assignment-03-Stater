document.addEventListener("DOMContentLoaded", function () {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailInput = document.querySelector(".check-mail");
  const submitBtn = document.querySelector("#submitBtn");
  const myId = document.querySelector(".my-id");
  const removeEmail = document.querySelector(".removeForm");
  submitBtn.addEventListener("click", function () {
    event.preventDefault();
    const checkMail = emailInput.value.trim();

    if (checkMail === "" || !regex.test(checkMail)) {
      alert("Invalid email address");
    } else {
      myId.classList.remove("my-id");
      removeEmail.classList.add("remove-email");
    }
  });

  const showContent = document.querySelectorAll(".show-content");
  const viewMore = document.querySelectorAll(".view-more");
  const viewLess = document.querySelectorAll(".view-less");
  for (let i = 0; i < viewMore.length; i++)
    viewMore[i].addEventListener("click", function () {
      showContent[i].classList.remove("hide");
      viewMore[i].classList.remove("view");
      viewLess[i].classList.add("view");
    });
  for (let i = 0; i < viewLess.length; i++)
    viewLess[i].addEventListener("click", function () {
      showContent[i].classList.add("hide");
      viewLess[i].classList.remove("view");
      viewMore[i].classList.add("view");
    });
});
