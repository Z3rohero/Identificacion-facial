 esta dar ppermisso con naviagator media

  pero antes debemos crear un tag <video></video>
   navigator.getUserMedia.

constraints: este objeto toma dos parámetros booleanos: video y audio, como podrás imaginar debemos especificar al menos uno de ellos para obtener el flujo de datos al que queremos acceder; casos posibles:


{ video: true, audio: true }: Habilitamos ambas opciones; por lo tanto; el flujo de datos nos proporcionará video y audio.
