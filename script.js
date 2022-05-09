///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

const meal = document.querySelector(".section-meals");
const testimonial = document.querySelector(".section-testimonials");

document.querySelector(".meals").addEventListener("click", function (e) {
  e.preventDefault();
  meal.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".Testimonials").addEventListener("click", function (e) {
  e.preventDefault();
  testimonial.scrollIntoView({ behavior: "smooth" });
});
