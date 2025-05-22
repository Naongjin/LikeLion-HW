function renderDatas(data) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const post = data.find((item) => item.postId === parseInt(id));
  if (post) {
    //데이터 입력 받으면
    document.getElementById("Title").textContent = post.title;
    document.getElementById("Date").textContent = post.date;
    document.getElementById("contentText").textContent = post.content;
  } else {
    //없을 경우 확인
    document.getElementById("Content").innerHTML =
      "<p>게시글을 찾을 수 없습니다.</p>";
  }
}

document.getElementById("DeleteBtn").addEventListener("click", () => {
  alert("삭제하시겠습니까?");
  window.location.href = "../pages/main.html";
});

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    const localData = JSON.parse(localStorage.getItem("userLetters") || "[]");
    const combined = [...data, ...localData];
    renderDatas(combined);
  })
  .catch((error) => {
    console.error("데이터 불러오기 오류:", error);
    document.getElementById("Content").innerHTML =
      "<p>데이터를 불러오는 중 오류가 발생했습니다.</p>";
  });
