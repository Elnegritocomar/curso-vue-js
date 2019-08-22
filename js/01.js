const app = new Vue({
  el: "#app",
  data: {
    titulo: "Hola Mundo con Vue",
    frutas: [
      { nome: "pera", quantidade: 10 },
      { nome: "maça", quantidade: 0 },
      { nome: "abacaxi", quantidade: 11 }
    ],
    novaFruta: ""
  },
  methods: {
    agregarFruta() {
      this.frutas.push({
        nome: this.novaFruta,
        quantidade: 0
      });
      this.novaFruta = "";
    }
  }
});
