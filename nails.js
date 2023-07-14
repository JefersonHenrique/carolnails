// Inicialize o Firebase
var firebaseConfig = {
  apiKey: "sua-chave-de-api",
  authDomain: "seu-projeto.firebaseapp.com",
  databaseURL: "https://seu-projeto.firebaseio.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "seu-id-de-messaging",
  appId: "seu-app-id",
};
firebase.initializeApp(firebaseConfig);

// Obtenha uma referência para o banco de dados
var database = firebase.database();

// Salve os dados do agendamento
function salvarAgendamento(nome, telefone, servico, horario) {
  var agendamentoRef = database.ref("agendamentos");
  var novoAgendamentoRef = agendamentoRef.push();
  novoAgendamentoRef.set({
    nome: nome,
    telefone: telefone,
    servico: servico,
    horario: horario,
  });
}

// Exemplo de uso
salvarAgendamento(
  "Fulano",
  "123456789",
  "Colocação de Unha",
  "2023-07-15 14:00"
);
