<? 
$baza = new mysqli("localhost", "root", "", "kordian");

$imie = $_POST['imie'];
$skarga = $_POST['skarga'];

$sql = "INSERT INTO Skargi (imie, Tresc) VALUES ('$imie', '$skarga')";


$baza->query($sql);
