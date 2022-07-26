import 'babel-polyfill';
import  uploader from './uploader.js';



const main =  async () =>{
    uploader('.input-submit','.images-list');
    const videoContainer = document.queryselector("#video"); 
    const  canvas = document.queryselector("#canvas"); 
    const context = canvas.getContext('2d');
   // para darle los permiso al navegador para utilizar
   // la camara se tiene que hacer asi 
   // funciones para dar pemisop
  /*
 
  
  await navigator.mediaDevices.getUserMedia({
  
  })
  */
  const video = await navigator.mediaDevices.getUserMedia({video:true,audio:true});
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