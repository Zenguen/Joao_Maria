var tbl = document.getElementById("tabela");
var Alunos = ["João", "Maria"];
var mes = [];
var row;
var cell;
var macasLevadas = 0;
var perasLevadas = 0;


for (let i = 0; i < 30; i++) {
    NumAluno = Math.floor(Math.random() * Alunos.length);

    let novoDia = {};
    novoDia.peras = 0;
    novoDia.macas = 0;

    while (novoDia.macas == 0 && novoDia.peras == 0) {
        novoDia.peras = parseInt(Math.random() * (6));
        novoDia.macas = parseInt(Math.random() * (6));
    }
    novoDia.melhorAluno = Alunos[NumAluno];


    novoDia.professora = [];

    if (novoDia.melhorAluno == "Maria") {
        let qtsPeras = novoDia.peras;
        let qtsMacas = novoDia.macas;
        for (let j = 0; j < 3; j++) {
            if (qtsPeras > 0) {
                novoDia.professora[j] = "Pera";
                qtsPeras--;
            } else
            if (qtsMacas > 0) {
                novoDia.professora[j] = "Maçã";
                qtsMacas--;
            }

        }
    } else
    if (novoDia.melhorAluno == "João") {
        let qtsPeras = novoDia.peras;
        let qtsMacas = novoDia.macas;

        for (let k = 0; k < 3; k++) {
            if (qtsMacas > 0) {
                novoDia.professora[k] = "Maçã";
                qtsMacas--;
            } else
            if (qtsPeras > 0) {
                novoDia.professora[k] = "Pera";
                qtsPeras--;
            }
        }
    }


    mes.push(novoDia);
}

//console.log(mes)

for (let i = 1; i < 31; i++) {
    var diaAtual = mes[i - 1];

    row = tbl.insertRow(i);

    for (let j = 0; j < 7; j++) {
        cell = row.insertCell(j);
    }

    tbl.rows[i].cells[0].innerHTML = i;
    tbl.rows[i].cells[1].innerHTML = diaAtual.peras;
    tbl.rows[i].cells[2].innerHTML = diaAtual.macas;
    tbl.rows[i].cells[3].innerHTML = diaAtual.melhorAluno;
    tbl.rows[i].cells[4].innerHTML = diaAtual.professora[0];


    if (diaAtual.professora[1] == null)
        tbl.rows[i].cells[5].innerHTML = "--";
    else
        tbl.rows[i].cells[5].innerHTML = diaAtual.professora[1];

    if (diaAtual.professora[2] == null)
        tbl.rows[i].cells[6].innerHTML = "--";
    else
        tbl.rows[i].cells[6].innerHTML = diaAtual.professora[2];
}

for (let i = 0; i < mes.length; i++) {
    for (let j = 0; j < mes[i].professora.length; j++) {
        if (mes[i].professora[j] == "Maçã")
            macasLevadas++;
        else
        if (mes[i].professora[j] == "Pera")
            perasLevadas++;
    }
}

let result = document.getElementById('result');

result.innerHTML = `Este mês a professora levou ${macasLevadas} maçãs e ${perasLevadas} peras.`;

//console.log(macasLevadas);
//console.log(perasLevadas);