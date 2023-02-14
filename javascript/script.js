function showAccolades(x) {
	if (x == "elem") {
		document.getElementById("elem").style.visibility = "visible";
		document.getElementById("hs").style.visibility = "hidden";
		document.getElementById("coll").style.visibility = "hidden";

		if (window.matchMedia('screen and (max-width: 850px)').matches) {
			document.getElementById("accoElem").style.width = "14rem";
			document.getElementById("accoHs").style.width = "9rem";
			document.getElementById("accoCol").style.width = "8rem";
		}
		else if (window.matchMedia('screen and (max-width: 600px)').matches) {
			document.getElementById("accoElem").style.width = "17rem";
			document.getElementById("accoHs").style.width = "12rem";
			document.getElementById("accoCol").style.width = "11rem";
		 }
		else {
			document.getElementById("accoElem").style.width = "27rem";
			document.getElementById("accoHs").style.width = "13rem";
			document.getElementById("accoCol").style.width = "12rem";
		}
	}
	else if (x == "hs") {
		document.getElementById("hs").style.visibility = "visible";
		document.getElementById("coll").style.visibility = "hidden";
		document.getElementById("elem").style.visibility = "hidden";
		if (window.matchMedia('screen and (max-width: 850px)').matches) {
			document.getElementById("accoHs").style.width = "14rem";
			document.getElementById("accoElem").style.width = "8rem";
			document.getElementById("accoCol").style.width = "8rem";
		}
		else if (window.matchMedia('screen and (max-width: 600px)').matches) {
			document.getElementById("accoHs").style.width = "17rem";
			document.getElementById("accoElem").style.width = "11rem";
			document.getElementById("accoCol").style.width = "11rem";
		 }
		else {
			document.getElementById("accoHs").style.width = "27rem";
			document.getElementById("accoElem").style.width = "12rem";
			document.getElementById("accoCol").style.width = "12rem";
		}
	}
	else if (x == "coll") {
		document.getElementById("coll").style.visibility = "visible";
		document.getElementById("hs").style.visibility = "hidden";
		document.getElementById("elem").style.visibility = "hidden";
		if (window.matchMedia('screen and (max-width: 850px)').matches) {
			document.getElementById("accoCol").style.width = "14rem";
			document.getElementById("accoHs").style.width = "9rem";
			document.getElementById("accoElem").style.width = "8rem";
		}
		else if (window.matchMedia('screen and (max-width: 600px)').matches) {
			document.getElementById("accoCol").style.width = "17rem";
			document.getElementById("accoHs").style.width = "11rem";
			document.getElementById("accoElem").style.width = "10rem";
		 }
		else {
			document.getElementById("accoCol").style.width = "27rem";
			document.getElementById("accoHs").style.width = "13rem";
			document.getElementById("accoElem").style.width = "12rem";
		}
	}
}

function showSkills(x) {
	var frontEnd = document.getElementById("frontEndBar");
	var backEnd = document.getElementById("backEndBar");
	var additional = document.getElementById("additionalBar");
	switch (x) {
		case "html":
			frontEnd.style.width = "76%";
			break;
		case "css":
			frontEnd.style.width = "70%";
			break;
		case "js":
			frontEnd.style.width = "72%";
			break;
		case "dart":
			frontEnd.style.width = "85%";
			break;
		case "java":
			backEnd.style.width = "83%";
			break;
		case "python":
			backEnd.style.width = "82%";
			break;
		case "php":
			backEnd.style.width = "72%";
			break;
		case "sql":
			backEnd.style.width = "75%";
			break;
		case "adapt":
			additional.style.width = "83%";
			break;
		case "create":
			additional.style.width = "80%";
			break;
		case "probsolv":
			additional.style.width = "78%";
			break;
		case "math":
			additional.style.width = "85%";
			break;
		case "data":
			additional.style.width = "81%";
			break;
		case "write":
			additional.style.width = "89%";
			break;
	}
}



function toggleNav() {
	var navbar = document.getElementById("navibar");
	var navbutton = document.getElementById("navbutton");
	var container = document.getElementById("container");	
      if (navbar.style.height == "8.5vh") {
		  navbar.style.visibility = "hidden";
		  navbar.style.height = "0";
		  container.style.marginTop = "0";
		  if (window.matchMedia('screen and (max-width: 800px)').matches) {
			  navbutton.style.marginTop = "-4%";
		  }
		  else {
			navbutton.style.marginTop = "-2%";
		  }
	  } else {
		  navbar.style.height = "8.5vh";
		  navbar.style.visibility = "visible";
		  container.style.marginTop = "3.5%";
		  navbar.style.zIndex = "11";
      }
}
