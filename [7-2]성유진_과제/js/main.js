function renderLetters(dataList) {
  const letterContainer = document.getElementById("Letter");
  letterContainer.innerHTML = ""; // 기존 내용 제거

  dataList.forEach((e) => {
    // 새로운 div 박스 생성
    const letter = document.createElement("div");
    letter.innerText = e.title; // 텍스트 설정 (각 편지 제목)
    letter.className = "letter-box";
    // 클릭 시 write.html 이동
    letter.addEventListener("click", () => {
      window.location.href = `read.html?id=${e.postId}`;
    });

    //각 편지를 별도로 container에 추가
    letterContainer.appendChild(letter);
  });
}
fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    const localData = JSON.parse(localStorage.getItem("userLetters") || "[]");
    const combined = [...data, ...localData];
    renderLetters(combined); // 박스 클릭 시 write.html로 이동
  })
  .catch((err) => {
    console.error("데이터 불러오기 실패:", err);
    document.getElementById("Letter").textContent =
      "편지를 불러오지 못했습니다.";
  });
