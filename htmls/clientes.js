var dataRef = new Firebase('https://oficina-c6548-default-rtdb.firebaseio.com/');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'clientes') {

            var _itemsKey = Object.entries(valor);
    
            count++;
    
    
            for (const [key2, value2] of _itemsKey) {
            count++
    
                $("#tbclientes tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +
    
                        <td>${value2.cpf}</td> +
                        
                        <td>${value2.email}</td> +
                        
                        <td>${value2.veiculo}</td> +
                        
                        <td>${value2.endereco}</td> +
                        
                        <td>${value2.telefone}</td> +
                        
                        
    
                    </tr>`
    
                );
    
            }
        }


    }

});
