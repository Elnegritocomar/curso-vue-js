const app = new Vue({
  el: "#app",
  data: {
    titulo: "Hola Mundo con Vue",
    frutas: [
      { nome: "pera", quantidade: 10 },
      { nome: "maça", quantidade: 0 },
      { nome: "abacaxi", quantidade: 11 },
      { nome: "banana", quantidade: 15 }
    ],
    novaFruta: "",
    total: 0
  },
  methods: {
    agregarFruta() {
      this.frutas.push({
        nome: this.novaFruta
      });
      this.novaFruta = "";
    }
  },
  computed: {
    somarFrutas() {
      this.total = 0;
      for (fruta of this.frutas) {
        this.total = this.total + fruta.quantidade;
      }
      return this.total;
    }
  }
});
