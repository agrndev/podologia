document.addEventListener("DOMContentLoaded", function () {
  const previous_button = document.querySelector(".previous-button");
  const next_button = document.querySelector(".next-button");
  previous_button.addEventListener("click", () => move_carousel("previous"));
  next_button.addEventListener("click", () => move_carousel("next"));

  const carousel = document.querySelector(".carousel");
  const carousel_card = document.querySelector(".carousel-card");

  let current_position = 0;
  let slide_amount;

  function update_slide_amount() {
    const carousel_width = carousel_card.offsetWidth;
    if (window.innerWidth < 390) {
      slide_amount = carousel_width * 1.0825;
    } else if (window.innerWidth < 1055 && window.innerWidth > 390) {
      slide_amount = carousel_width * 1.056;
    } else if (window.innerWidth > 1055) {
      slide_amount = carousel_width * 1.04;
    }
  }

  update_slide_amount();
  window.addEventListener("resize", update_slide_amount);

  function move_carousel(direction) {
    console.log(direction + " pressed");
    update_slide_amount();
    switch (direction) {
      case "next":
        current_position -= slide_amount;
        break;
      case "previous":
        current_position += slide_amount;
        break;
    }
    const total_width = carousel.scrollWidth - carousel.clientWidth;
    current_position = Math.max(Math.min(current_position, 0), -total_width);
    
    carousel.style.transform = `translateX(${current_position}px)`;
  }
});

