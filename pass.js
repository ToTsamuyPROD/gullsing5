function pass() {
    var textarea = document.getElementById('Text');
    var vari = textarea.value;
     console.log(vari);
     textarea.oninput = function() {
      vari = this.value;
     console.log(vari);
    }
}
