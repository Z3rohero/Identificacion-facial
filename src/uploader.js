"use strict";


const uploader =(submitSelector,imagesListSelector)=>{

  const submit = document.querySelector(submitSelector);
  const imagenlist = document.querySelector(imagesListSelector);

  submit.addEvenListener('change',()=>{
    alert("funcionado");
  })
  
}


export default uploader;