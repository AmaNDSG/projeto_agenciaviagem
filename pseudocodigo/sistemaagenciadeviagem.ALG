Algoritmo "Sistema da Agencia De Viagens"
// Disciplina   : [Linguagem e L?gica de Programa??o]
// Professor   : Artur Brandt e Gabriel Sales
// Descri??o   : Cadastra e consulta dados de clientes e destinos.
// Autor(a)    : Amanda Serrano Gon?alves
// Data atual  : 28/06/2022
Var
// Se??o de Declara??es das vari?veis
 
cliente: vetor[1..10, 1..5] de caractere //-----VETOR PARA ARMAZENAGEM/CONSULTA DE DADO
message: vetor[1..5] de caractere      //-----VETOR PARA IMPRESS?O

//-----VARIAVEIS PARA MATRIZ 'CLIENTE'-----
indexX: inteiro
indexY: inteiro
//-------------------
cpf: caractere      //-----VARIAVEL PARA PROCEDIMENTO
quantidade: inteiro //-----QUANTIDADE VARIAVEL DE NUMEROS DE CLIENTES

//-----PROCEDIMENTO PARA CONSULTAR DADOS ATRAVES DO CPF-----
procedimento queryCliente(cpfParam: caractere)
inicio  //-----INICIO DO PROCEDIMENTO
  para IndexX de 1 at? quantidade passo 1 fa?a //-----ATRAVESSA TODA MATRIZ
    se (cpfParam = cliente[IndexX, 4]) entao   //-----COMPARA TODOS OS DADOS
    //-----SE FOR VERDADEIRO ENTAO IMPRIME OS DADOS
      para IndexY de 1 at? 5 passo 1 fa?a
        escreval(message[IndexY], cliente[IndexX, IndexY])
      fimpara
    fimse
  fimpara
fimprocedimento


//-----C?PIA DO PRIMEIRO PROCEDIMENTO-----

destino: vetor[1..10, 1..5] de caractere
messages: vetor[1..4] de caractere
indexZ: inteiro
indexW: inteiro
cep: caractere
quantidadex: inteiro

procedimento queryDestino(cepParam: caractere)
inicio
  para IndexZ de 1 at? quantidadex passo 1 fa?a
    se (cepParam = destino[IndexZ, 4]) entao
      para IndexW de 1 at? 4 passo 1 fa?a
        escreval(messages[IndexW], destino[IndexZ, IndexW])
      fimpara
    fimse
  fimpara
fimprocedimento

//-----C?DIGO DO MENU-----
opcao: inteiro

Inicio
// Se??o de Comandos, procedimento, fun??es, operadores, etc...
//-----MENU-----
enquanto verdadeiro fa?a   //----MENU EM REPETICAO ENQUANTO ACESSADO
   escreval("MENU:")
   escreval
   escreval("1.Cadastrar Clientes")
   escreval("2.Consultar Clientes")
   escreval("3.Consultar lista de Clientes")
   escreval("4.Cadastrar Destinos")
   escreval("5.Consultar Destinos")
   escreval("6.Consultar lista de Clientes")
   escreval
   escreval("---Aperte ESC para sair.---")
   leia(opcao)
  limpatela

//-----C?DIGO PARA IMPRESS?O-----
message[1] <- "Nome: "
message[2] <- "Sobrenome: "
message[3] <- "Nacionalidade: "
message[4] <- "CEP e n?: "
message[5] <- "CPF: "
//-----------------------
  escolha opcao        //----OPCAO DO MENU ESCOLHIDA
  caso 1
  escreval("Quantidade de Clientes:")
  leia(quantidade)
escreval("Digite os dados: ")
//-----IMPRIME AS PERGUNTAS AT? A QUANTIDADE DE CLIENTES COLOCADA
para IndexX de 1 at? quantidade fa?a
 para IndexY de 1 at? 5 passo 1 fa?a
   escreva (message[IndexY])
   leia (cliente[IndexX, IndexY])
  fimpara
escreval
  fimpara
fimescolha

  escolha opcao
  caso 3
  escreval("Lista de clientes:")
//-----IMPRIME AS MENSAGENS + AS INFORMA??ES COLOCADAS
para IndexX de 1 at? quantidade fa?a
  para IndexY de 1 at? 5 passo 1 fa?a
   escreva (message[IndexY])
    escreval(cliente[IndexX, IndexY])
   escreval
  fimpara
  escreval
fimpara
fimescolha

  escolha opcao
  caso 2
escreval("Consulta por clientes")
escreval("Informe o CPF para buscar o cliente")
escreval
leia(cpf)
escreval
queryCliente(cpf) //-----ATIVA PROCEDIMENTO
escreval
fimescolha


//-----C?PIA DO PRIMEIRO C?DIGO-----

messages[1] <- "Pa?s: "
messages[2] <- "Estado: "
messages[3] <- "Cidade: "
messages[4] <- "CEP: "

  escolha opcao
  caso 4
  escreval("Quantidade de destinos de 1 at? 10:")
  leia(quantidadex)
escreval("Digite as informa??es do destino: ")
para IndexZ de 1 at? quantidadex fa?a
 para IndexW de 1 at? 4 passo 1 fa?a
   escreva(messages[IndexW])
   leia (destino[IndexZ, IndexW])
  fimpara
escreval
 fimpara
fimescolha

//-----C?PIA DO SEGUNDO C?DIGO-----
  escolha opcao
  caso 6
  escreval("Lista de destinos:")
para IndexZ de 1 at? quantidadex fa?a
  para IndexW de 1 at? 4 passo 1 fa?a
   escreva (messages[IndexW])
    escreval(destino[IndexZ, IndexW])
   escreval
  fimpara
  escreval
fimpara
fimescolha

//-----C?PIA DO TERCEIRO C?DIGO-----
  escolha opcao
  caso 5
escreval("Consulta por destinos")
escreval("Informe o CEP para buscar o destino: ")
escreval
leia(cep)
escreval
queryDestino(cep)
escreval
fimescolha

fimenquanto
Fimalgoritmo