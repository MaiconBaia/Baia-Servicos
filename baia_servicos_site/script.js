
let materiais = [];

function adicionarMaterial() {
    const nome = document.getElementById("nomeMaterial").value;
    const valor = parseFloat(document.getElementById("valorMaterial").value);

    if (!nome || isNaN(valor) || valor <= 0) {
        alert("Preencha corretamente o nome e valor do material.");
        return;
    }

    materiais.push({ nome, valor });
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("listaMateriais");
    lista.innerHTML = "";
    materiais.forEach((mat, index) => {
        const item = document.createElement("li");
        item.textContent = `${mat.nome}: R$ ${mat.valor.toFixed(2)}`;
        lista.appendChild(item);
    });
}

function calcularEIrParaResumo() {
    const margemLucro = parseFloat(document.getElementById("margemLucro").value);
    const maoDeObra = parseFloat(document.getElementById("maoDeObra").value);

    if (materiais.length === 0 || isNaN(margemLucro) || isNaN(maoDeObra)) {
        alert("Preencha todos os campos corretamente e adicione ao menos um material.");
        return;
    }

    const totalMaterial = materiais.reduce((soma, mat) => soma + mat.valor, 0);
    const lucro = (totalMaterial * margemLucro) / 100;
    const precoFinal = totalMaterial + lucro + maoDeObra;

    const dados = { materiais, precoFinal: precoFinal.toFixed(2) };
    localStorage.setItem("resumoServico", JSON.stringify(dados));

    window.location.href = "resumo.html";
}
