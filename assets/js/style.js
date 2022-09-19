$("#bar").click(() => {
  $("#navbar").toggleClass("active");
});

$("#close").click(() => {
  $("#navbar").toggleClass("active");
});

$(".img-prd").click(() => {
  window.location.href = "/sproduct.html";
});
$(".des").click(() => {
  window.location.href = "/sproduct.html";
});

$("a[href='#']").click((event) => {
  event.preventDefault();
});
