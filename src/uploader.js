"use strict";

const uploadFile = file => {

  window.requestFileSystem(window.TEMPORARY, 1024 * 1024, function(fs) {
    fs.root.getFile(`${file.name}${uuidv4()}`, { create: true, exclusive: true }, function(fileEntry) {
      fileEntry.createWriter(function(fileWriter) {
        fileWriter.write(file);
        resolve(fileEntry);
      }, e => console.log(e));
    }, e => console.log(e));
  })

}


const uploader = (submitSelector, imagesListSelector) => {

  const submit = document.querySelector(submitSelector);
  const imagenlist = document.querySelector(imagesListSelector);
  //evento de envio
  submit.addEvenListener('change', e => {
    uploadFile(e.target.files[0]);
  })

}


export default uploader;