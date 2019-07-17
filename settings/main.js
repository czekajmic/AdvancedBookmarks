<!-- JavaScript -->
<script type="text/javascript">
  /*****  ZMIANA TYTUŁU STRONY *****/
  //zapamiętaj oryginalny tytuł strony
  var pagetitle = document.title;
  //nasłuchuj czy jest focus na okno
  window.addEventListener('focus', oknoAktywne);
  window.addEventListener('blur', oknoNieaktywne);
  
  //funkcje dot. focusu na oknie
  function oknoAktywne()
  {
    document.title = pagetitle;
  }
  function oknoNieaktywne()
  {
    var tmp = Math.floor(Math.random()*3+1);
    switch(tmp)
    {
      case 1:
        document.title = "A gdzie mi tu spierdalasz";
        break;
      case 2:
        document.title = "Proszę się tu przynieść z powrotem";
        break;
      case 3:
        document.title = "A krzyżyk na drogę";
        break;
    }
  }
  /*****   *****/
</script>
