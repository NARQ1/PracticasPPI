<html>
<head>
  <title>Asincrona</title>
  <style>
    #mensaje {
        color:#F00;
        font-size:16px;
    }
  </style>
  <script> src="js/jquery-3.3.3.min.js"</script>
  <script>
    function calcular() {
        var calificacion = $('#calificacion').val();
        if (calificacion && calificacion<0) {
            $('#mensaje').html('Campo lleno');
            setTimeout("$('#mensaje').html('');",5000);
        } else {
            $('#mensaje').html('Campo lleno');
            setTimeout("$('#mensaje').html('');",5000);  
         }
    }
  </script>
</head>
<body>
    <!-- Archivo: califica.php -->
     calificacion:<br>
     <input type="text" name="calificacion" id="calificacion">
     <br>
     <a href="javascript:void(0);" onclick="calcular();">
        Calcular
     </a><br>
</body>
</html>