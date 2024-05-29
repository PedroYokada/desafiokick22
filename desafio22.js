const prompt = require("prompt-sync")({ sigint: true });

const Aluno = prompt("Qual é o seu nome? ");

let pontosProva = 0;
let ProvaGeociencias = true;

while (ProvaGeociencias) {
  let prova = prompt(
    "Qual tema você deseja jogar?  1 - Geologia  2 - Química 3 - Física 4 - Mineralogia  0 - Sair "
  );

  prova = parseInt(prova);

  switch (prova) {
    case 1:
      pontosProva += Geologia();
      break;

    case 2:
      pontosProva += Quimica();
      break;

    case 3:
      pontosProva += Fisica();
      break;

    case 4:
      pontosProva += Mineralogia();
      break;

    case 0:
      console.log("Você saiu da prova.");
      ProvaGeociencias = false;
      break;

    default:
      console.log("Digite uma opção válida.");
      break;
  }
}

console.log(`Obrigado, ${Aluno}! Sua pontuação na prova foi: ${pontosProva}`);

function Geologia() {
  let pontosProva = 0;
  let questao;

  questao = prompt(
    "Tectônica de placas é uma teoria da geologia que descreve os movimentos de grande escala que ocorrem na litosfera terrestre. A afirmação é verdadeira ou falsa? "
  );
  if (questao.toLowerCase() === "verdadeira") {
    console.log("Parabéns!");
    pontosProva++;
  } else {
    console.log("Resposta errada.");
  }

  questao = prompt(
    "O risco geológico são fenômenos e desequilíbrios da natureza e produzidos por fatores de origem externa que atuam independentemente da ação humana. A afirmação é verdadeira ou falsa? "
  );
  if (questao.toLowerCase() === "verdadeira") {
    console.log("Parabéns!");
    pontosProva++;
  } else {
    console.log("Resposta incorreta.");
  }

  questao = prompt("Pedras energizadas é um termo aceito na geologia? ");
  if (questao.toLowerCase() === "falsa") {
    console.log("Parabéns!");
    pontosProva++;
  } else {
    console.log(
      "Resposta incorreta. Na geologia, é a ciência que estuda a composição, estrutura, propriedades e processos que formam a Terra."
    );
  }

  return pontosProva;
}

function Quimica() {
  let pontosProva = 0;
  let questao;

  questao = prompt(
    "Um sal é um composto que em água se dissocia num cátion diferente de H⁺ e um ânion diferente de OH⁻. A afirmação é verdadeira ou falsa? "
  );
  if (questao.toLowerCase() === "verdadeira") {
    console.log("Parabéns!");
    pontosProva++;
  } else {
    console.log("Resposta incorreta.");
  }

  questao = prompt(
    "Denomina-se elemento químico um conjunto de átomos que têm o mesmo número de prótons em seu núcleo atômico. A afirmação é verdadeira ou falsa? "
  );
  if (questao.toLowerCase() === "verdadeira") {
    console.log("Parabéns!");
    pontosProva++;
  } else {
    console.log("Resposta incorreta.");
  }

  questao = prompt(
    "Nuvem eletrônica é o par de elétrons formado por uma ligação entre dois átomos ou entre elétrons da camada de valência. A afirmação é verdadeira ou falsa? "
  );
  if (questao.toLowerCase() === "falsa") {
    console.log("Parabéns!");
    pontosProva++;
  } else {
    console.log("Resposta incorreta.");
  }

  return pontosProva;
}

function Fisica() {
  let pontosProva = 0;
  let questao;

  questao = prompt(
    "A segunda lei de Newton determina que a força resultante em um corpo é resultado do produto entre sua massa e sua aceleração (F = M*A). A afirmação é verdadeira ou falsa? "
  );
  if (questao.toLowerCase() === "verdadeira") {
    console.log("Parabéns!");
    pontosProva++;
  } else {
    console.log("Resposta incorreta.");
  }

  questao = prompt(
    "A Relatividade Geral leva em conta os aspectos fundamentais da Relatividade Restrita, mas também trata do efeito dos campos gravitacionais sobre o espaço e o tempo. A afirmação é verdadeira ou falsa? "
  );
  if (questao.toLowerCase() === "verdadeira") {
    console.log("Parabéns!");
    pontosProva++;
  } else {
    console.log("Resposta incorreta.");
  }

  questao = prompt(
    "As ondas P (ou primárias) e S (ou secundárias) Elas propagam-se no interior da Terra, desse modo, essas são os primeiros tremores sentidos durante um terremoto. A afirmação é verdadeira ou falsa? "
  );
  if (questao.toLowerCase() === "verdadeira") {
    console.log("Parabéns!");
    pontosProva++;
  } else {
    console.log("Resposta incorreta.");
  }

  return pontosProva;
}

function Mineralogia() {
  let pontosProva = 0;
  let questao;

  questao = prompt(
    "A estrutura do diamante é constituída de átomos de carbono puro. A afirmação é verdadeira ou falsa? "
  );
  if (questao.toLowerCase() === "verdadeira") {
    console.log("Parabéns!");
    pontosProva++;
  } else {
    console.log("Resposta incorreta.");
  }

  questao = prompt(
    "Os silicatos constituem o maior e mais importante grupo de minerais presentes nas rochas. A afirmação é verdadeira ou falsa? "
  );
  if (questao.toLowerCase() === "verdadeira") {
    console.log("Parabéns!");
    pontosProva++;
  } else {
    console.log("Resposta incorreta.");
  }

  questao = prompt("Ouro é um bom condutor de eletricidade? ");
  if (questao.toLowerCase() === "verdadeira") {
    console.log("Parabéns!");
    pontosProva++;
  } else {
    console.log(
      "Resposta incorreta. O ouro é um excelente condutor de eletricidade."
    );
  }

  return pontosProva;
}
