var tom1busy = false;
var tom2busy = false;
var hihatbusy = false;
var beckenbusy = true;
var kickbusy = false;
var snarebusy = true;

var activeColor = 'lightgreen';

var activateChoice = function(name){
$(document).ready(function(){
    //document.getElementById('becken-btn').style.backgroundColor = activeColor;
    if(document.getElementById(name).style.backgroundColor != activeColor){
    document.getElementById(name).style.backgroundColor = activeColor;
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
    $("#alle").css("visibility", "hidden");
    $("#keine").css("visibility", "hidden");
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
  //$("#tom1-td").empty();
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

    checkAvailability();
});


// checken, ob die Instrumente bereits genutzt werden (Verfügbarkeiten müssen dann im Netzwerk gespeichert werden)
var checkAvailability = function(){
  $(document).ready(function(){
    if(tom1busy) {
    $('#tom1-btn').prop('disabled',true);
    $('#tom1-btn').text('busy');
    // to enable: $('#Button').prop('disabled', false);
    }
    if(tom2busy) {
    $('#tom2-btn').prop('disabled',true);
    $('#tom2-btn').text('busy');
    }
    if(hihatbusy) {
    $('#hihat-btn').prop('disabled',true);
    $('#hihat-btn').text('busy');
    }
    if(beckenbusy) {
    $('#becken-btn').prop('disabled',true);
    $('#becken-btn').text('busy');
    }
    if(kickbusy) {
    $('#kick-btn').prop('disabled',true);
    $('#kick-btn').text('busy');
    }
    if(snarebusy) {
    $('#snare-btn').prop('disabled',true);
    $('#snare-btn').text('busy');
    }
});
}

var activateAll = function(){
  $(document).ready(function(){
  if(!beckenbusy){
  document.getElementById('becken-btn').style.backgroundColor = activeColor;
  }
  if(!tom1busy){
  document.getElementById('tom1-btn').style.backgroundColor = activeColor;
  }
  if(!tom2busy){
  document.getElementById('tom2-btn').style.backgroundColor = activeColor;
  }
  if(!kickbusy){
  document.getElementById('kick-btn').style.backgroundColor = activeColor;
  }
  if(!snarebusy){
  document.getElementById('snare-btn').style.backgroundColor = activeColor;
  }
  if(!hihatbusy){
  document.getElementById('hihat-btn').style.backgroundColor = activeColor;
  }
});
}

var deactivateAll = function(){
  $(document).ready(function(){
  document.getElementById('becken-btn').style.backgroundColor = 'grey';
  document.getElementById('tom1-btn').style.backgroundColor = 'grey';
  document.getElementById('tom2-btn').style.backgroundColor = 'grey';
  document.getElementById('kick-btn').style.backgroundColor = 'grey';
  document.getElementById('snare-btn').style.backgroundColor = 'grey';
  document.getElementById('hihat-btn').style.backgroundColor = 'grey';
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