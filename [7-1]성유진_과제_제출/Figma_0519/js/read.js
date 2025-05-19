export function renderDatas(data) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  //post의 id
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
