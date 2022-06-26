const skills = document.querySelector(".skills");
const projects = document.querySelector(".projects");
const checkBox = document.getElementById("toggle__checkbox");
projects.style.display = "none";

checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    console.log("checked");
    skills.classList.toggle("fadeOut");
    skills.classList.toggle("fadeIn");
    projects.classList.toggle("fadeOut");
    projects.classList.toggle("fadeIn");
    carregarHall()
    setTimeout(() => {
      skills.style.display = "none";
      projects.style.display = "";

    }, 300);
  } else {
    // skills.style.display = "";
    skills.classList.toggle("fadeIn");
    skills.classList.toggle("fadeOut");
    projects.classList.toggle("fadeIn");
    projects.classList.toggle("fadeOut");

    setTimeout(() => {
      projects.style.display = "none";
      skills.style.display = "";
    }, 300);
  }
});

function carregarHall() {
  $(document).ready(function () {
    output = "";
    $.ajax({
      url: "halldafama.php",
      method: "GET",
      dataType: "json",
      success: function (data) {

        document.getElementById("posicao2").innerHTML = 1;
        document.getElementById("nickname2").innerHTML = data[0].nickname;
        document.getElementById("pontuacao2").innerHTML = data[0].premiacaototal;

        document.getElementById("posicao3").innerHTML = 2;
        document.getElementById("nickname3").innerHTML = data[1].nickname;
        document.getElementById("pontuacao3").innerHTML = data[1].premiacaototal;

        document.getElementById("posicao4").innerHTML = 3;
        document.getElementById("nickname4").innerHTML = data[2].nickname;
        document.getElementById("pontuacao4").innerHTML = data[2].premiacaototal;
        console.log(data)

        document.getElementById("posicao5").innerHTML = 4;
        document.getElementById("nickname5").innerHTML = data[3].nickname;
        document.getElementById("pontuacao5").innerHTML = data[3].premiacaototal;

        document.getElementById("posicao6").innerHTML = 5;
        document.getElementById("nickname6").innerHTML = data[4].nickname;
        document.getElementById("pontuacao6").innerHTML = data[4].premiacaototal;

        document.getElementById("posicao7").innerHTML = 6;
        document.getElementById("nickname7").innerHTML = data[5].nickname;
        document.getElementById("pontuacao7").innerHTML = data[5].premiacaototal;

        document.getElementById("posicao8").innerHTML = 7;
        document.getElementById("nickname8").innerHTML = data[6].nickname;
        document.getElementById("pontuacao8").innerHTML = data[6].premiacaototal;

        document.getElementById("posicao9").innerHTML = 8;
        document.getElementById("nickname9").innerHTML = data[7].nickname;
        document.getElementById("pontuacao9").innerHTML = data[7].premiacaototal;

        document.getElementById("posicao10").innerHTML = 9;
        document.getElementById("nickname10").innerHTML = data[8].nickname;
        document.getElementById("pontuacao10").innerHTML = data[8].premiacaototal;

        document.getElementById("posicao11").innerHTML = 10;
        document.getElementById("nickname11").innerHTML = data[9].nickname;
        document.getElementById("pontuacao11").innerHTML = data[9].premiacaototal;
      }
    })


  })

}
