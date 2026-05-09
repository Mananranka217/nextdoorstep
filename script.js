const SHEET_URL = "https://script.google.com/macros/s/AKfycbzYasX4CxR3pgmixRN7JROfj1OwM15gr8IBRhg4NnAsKtvHOnmybA3Oj17FByQX7cyC/exec";

function handleEnquiryForm(form) {
  const note = form.querySelector(".form-note");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() || "there";

    const img = new Image();
    img.src = SHEET_URL + "?" + new URLSearchParams(data).toString();

    note.textContent = `Thanks, ${name}. Your enquiry has been submitted.`;
    note.classList.add("success");
    form.reset();
  });
}

document.querySelectorAll(".enquiry-form").forEach(handleEnquiryForm);
