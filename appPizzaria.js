document.addEventListener("DOMContentLoaded", function(){

    function montarPizza(){

        let custo = 0;
        let extra = "";
        let opcionais = "";
        let descricao = "";

        // sabor selecionado
        let saborSelecionado = document.querySelector('input[name="sabor"]:checked');
        let sabor = saborSelecionado ? saborSelecionado.value : "";
        
        // obtendo tamanho selecionado 
        let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked')
        let tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : "";

        // Calculo em relação Sabor / Tamanho:
        if(tamanho === "Brotinho"){
            if(sabor === "A Moda"){
                custo += 18.75;
            }else if(sabor === "Calabresa com Catupiry"){
                custo += 21.00;
            }else if(sabor === "Frango com Catupiry"){
                custo += 22.50;
            }else if(sabor === "Atum com Queijo"){
                custo += 24.00;
            }else if(sabor === "Quatro Queijos"){
                custo += 26.25;
            }
        }else if(tamanho === "Padrao"){
            if(sabor === "A Moda"){
                custo += 25.00;
            }else if(sabor === "Calabresa com Catupiry"){
                custo += 28.00;
            }else if(sabor === "Frango com Catupiry"){
                custo += 30.00;
            }else if(sabor === "Atum com Queijo"){
                custo += 32.00;
            }else if(sabor === "Quatro Queijos"){
                custo += 35.00;
            }
        }else if(tamanho === "Grande"){
            if(sabor === "A Moda"){
                custo += 31.25;
            }else if(sabor === "Calabresa com Catupiry"){
                custo += 35.00;
            }else if(sabor === "Frango com Catupiry"){
                custo += 37.50;
            }else if(sabor === "Atum com Queijo"){
                custo += 40.00;
            }else if(sabor === "Quatro Queijos"){
                custo += 43.75;
            }
        }

        // Borda selecionada
        let bordaSelecionada = document.querySelector('input[name="borda"]:checked')
        let borda = bordaSelecionada ? bordaSelecionada.value : 'Tamanho não selecionado';

        if(borda === "Sem Borda"){
            custo += 0.00;
        }else if(borda === "Tradicional"){
            custo += 0.00;
        }else if(borda === "Recheada Catupiry"){
            custo += 2.00;
        }else if(borda === "Recheada Cheddar"){
            custo += 3.00;
        }

        //Ingredientes Extras:
        let queijoExtraCheckbox = document.querySelector('input[name="extra-queijo"]:checked');
        if(queijoExtraCheckbox){
            custo += 2.00;
            extra += "<br>   - Queijo"
        }

        let cheddarExtraCheckbox = document.querySelector('input[name="extra-cheddar"]:checked');
        if(cheddarExtraCheckbox){
            custo += 5.00;
            extra += "<br>   - Cheddar"
        }
        
        let baconExtraCheckbox = document.querySelector('input[name="extra-bacon"]:checked')
        if(baconExtraCheckbox){
            custo += 3.00;
            extra += "<br>   - Bacon"
        }
        
        let pepperoniExtraCheckbox = document.querySelector('input[name="extra-pepperoni"]:checked')
        if(pepperoniExtraCheckbox){
            custo += 4.00;
            extra += "<br>   -  Pepperoni"
        }
        
        //Opcionais
        let oreganoOpcionalCheckbox = document.querySelector('input[name="opcionais-oregano"]:checked')
        if(oreganoOpcionalCheckbox){
            opcionais += "<br>   - Oregano"
        }
       
        let azeitonaOpcionalCheckbox = document.querySelector('input[name="opcionais-azeitona"]:checked')
        if(azeitonaOpcionalCheckbox){
            opcionais += "<br>   - Azeitona"
        }
        
        let azeiteOpcionalCheckbox = document.querySelector('input[name="opcionais-azeite"]:checked')
        if(azeiteOpcionalCheckbox){
            opcionais += "<br>   - Azeite"
        }
        
        let pimentaOpcionalCheckbox = document.querySelector('input[name="opcionais-pimenta"]:checked')
        if(pimentaOpcionalCheckbox){
            opcionais += "<br>   - Pimenta"
        }

        // Monta todo o pedido numa variavel:
        descricao += "   - " + sabor + "<br>   - " + tamanho + "<br>   - " + borda + extra + opcionais;

        // FOI COMENTADO - NÂO VAI MAIS RETORNAR PRO SITE CARDAPIO.HTML
            //output dos valores com as classes Total pedido e Descrição Pedido
            //let totalPedidoElement = document.getElementById("total-pedido");
            //totalPedidoElement.textContent = "R$:" + custo.toFixed(2);
            //let descricaoPedidoElement = document.getElementById("descricao-pedido");
            //descricaoPedidoElement.innerHTML =  descricao;

        // Envia dados do pedido para o pedido.html em JSON:
        const pedidoJSON = {
            "descricao": descricao,
            "total":custo.toFixed(2)
        }

        const pedidoString = JSON.stringify(pedidoJSON);

        // Redireciona para pedido.html e envia os dados do pedido:
        window.location.href = `pedido?pedido=${pedidoString}`;
    }

    //Chama a função montarpizza ao clicar:
    const button = document.querySelector("button");
    button.addEventListener('click', montarPizza);
});

