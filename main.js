document.addEventListener("DOMContentLoaded", function() {
    const carousel = new bootstrap.Carousel(document.querySelector("#carouselExampleSlidesOnly"), {
        interval: 1000,
        pause: "hover"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tipoUsuario = document.getElementById("tipoUsuario");
    const areaSaude = document.getElementById("areaSaude");
    const especialidade = document.getElementById("especialidade");
    const areaSelect = document.getElementById("areaSelect"); 
    const especialidadeSelect = document.getElementById("especialidadeSelect"); 

    tipoUsuario.addEventListener("change", function () {
        if (tipoUsuario.value === "profissional") {
            areaSaude.style.display = "block";
            especialidade.style.display = "none";
        } else if (tipoUsuario.value === "paciente") {
            areaSaude.style.display = "none";
            especialidade.style.display = "block";
        } else {
            areaSaude.style.display = "none";
            especialidade.style.display = "none";
        }
    });
    areaSelect.addEventListener("change", function () {
    });

    especialidadeSelect.addEventListener("change", function () {
    });
});
