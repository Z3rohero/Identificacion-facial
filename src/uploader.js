"use strict";

const uploaderfile = file =>{
  
}

const uploader =(submitSelector,imagesListSelector)=>{

  const submit = document.querySelector(submitSelector);
  const imagenlist = document.querySelector(imagesListSelector);
  //evento de envio
  submit.addEvenListener('change',e =>{
     uploaderfile(e.target.files[0]);
  })
  
}


export default uploader;