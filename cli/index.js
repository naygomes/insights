var fs = require('fs');
var { parse } = require('csv-parse');
var XMLHttpRequest = require('xhr2');
var counter = 1;

function action(data) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
         }
    };
    xhttp.open("POST", "http://localhost:3333/card/create", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));
	console.log(`Dado ${counter} adicionado ao Banco com Sucesso!`);
	counter++;
}

var parser = parse({ columns: true }, function (err, records) {
	console.log("Iniciando processo...")
	records.forEach(element => {
		element['texto'] = element['text'];
		element['tags'] = element['tag'];
		delete element['text'];
		delete element['tag'];
		action(element);
	}); {
		
	}
	console.log("Processo finalizado. Aperte Ctrl+C para sair.")
});

fs.createReadStream(__dirname + '/cards.csv').pipe(parser);
