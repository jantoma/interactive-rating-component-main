window.onload = () => {
  const labels = document.querySelectorAll("label");
  const inputs = document.querySelectorAll("input");
  const btn = document.getElementById("ratingBtn");

  inputs.forEach((input) => {
    input.addEventListener("click", (e) => {
      inputs.forEach((input) => input.classList.remove("active"));
      labels.forEach((label) => {
        label.classList.remove("active");
        label.style.cssText = "";
      });

      e.target.classList.add("active");

      const label = document.querySelector(`label[for="${e.target.id}"]`);
      label.classList.add("active");
      label.style.cssText = "background-color: #7c8798; color: #fff;";
    });
  });

  btn.addEventListener("click", () => {
    const selectedRating = document.querySelector("input.active");

    if (selectedRating) {
      const card = document.querySelector(".card");
      const thanksDiv = document.createElement("div");
      thanksDiv.id = "thanks";

      const img = document.createElement("img");
      img.src = "images/illustration-thank-you.svg";

      const span = document.createElement("span");
      span.innerText = `You selected ${selectedRating.value} out of 5`;

      const title = document.createElement("h3");
      title.innerHTML = "Thank You!";

      const para = document.createElement("p");
      para.innerHTML = `We appreciate you taking the time to give a rating. If
        you ever need more support, don’t hesitate to get in touch!`;

      thanksDiv.append(img, span, title, para);
      document.body.appendChild(thanksDiv);

      setTimeout(() => {
        location.reload();
      }, 5000);
    } else {
      alert("Please select a rating!");
    }
  });
};
