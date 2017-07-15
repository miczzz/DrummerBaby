var activeColor = 'khaki';

// Instrument aktivieren/deaktivieren
var activateChoice = function(name){
$(document).ready(function(){

    if(document.getElementById(name).style.backgroundColor != activeColor){
    document.getElementById(name).style.backgroundColor = activeColor;
    } else {
    document.getElementById(name).style.backgroundColor = 'darkgrey';
  }
});
}

var chooseInstruments = function(){
$(document).ready(function(){
  // neue Tabelle mit Auswahl erstellen
    createTable();
});
}


// vh = Viewport height muss in Relation zu der Anzahl der gewählten Instrumente gesetzt werden (zusammen ~ 95 oder so)

var createTable = function(){
  $(document).ready(function(){

	// Buttons zur Auswahl nach Auswahl deaktivieren
    $("#weiter").css("visibility", "hidden");
    $("#alle").css("visibility", "hidden");
    $("#keine").css("visibility", "hidden");
	
	// Buttons der nicht ausgewählten Instrumente verstecken
  if(document.getElementById('tom2-btn').style.backgroundColor == activeColor){
  $("#tom2-btn").css("visibility", "visible"); 
} else {
  $("#tom2-btn").css("visibility", "hidden"); 
}
  if(document.getElementById('becken-btn').style.backgroundColor == activeColor){
  $("#becken-btn").css("visibility", "visible"); 
} else {
  $("#becken-btn").css("visibility", "hidden"); 
}
  if(document.getElementById('tom1-btn').style.backgroundColor == activeColor){
  $("#tom1-btn").css("visibility", "visible"); 
} else {
  $("#tom1-btn").css("visibility", "hidden"); 
}
  if(document.getElementById('kick-btn').style.backgroundColor == activeColor){
  $("#kick-btn").css("visibility", "visible"); 
} else {
  $("#kick-btn").css("visibility", "hidden"); 
}
  if(document.getElementById('snare-btn').style.backgroundColor == activeColor){
  $("#snare-btn").css("visibility", "visible"); 
} else {
  $("#snare-btn").css("visibility", "hidden"); 
}
  if(document.getElementById('hihat-btn').style.backgroundColor == activeColor){
  $("#hihat-btn").css("visibility", "visible"); 
} else {
  $("#hihat-btn").css("visibility", "hidden"); 
}
});
}



$(document).ready(function(){
  $('#becken-btn').click(function(){
    activateChoice('becken-btn');
    });

    $('#tom1-btn').click(function(){
    activateChoice('tom1-btn');
    });

    $('#kick-btn').click(function(){
    activateChoice('kick-btn');
    });

    $('#snare-btn').click(function(){
    activateChoice('snare-btn');
    });

    $('#tom2-btn').click(function(){
    activateChoice('tom2-btn');
    });

    $('#hihat-btn').click(function(){
    activateChoice('hihat-btn');
    });

});




var activateAll = function(){
  $(document).ready(function(){
  document.getElementById('becken-btn').style.backgroundColor = activeColor;
  document.getElementById('tom1-btn').style.backgroundColor = activeColor;
  document.getElementById('tom2-btn').style.backgroundColor = activeColor;
  document.getElementById('kick-btn').style.backgroundColor = activeColor;
  document.getElementById('snare-btn').style.backgroundColor = activeColor;
  document.getElementById('hihat-btn').style.backgroundColor = activeColor;
});
}



var deactivateAll = function(){
  $(document).ready(function(){
  document.getElementById('becken-btn').style.backgroundColor = 'darkgrey';
  document.getElementById('tom1-btn').style.backgroundColor = 'darkgrey';
  document.getElementById('tom2-btn').style.backgroundColor = 'darkgrey';
  document.getElementById('kick-btn').style.backgroundColor = 'darkgrey';
  document.getElementById('snare-btn').style.backgroundColor = 'darkgrey';
  document.getElementById('hihat-btn').style.backgroundColor = 'darkgrey';
});
}

$(document).ready(function(){
  $('#weiter-btn').click(function(){
    chooseInstruments();
    
    });
});

$(document).ready(function(){
  $('#alle-btn').click(function(){
    activateAll();
    });
});

$(document).ready(function(){
  $('#keine-btn').click(function(){
    deactivateAll();
    });
});



