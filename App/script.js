var activateChoice = function(name){
$(document).ready(function(){
    //document.getElementById('becken-btn').style.backgroundColor = 'green';
    if(document.getElementById(name).style.backgroundColor != 'green'){
    document.getElementById(name).style.backgroundColor = 'green';
    } else {
    document.getElementById(name).style.backgroundColor = 'grey';
  }
});
}


var chooseInstruments = function(){
$(document).ready(function(){
  // aufräumen
    //$('#choice-table').empty();
   // $('#choice-table').css("visibility", "hidden");
  // neue Tabelle mit Auswahl erstellen
    createTable();
});
}


// vh = Viewport height muss in Relation zu der Anzahl der gewählten Instrumente gesetzt werden (zusammen ~ 95 oder so)

var createTable = function(){

  $(document).ready(function(){

    //$("#weiter").empty();
    $("#weiter").css("visibility", "hidden"); 
  //$("#tom2-td").css("visibility", "visible");
  if(document.getElementById('tom2-btn').style.backgroundColor == 'green'){
  $("#tom2-btn").css("visibility", "visible"); 
} else {
  $("#tom2-btn").css("visibility", "hidden"); 
  //$("#tom2-td").empty();
}
  if(document.getElementById('becken-btn').style.backgroundColor == 'green'){
  $("#becken-btn").css("visibility", "visible"); 
} else {
  $("#becken-btn").css("visibility", "hidden"); 
  //$("#becken-td").empty();
}
  if(document.getElementById('tom1-btn').style.backgroundColor == 'green'){
  $("#tom1-btn").css("visibility", "visible"); 
} else {
  $("#tom1-btn").css("visibility", "hidden"); 
  //$("#tom1-td").empty();
}
  if(document.getElementById('kick-btn').style.backgroundColor == 'green'){
  $("#kick-btn").css("visibility", "visible"); 
} else {
  $("#kick-btn").css("visibility", "hidden"); 
  //$("#kick-td").empty();
}
  if(document.getElementById('snare-btn').style.backgroundColor == 'green'){
  $("#snare-btn").css("visibility", "visible"); 
} else {
  $("#snare-btn").css("visibility", "hidden"); 
  //$("#snare-td").empty();
}
  if(document.getElementById('hihat-btn').style.backgroundColor == 'green'){
  $("#hihat-btn").css("visibility", "visible"); 
} else {
  $("#hihat-btn").css("visibility", "hidden"); 
  //$("#hihat-td").empty();
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

$(document).ready(function(){
  $('#weiter-btn').click(function(){
    chooseInstruments();
    });
});