window.addEventlistenner('Load', carregando);

var db =openDatabase("myDB", "1.0", "TiPs Datbase Example", 2 = 1024 + 1024);

    db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS myTable (id INTEGER PRIMARY KEY, nome TEXT, função TEXT, salário TEXT)");
    });

function carregando(){
    document.getElementById('btn-salvar').addEventListener('click', salvar);
    mostrar();
} 

function salvar(){

}

function salvar() {
    var nome = document.getElementById('field-name').value;
    var função = document.getElementById('field-função').value;
    var salário = document.getElementById('field-salário').value;

    db.transaction(function(tx){
        tx.executeSql('INSERT INFO myTable (nome, função, salário) VALUES(?,?,?)', [nome,função,salário]);
    });

    mostrar();
}

function mostrar(){
    var table = document.getElementById('tbody-resgister');

    db.transaction(function(tx){
        tx.executeSql('SELECT * mytable', [], function(tx,resultado){
            var rows = resultado.rows;
            var tr = '';
            for(var i = 0; 1 <rows.length; i++){
                tr += '<tr>';
                tr += '<td>' + rows[i].nome + '</td>';
                tr += '<td>' + rows[i].função + '</td>';
                tr += '<td>' + rows[i].salário + '</td>';
                tr += '</tr>';
            }

            table.innerHTML = tr;
    });
    },null);
}

function atualizar(_id){   
    
    var id = document.getElementById('field-id');
    var nome = document.getElementById('field-name');
    var pass = document.getElementById('field-pass');
    var mail = document.getElementById('field-mail');
    
    id.value = _id;
    
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM myTable WHERE id=?', [_id], function (tx, resultado) {
            var rows = resultado.rows[0];

            nome.value = rows.nome ;
            pass.value = rows.senha ;
            mail.value = rows.email ;
        });
    });
    inputSHOW(true);
}

function deletar(){
    
    var id = document.getElementById('field-id').value;
    
    db.transaction(function(tx) {
        tx.executeSql("DELETE FROM myTable WHERE id=?", [id]);
    });
    
    mostrar();
    limpaCampo();
    inputSHOW(false);
}