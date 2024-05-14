// zmienne początkowe
var sigmaLvl = 0; // Jakim sigma male jest Kordian
var galeriaNumer = 1; //ktore zdjecie jest wyswietlane
var ruchWykonywany = false ;// sprawdzenie czy ruch jest wykonywany (poruszanie)
var thewegaIntro = 1; // rozmowa
var thewegoCzas = 120; //czas
var kebab5kilo = false; //sprawdzanie czy kebab byl jedzony

function OnLoad(){


}

function OnLoadT(){
    setInterval(Update, 100); 

}

function WyswietlGalerie(a) 
{
    if(a != 0){ //jesli nie jest równe 0 (0 jest funkcją zamknięcia galerii)
        galeriaNumer = a;
        document.getElementById("wybor").style.display = "flex";
        document.getElementById("kraj_zdj").src = `images/countries/Kraj_${galeriaNumer}.png`;;
        ZmianaNazwy();
    }
    else
    {
        document.getElementById("wybor").style.display = "none";
    }
 

}

function ZmianaZdjecia(a)
{
   var zdjecie = document.getElementById("kraj_zdj");
   var nazwaKraju = document.getElementById("nazwaKraju");

    switch(a)
    {
        case 1:
            {
                  if(galeriaNumer != 1)
                      {
                          galeriaNumer -= 1;
                      }
                  else
                      {
                          galeriaNumer = 10;
                      }
                  break;
            }
            case 2:
                {
                    if(galeriaNumer != 10)
                        {
                            galeriaNumer += 1;
                        }
                    else
                        {
                            galeriaNumer = 1;
                        }
                        break
                }
              
    }

    ZmianaNazwy();

   zdjecie.src = `images/countries/Kraj_${galeriaNumer}.png`;
}

function ZmianaNazwy()
{

    switch(galeriaNumer)
    {
        case 1: nazwaKraju.innerText = "Anglia"; break;
        case 2: nazwaKraju.innerText = "Włochy"; break;
        case 3: nazwaKraju.innerText = "Watykan"; break;
        case 4: nazwaKraju.innerText = "Francja"; break;
        case 5: nazwaKraju.innerText = "Szwajcaria"; break;
        case 6: nazwaKraju.innerText = "Turcia"; break;
        case 7: nazwaKraju.innerText = "Hiszpania"; break;
        case 8: nazwaKraju.innerText = "Austro-Węgry"; break;
        case 9: nazwaKraju.innerText = "Prusy"; break;
        case 10: nazwaKraju.innerText = "Księstwo Pszczyńskie"; break;
    }
}

// Poruszanie 

function PrawoPoruszanie() {
    var kordian = document.getElementById("kordian");
    var left = parseInt(kordian.style.left || 0);
    kordian.style.left = (left + 10) + "px"; 
}

function LewoPoruszanie() {
    var kordian = document.getElementById("kordian");
    var left = parseInt(kordian.style.left || 0);
    kordian.style.left = (left - 10) + "px";
}

function DecyzjaTurcja(){

    document.getElementById("decyzja").style.display = "flex";
    sigmaLvl++;
}

function TheWegankaIntro(a)
{
    if(thewegaIntro == 2 && a == 2)
        {
            sigmaLvl -= 5;
            window.location.href = "index.php";
        }
    else if(thewegaIntro == 2 && a == 1)
            {
                sigmaLvl++;
                 document.getElementById("postac").innerText = "Król Alibaba: Panie Kordian Zjedz kebaba 5 kilogram zanim the weganka go dopadnie...";
                 document.getElementById("buttonTW1").innerText = "Okej";
                 document.getElementById("buttonTW2").style.display = "none";
                 thewegaIntro++;
            }
     else if(thewegaIntro == 3)
        {
            document.getElementById("intro").style.display = "none";
            czas();
        }       
    else{
  document.getElementById("postac").innerText = "Król Alibaba: Ty jesteś wega, nam nie potrzeba! Kordianie Pomóż mi ją pokonać";
  document.getElementById("buttonTW1").innerText = "Jasne ze pomoge";
  document.getElementById("buttonTW2").innerText = "Nuh uh";
  thewegaIntro++;
}
 
}
// Strefa Clickera

var naClick = 1;
var kebaby = 0;

function click(){
    kebaby += naClick;
    document.getElementById("iloscKebaba").innerText = "🥙 = " + kebaby;
}

function kup(a){

    switch(a)
    {
        case 1:
            {
                if(kebaby > 10)
                    {
                        naClick += 1;
                        document.getElementById("iloscKebaba").innerText = "🥙 = " + kebaby;
                    }
            }
    }
}

function czas(){
 var div = document.getElementById("TWczas");
 
 if(thewegoCzas > 0 && kebab5kilo == false)
    {
        thewegoCzas--;
        div.innerText = `${thewegoCzas} sek`
        setTimeout(czas(), 1000);

    }
  else if (thewegoCzas < 0 )
  {
     sigmaLvl--;
  }
}


function Update()
{
    document.addEventListener('keydown', function(event) {
        if (!ruchWykonywany) { 
            ruchWykonywany = true; 
            if (event.key == 'd') {
                PrawoPoruszanie();
            } 
            else if (event.key == 'a') {
                LewoPoruszanie();
            }
            setTimeout(function() {
                ruchWykonywany = false; 
            }, 1); 
        }
    });

    document.getElementById('klienci').addEventListener('animationend', function() {
        document.getElementById('klienci').style.display = "none";
        DecyzjaTurcja();
    });
}