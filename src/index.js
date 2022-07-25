import 'babel-polyfill';

const main =  async () =>{
    const videoContainer = document.queryselector("#video"); 
    const  canvas = document.queryselector("#canvas"); 
    const context = canvas.getContext('2d');
   // para darle los permiso al navegador para utilizar
   // la camara se tiene que hacer asi 
   // funciones para dar pemisop
  /*
  esta dar ppermisso convaigatr
  await navigator.mediaDevices.getUserMedia({
  
  })
  */
  const video = await navigator.mediaDevices.getUserMedia({video:true});
  //para ver el video de la camara que sea igual
  videoContainer.srcObject = video;
  //aca estoy dibujadno el perfil de la cara para reconocer 

  const  reDraw = async()=>{
    context.drawImage(videoContainer,0,0,640,480);
    requestAnimationFrame(reDraw);
  } 
  requestAnimationFrame(reDraw);
  
    
  
  
  
  
}

main();