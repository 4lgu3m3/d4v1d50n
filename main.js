function tocaSom(idElementoAudio){
  const elemento=document.querySelector(idElementoAudio).play();

 if (elemento === null){
  alert('elemento não encontrado')
}}
const listaDeTeclas = document.querySelectorAll('.tecla');
//Estrutura de repetição - Enquanto
 for( let contador = 0;  contador < listaDeTeclas.leigth; contador++){
   const tecla = listaDeTeclas[contador];
   const instrumento = tecla.classlist[1];
   const idAudio = `#som_${instrumento}`;
   
  console.log(instrumento);
  console.log(contador);
  console.log(idAudio);

   tecla.onclick = function(){
    tocaSom(idAudio);
   };
   tecla.onkeydown = function(evento){
     if (evento.code ==='Enter'||evento.code ==='Space'){
      tecla.classlist.add('ativa');
   }
};
   tecla.onkeyup = function(){
      tecla.classList.remove('ativa');
  };
}