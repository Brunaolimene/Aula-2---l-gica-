//8 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

       // - Se a media for igual ou maior que 7 - Aprovado
       // - Se a media for maior e igual a cinco e menor que 7 - Recuperação
       // - Se a media for menor que 5 - Reprovado

       let n1 = 6
       let n2 = 5
       let n3 = 6

       let media = (n1 + n2 + n3) / 3
    
       if(media >= 7){
           console.log("Aprovado")
       }
      else if  (media >=5 && media <7){ 
           console.log("Recuperação")
       }
       
       else if (media < 5){
           console.log("Reprovado")
        }
       
           
       

