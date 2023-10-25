function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorA11('.tecla');


//Estrutura de repetição - Enquanto
 for( let contador = 0;  contador < listaDeTeclas.leigth; contador++){
   const tecla = listaDeTeclas[contador];
   const instrumento = tecla.classlist[1];
   const idAudio = `#som_${instrumento}`;
   console.log(idAudio);

   tecla.onclick = function(){
    tocaSom(idAudio);
   };
   tecla.onkeyup = function(){
     tecla.classlist.add(`ativa`);
   }
   tecla.onkeyup = function(){
    tecla.classlist.remove(`ativa`);
   }
      console.log(contador);
 }