export function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

export function renderDatas(data) {
  const id = getQueryParam("id");
  const post = data.find((item) => item.postId === parseInt(id));

  if (post) {
    document.getElementById("Title").textContent = post.title;
    document.getElementById("Date").textContent = post.date;
    document.getElementById("contentText").textContent = post.content;
    console.log("불러온 글:", post);
  } else {
    document.getElementById("Content").innerHTML =
      "<p>게시글을 찾을 수 없습니다.</p>";
  }
}
