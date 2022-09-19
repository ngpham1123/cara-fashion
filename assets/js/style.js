$("#bar").click(() => {
  $("#navbar").toggleClass("active");
});

$("#close").click(() => {
  $("#navbar").toggleClass("active");
});

$(".img-prd").click(() => {
  window.location.href = "https://ngpham1123.github.io/cara-fashion/sproduct.html";
});
$(".des").click(() => {
  window.location.href = "https://ngpham1123.github.io/cara-fashion/sproduct.html";
});

$("a[href='#']").click((event) => {
  event.preventDefault();
});
