//lógica e DOM da section endereço

let tituloEndereco = document.getElementById("titulo-endereco");
tituloEndereco.textContent = "Endereço residencial";
let cep = document.getElementById("label-cep");
cep.textContent = "CEP";
let rua = document.getElementById("label-rua");
rua.textContent = "Rua";
let numero = document.getElementById("label-numero");
numero.textContent = "Número";
let cidade = document.getElementById("label-cidade");
cidade.textContent = "Cidade";
let estado = document.getElementById("label-estado");
estado.textContent = "Estado";

//selecionar o arquivo
function selecionarArquivo() {
    console.log("função chamada")
    let arquivo = document.querySelectorAll('.file-upload-area');

    if (arquivo.length > 0) {
        arquivo.forEach(arquivo => {
            arquivo.addEventListener('click', function () {
                console.log("Area de arquivo foi clicada");
                document.getElementById('file-input').click();
            });

        });
    } else {
        console.log("missão falhou: elemento file-upload-are não encotrado");
    }

}
selecionarArquivo();  //chamada da função
//funçao que altera a cor dos campos de entradas
function alterarCor(id) {
    let entrada = document.getElementById(`entrada-${id}`);
    entrada.addEventListener('focus', function () {
        entrada.classList.remove('bg-secondary', 'bg-opacity-25');
        entrada.classList.add('bg-light')
    });
    entrada.addEventListener('blur', function () {
        if (!entrada.value) {
            entrada.classList.remove('bg-light');
            entrada.classList.add('bg-secondary', 'bg-opacity-25');
        }// } else {
        //     console.error(`Elemento com id entrada-${id} não encontrado!`);
        // }
    });
}
//chamadas com parametros
alterarCor(1);
alterarCor(2);
alterarCor(3);
alterarCor(4);
alterarCor(5);
alterarCor(6);
alterarCor(7);
alterarCor(8);
alterarCor(9);
alterarCor(10);
alterarCor(11);

function formatadorCep() {
    let format = document.getElementById("entrada-7");
    format.addEventListener('input', function (e) {
        let valor = e.target.value.replace(/\D/g, "");
        if (valor.length > 5) {
            valor = valor.slice(0, 5) + "-" + valor.slice(5, 8);
        }

        e.target.value = valor;
    });
}
function formatCasa() {
    let casaFormat = document.getElementById("entrada-9");
    let errorMessage = document.getElementById("error-message");
    casaFormat.addEventListener('input', function (e) {
        let valorOriginal = e.target.value;
        let valor = valorOriginal.replace(/\D/g, "");
        if (valorOriginal !== valor) {
            errorMessage.style.display = "inline"
        } else {
            errorMessage.style.display = "none";
        }
        e.target.value = valor;

    });
}
function carregarEstados() {
    const estados = [
        { sigla: "AC", nome: "Acre" },
        { sigla: "AL", nome: "Alagoas" },
        { sigla: "AP", nome: "Amapá" },
        { sigla: "AM", nome: "Amazonas" },
        { sigla: "BA", nome: "Bahia" },
        { sigla: "CE", nome: "Ceará" },
        { sigla: "DF", nome: "Distrito Federal" },
        { sigla: "ES", nome: "Espírito Santo" },
        { sigla: "GO", nome: "Goiás" },
        { sigla: "MA", nome: "Maranhão" },
        { sigla: "MT", nome: "Mato Grosso" },
        { sigla: "MS", nome: "Mato Grosso do Sul" },
        { sigla: "MG", nome: "Minas Gerais" },
        { sigla: "PA", nome: "Pará" },
        { sigla: "PB", nome: "Paraíba" },
        { sigla: "PR", nome: "Paraná" },
        { sigla: "PE", nome: "Pernambuco" },
        { sigla: "PI", nome: "Piauí" },
        { sigla: "RJ", nome: "Rio de Janeiro" },
        { sigla: "RN", nome: "Rio Grande do Norte" },
        { sigla: "RS", nome: "Rio Grande do Sul" },
        { sigla: "RO", nome: "Rondônia" },
        { sigla: "RR", nome: "Roraima" },
        { sigla: "SC", nome: "Santa Catarina" },
        { sigla: "SP", nome: "São Paulo" },
        { sigla: "SE", nome: "Sergipe" },
        { sigla: "TO", nome: "Tocantins" }
    ];
    const selectEstado = document.getElementById("entrada-11");

    estados.forEach(estado => {
        let option = document.createElement("option");
        option.value = estado.sigla;
        option.textContent = `${estado.nome} (${estado.sigla})`;
        selectEstado.appendChild(option);
    });
}
formatadorCep();
formatCasa();
carregarEstados();
//lógica e DOM do section trilhas 
let tituloTrilhas = document.getElementById("title-trilhas");
tituloTrilhas.textContent = "Trilhas de Aprendizagem";

// Seleciona a caixa de "Programação Front-end"
function trilhasCheck() {
    let trilhas = document.querySelectorAll('input[name="trilhas"]');


    trilhas.forEach(input => {
        input.addEventListener('change', () => {
            if (input.checked) {
                let trilhaSelecionada = input.closest('.icons').querySelector('span').textContent.trim();
                console.log(`Usuario clicou em : ${trilhaSelecionada}`);
            }    
        });
    });
}

trilhasCheck();

//logica para formatar numero de cpf e telefone 
function formatador() {
    let telefoneInput = document.getElementById('entrada-6');
    let cpfInput = document.getElementById('entrada-3');


    cpfInput.addEventListener("input", function (e) {
        let value = e.target.value;


        // Remove caracteres não numéricos
        value = value.replace(/\D/g, "");


        // Formata o CPF corretamente
        if (value.length <= 3) {
            value = value.replace(/(\d{3})(\d{0,3})/, "$1.$2");
        } else if (value.length <= 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
        } else if (value.length <= 9) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
        } else if (value.length === 11) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        }


        // Atualiza o campo
        e.target.value = value;
    });

    telefoneInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número

        if (value.length > 11) {
            value = value.slice(0, 11); // Limita a 11 caracteres (padrão Brasil: DDD + 9 dígitos)
        }

        // Aplica a formatação (XX) XXXXX-XXXX se tiver 11 dígitos
        if (value.length === 11) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        }

        e.target.value = value;
    });

}

formatador();


let security = document.getElementById("seguranca");
let inscricao = document.getElementById("inscricao")
let cancelar = document.getElementById("cancelar");
let message = document.getElementById("aceite-termos");

function segurancaClick() {
        security.addEventListener('change', () => {
        if (security.checked ) {
            console.log("Usuario aceitou os termos");   
            message.style.display = "none";
        }else{
            console.log("Usuario não aceitou os termos");
        }
    });

}


function processarInscricao() {

    inscricao.addEventListener('click', () => {
        if(security.checked){
            console.log("fazer inscrição  concluida");
            window.location.href = './teste.html'
        }else {
            console.log("Usuario ainda nao aceitou os termos")
            message.style.display = "inline";
        }    
    });
    cancelar.addEventListener('click', () => {

        console.log("inscriçao cancelada com sucesso");
        window.location.href = './index.html'
    });

}
processarInscricao();
segurancaClick()