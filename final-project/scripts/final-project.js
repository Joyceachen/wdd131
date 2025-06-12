// Function 1: Populate recipes with DOM interaction and template literals
const recipes = [
  { name: "Avocado Toast", time: "10 min" },
  { name: "Banana Smoothie", time: "5 min" },
  { name: "Veggie Wrap", time: "15 min" }
];

const recipeList = document.getElementById("recipeList");
if (recipeList) {
  recipeList.innerHTML = recipes.map(r => `<li>${r.name} - Ready in ${r.time}</li>`).join("");
}

// Function 2: Handle contact form with localStorage and conditional logic
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      const formData = { name, email, message };
      localStorage.setItem("contact", JSON.stringify(formData));
      msg.textContent = `Thank you for contacting us, ${name}!`;
      form.reset();
    } else {
      msg.textContent = "Please fill out all fields.";
    }
  });
}
