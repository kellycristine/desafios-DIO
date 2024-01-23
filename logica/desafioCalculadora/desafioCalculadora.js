/* Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"  */

let vitorias =  12;
let derrotas = 6;

function calculaSaldo (vitorias, derrotas) {
    return vitorias - derrotas;
};

function calculaNivel(saldo){
    if(saldo < 10){
        return "Ferro";
    } else if(saldo >= 11 && saldo <= 20){
        return "Bronze";
    } else if(saldo >= 21 && saldo <= 50){
        return "Prata";
    } else if (saldo >= 81 && saldo <= 90){
        return "Diamante";
    } else if (saldo >=91 && saldo <= 100){
        return "Lendário";
    } else {
        return "Imortal";
    }
}
vitorias = parseInt(prompt("Quantas vitórias você tem?"));
derrotas = parseInt(prompt("Quantas derrotas você tem?"));

saldo = calculaSaldo(vitorias, derrotas);
nivel = calculaNivel(saldo);

alert(`O Herói tem de saldo de **${saldo}** está no nível de **${nivel}**`);