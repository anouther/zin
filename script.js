function check() {document.getElementById("offchatMenu").checked = true;}
function selesai() {document.getElementById("offchatMenu").checked = false;document.getElementById('foto').style.opacity = "1";document.getElementById('foto').style.visibility = "visible";happy();}
function happy() {if(a<finish.length){document.getElementById("textlv").innerHTML += finish.charAt(a);a++;setTimeout(happy,120);}if(a==finish.length){var e1 = document.getElementById('photo');e1.classList.add("degdeg");document.getElementById('contTom').style.opacity = "1";document.getElementById('contTom').style.visibility = "visible";}}
function scroll(){var objDiv = document.getElementById("data");objDiv.scrollTop = objDiv.scrollHeight;}

function jscare(){document.querySelector("body").style.animation = "anim 1s ease infinite";}
