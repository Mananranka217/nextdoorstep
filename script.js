const form = document.querySelector("#enquiryForm");
const note = document.querySelector("#formNote");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name")?.toString().trim() || "there";

  note.textContent = `Thanks, ${name}. Your enquiry is ready to be shared with NextDoorStep.`;
  note.classList.add("success");
  form.reset();
});
