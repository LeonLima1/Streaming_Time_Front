let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/sugestao');
xhr.onreadystatechange = function() {
    if (xhr.readyState === 200) {
        let dados = JSON.parse(xhr.response);
        let conteudo = document.getElementById("conteudo");
        conteudo.innerHTML = "<h1>" + dados.texto + "</h1>"; // atualize o conteúdo do elemento com o valor obtido da API
    }
};
xhr.send();
