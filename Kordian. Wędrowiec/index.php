<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/x-icon" href="images/favicon.ico">
    <title>Kordian Wędrowiec</title>
</head>
<body onload="OnLoad()">
    <script src="js.js"></script>
    <nav style="display: flex; flex-direction: column;" >
           <button onclick="WyswietlGalerie(1)">Anglia</button>
           <button onclick="WyswietlGalerie(2)">Włochy</button>
           <button onclick="WyswietlGalerie(3)">Watykan</button>
           <button onclick="WyswietlGalerie(4)">Francja</button>
           <button onclick="WyswietlGalerie(5)">Szwajcaria</button>
           <button onclick="WyswietlGalerie(6)">Turcja</button>
           <button onclick="WyswietlGalerie(7)">Hiszpania</button>
           <button onclick="WyswietlGalerie(8)">Austro-Węgry</button>
           <button onclick="WyswietlGalerie(9)">Prusy</button>
           <button onclick="WyswietlGalerie(10)">Pszczyna</button>
    </nav>
    <main>
           <h1>Wyrusz w podróż po Europie</h1>
           <h1 style="font-size: 100px;">Kordian: Wędrowiec</h1>
    </main>

     <!-- Galeria JS wyświetlana sekcja po kliknięciu -->
    <section id="wybor" >

        <div class="podroz">
              <img src="images/wyjscie.png" class="wyjscie" onclick="WyswietlGalerie(0)">
              <h1 style="font-size: 40px; color: white;" id="nazwaKraju">Kraj</h1>
              <div id="strzalki-div">
                <img class="strzalki" onclick="ZmianaZdjecia(1)" src="images/lewo_strzalka.png">
                <img class="strzalki" onclick="ZmianaZdjecia(2)" src="images/prawo_strzalka.png">
              </div>
              <img id="kraj_zdj" src="images/countries/Kraj_1.png">
              <a href="turcja.html"><button id="podrow_butt">Wyrusz</button></a>
        </div>

    </section>
</body>
</html>