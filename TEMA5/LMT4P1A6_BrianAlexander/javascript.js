var quotes =  ["Mi nombre, Xokas, es Joaquín en un diminutivo extraño en gallego.",
"Siento decirte que no eres competitivo, no vas a llegar a nada en la vida.",
"Me gusta comer mal, que le den a comer sano.",
"Estoy completamento lleno de c*. Si viéseis mi pantalón está lleno de c*.",
"Eso es lo que eres, una basura. Siento decírtelo.",
"No soy nada del otro mundo así que no os volváis locas."]


function NewQuotes() {
    var numeroRandom = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quotes").innerHTML = quotes[numeroRandom];
}