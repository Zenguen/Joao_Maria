const tbl = document.getElementById("tabela");
const mes = [];
const Alunos = ["João", "Maria"];
const sortearMelhorAluno = () => Alunos[NumAluno = Math.floor(Math.random() * Alunos.length)];
const criarNovoDia = () => {
    return {
            peras:0,
            macas:0,
            melhorAluno:sortearMelhorAluno(),
            frutas:[],

            sortearQtdFrutas()
            {
                while (this.macas == 0 && this.peras == 0)
                {
                this.peras = parseInt(Math.random() * (6));
                this.macas = parseInt(Math.random() * (6));
                }
            },

            setFrutas(numFruta, numFruta2, strFruta,strFruta2)
            {
                for (let i = 0; i < 3; i++) {
                    if (numFruta > 0) {
                        this.frutas[i] = strFruta;
                        numFruta--;
                    } else
                    if (numFruta2 > 0) {
                        this.frutas[i] = strFruta2;
                        numFruta2--;
                    }
            
                } 
            }
        }
};
const popularVetMes = vetMes => {   
    for (let i = 0; i < 30; i++)
    {    
        let novoDia = criarNovoDia();
        novoDia.sortearQtdFrutas();
        let {peras:qtsPeras,macas:qtsMacas} = novoDia;
        if (novoDia.melhorAluno == "Maria") {        
            novoDia.setFrutas(qtsPeras,qtsMacas,'Pera', 'Maçã')
            }
        else{ 
             if (novoDia.melhorAluno == "João") {
            novoDia.setFrutas(qtsMacas,qtsPeras,'Maçã','Pera')
        }}
    
        vetMes.push(novoDia);
    }
};

const popularTabela = tbl => {
    let row
    for (let i = 1; i < 31; i++) {
        diaAtual = mes[i - 1];
        row = tbl.insertRow(i);

    for (let i = 0; i < 7; i++) {
        cell = row.insertCell(i);
    }

    tbl.rows[i].cells[0].innerHTML = i;
    tbl.rows[i].cells[1].innerHTML = diaAtual.peras;
    tbl.rows[i].cells[2].innerHTML = diaAtual.macas;
    tbl.rows[i].cells[3].innerHTML = diaAtual.melhorAluno;
    tbl.rows[i].cells[4].innerHTML = diaAtual.frutas[0];

    if (diaAtual.frutas[1] == null)
        tbl.rows[i].cells[5].innerHTML = "--";
    else
        tbl.rows[i].cells[5].innerHTML = diaAtual.frutas[1];

    if (diaAtual.frutas[2] == null)
        tbl.rows[i].cells[6].innerHTML = "--";
    else
        tbl.rows[i].cells[6].innerHTML = diaAtual.frutas[2];
}}
const informaTotal = () => {
    let macasLevadas = 0;
    let perasLevadas = 0;
    let tbl = document.getElementById("tabela")    
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 3; j++) {
            if (mes[i].frutas[j] == "Maçã")
                macasLevadas++;
            else
            if (mes[i].frutas[j] == "Pera")
                perasLevadas++;
        }
    }
    
    let result = document.getElementById('result');
    
    result.innerHTML = `Este mês a professora levou ${macasLevadas} maçãs e ${perasLevadas} peras.`;
}

popularVetMes(mes);
popularTabela(tbl);
informaTotal();



