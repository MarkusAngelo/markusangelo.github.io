function folder(x) {
	var three = document.getElementById("folder23");
	var two = document.getElementById("folder22");
	var one = document.getElementById("folder21");
	var others = document.getElementById("others");

	switch (x) {
		case "23":
			three.style.display = "block";
			two.style.display = "none";
			one.style.display = "none";
			others.style.display = "none";
			break;
		case "22":
			three.style.display = "none";
			two.style.display = "block";
			one.style.display = "none";
			others.style.display = "none";
			break;
		case "21":
			three.style.display = "none";
			two.style.display = "none";
			one.style.display = "block";
			others.style.display = "none";
			break;
		case "others":
			three.style.display = "none";
			two.style.display = "none";
			one.style.display = "none";
			others.style.display = "block";
			break;
	}
}

function showGallery(i) {
	var ctf = document.getElementById("ctf-gallery");
	var arcrate = document.getElementById("arcrate-gallery");
	var pap = document.getElementById("pap-gallery");
	var resto = document.getElementById("resto-gallery");
	var tn = document.getElementById("tn-gallery");
	var botania = document.getElementById("botania-gallery");
	var cafe = document.getElementById("cafe-gallery");
	switch (i) {
		case "ctf":
			if (ctf.style.display == "block") {
				ctf.style.display = "none";
			} else {
				ctf.style.display = "block";
			}
			break;
		case "arcrate":
			if (arcrate.style.display == "block") {
				arcrate.style.display = "none";
			} else {
				arcrate.style.display = "block";
			}
			break;
		case "pap":
			if (pap.style.display == "block") {
				pap.style.display = "none";
			} else {
				pap.style.display = "block";
			}
			break;
		case "resto":
			if (resto.style.display == "block") {
				resto.style.display = "none";
			} else {
				resto.style.display = "block";
			}
			break;
		case "tn":
			if (tn.style.display == "block") {
				tn.style.display = "none";
			} else {
				tn.style.display = "block";
			}
			break;
		case "botania":
			if (botania.style.display == "block") {
				botania.style.display = "none";
			} else {
				botania.style.display = "block";
			}
			break;
		case "cafe":
			if (cafe.style.display == "block") {
				cafe.style.display = "none";
			} else {
				cafe.style.display = "block";
			}
			break;
	}
}
