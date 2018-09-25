
var popUp = "Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"

setTimeout(function (){
	alert(popUp);
		if (confirm("Cliquez sur Ok pour être redirigé vers xxxvidsxxx")){
			window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
		}
}, 10000);


function psychedelic(){
	document.body.style.backgroundColor = "magenta";

	var x = document.getElementsByTagName("P");
	var i;
	for (i = 0; i < x.length; i++) {
	x[i].style.color = "blue";
	x[i].style.fontFamily = "papyrus";
	}
	var n = document.getElementsByTagName("H1");
	var y;
	for (y = 0; y < n.length; y++) {
	n[y].style.color = "green";
	n[y].style.fontFamily = "Comic sans";
	}
	var a = document.getElementsByTagName("H2");
	var z;
	for (z = 0; z < a.length; z++) {
	a[z].style.color = "green";
	a[z].style.fontFamily = "Comic sans";
	}
	var b = document.getElementsByTagName("H3");
	var u;
	for (u = 0; u < b.length; u++) {
	b[u].style.color = "green";
	b[u].style.fontFamily = "Comic sans";
	}
}
