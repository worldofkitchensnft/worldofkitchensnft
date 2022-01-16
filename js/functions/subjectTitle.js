export function subjectTitle() {
  const form = document.querySelector(".form-container");
  let subject = document.querySelector(".subject");
  let EmailSubjectTitle = document.getElementById("subjectTitle");
  form.addEventListener("submit", () => (EmailSubjectTitle.value = subject.value));
}
