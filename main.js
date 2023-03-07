//https://teachablemachine.withgoogle.com/models/SlHh3CwHe/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true, video: false})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SlHh3CwHe/model.json',{ probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

var Strogonoff = 0;
var Pizza = 0;
var Pastel = 0;
var resultado = "";
function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }else
    {
        console.log(results);
        resultado = results[0].label;
        document.getElementById("result_label").innerHTML = 'Som detectado de - ' + resultado;
        var img = document.getElementById('animal_image');
        console.log(resultado);
        if(resultado == 'Pastel') {
              img.src = 'pastel.gif';
              Pastel = Pastel+1;
          } else if (resultado == 'Pizza') {
              img.src= 'pizza.gif';
              Pizza = Pizza+1;
  
          } else if(resultado == 'Strogonoff') {
              img.src = 'strogonoff.gif';
              Strogonoff = Strogonoff+1;
  
          } else {
              img.src = 'ouvindo.gif';
              console.log("else");
          }
    }
}