const inputNome = document.getElementById("nome-heroi");
const inputXp = document.getElementById("quantidade-xp-heroi");
const botaoVerificarRank = document.getElementById("btn-verificar-rank");

const mostraRank = document.getElementById("mostraRank");

// botaoVerificarRank.addEventListener("click", () => {
//     console.log("Botão clicado!");
// });


        //forma antiga addEventListener

botaoVerificarRank.addEventListener("click", function () {
    const nomeHeroi = inputNome.value.trim();
    const xp = Number(inputXp.value);

        // VALIDAÇÃO
    if (nomeHeroi === "") {
        alert("Digite um nome VÁLIDO");
        return;
    }

    if (isNaN(xp) || xp < 0) {
        alert("Quantidade de XP INVÁLIDA");
        return;
    }

    const rank = calculaRank(xp);

    mostraRank.innerHTML = `
        Teu Herói: <strong>${nomeHeroi}</strong><br>
        Está no rank: <strong>${rank}</strong>
    `;

        // LIMPAR CONTEUDO INPUTS
    inputNome.value = "";
    inputXp.value = "";
});



        // FUNCTIONS AUXILIARES


function calculaRank(xp) {
    if ( xp < 1001 ) {
        return "Ferro"
    }
    else if ( xp < 2001 ) {
        return "Bronze"
    }
    else if ( xp < 5001 ) {
        return "Prata"
    }
    else if ( xp < 7001 ) {
        return "Ouro"
    }
    else if ( xp < 8001 ) {
        return "Platina"
    }
    else if ( xp < 9001 ) {
        return "Ascendente"
    }
    else if ( xp < 10001 ) {
        return "Imortal"
    }
    else {
        return "Radiante"
    }
}