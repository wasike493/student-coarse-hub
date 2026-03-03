document.getElementById("calcForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let math = Number(document.getElementById("math").value);
  let eng = Number(document.getElementById("eng").value);
  let bio = Number(document.getElementById("bio").value);
  let chem = Number(document.getElementById("chem").value);

  let cluster = ((math + eng + bio + chem) / 48) * 48;

  localStorage.setItem("cluster", cluster.toFixed(2));

  window.location.href = "results.html";
});