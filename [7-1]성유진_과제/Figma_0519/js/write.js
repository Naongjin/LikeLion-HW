window.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("Date");
  const today = new Date();
  const formattedDate =
    today.getFullYear() +
    "." +
    String(today.getMonth() + 1).padStart(2, "0") +
    "." +
    String(today.getDate()).padStart(2, "0");
  dateElement.textContent = formattedDate;

  console.log("날짜:", formattedDate);
});

document.getElementById("WriteBtn").addEventListener("click", () => {
  const title = document.getElementById("Title").value;
  const content = document.getElementById("letterContent").value;
  const date = document.getElementById("Date").textContent;

  console.log("제목:", title);
  console.log("내용:", content);
  console.log("날짜:", date);
});
