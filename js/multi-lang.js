let btns = document.getElementById("select-lang");

var seen = new Set();
var all = new Set();
// var seenall = new Set();

// change the colours

for (let btn of btns.children) {
	if (btn.id != 'all') all.add(btn.id);

	btn.addEventListener("click", function() {
		if (btn.id == 'all'){
			if (seen.has('all')) {
				all.forEach(seen.add,seen);
				btn.style.backgroundColor = "#f0fff5";
				seen.delete('all');
			} else {
				seen.clear();
				seen.add('all');
				btn.style.backgroundColor = "rgb(197, 255, 197)";
			}

			for (let btn of btns.children) {
				if (btn.id != 'all') btn.click();
			}
		} else if (seen.has(btn.id)) {
			console.log("remove "+btn.id);
			seen.delete(btn.id);
			for (let i of document.getElementsByClassName(btn.id)) {
				change(i,'none');
			}
			btn.style.backgroundColor = "#f0fff5";
		} else {
			console.log("add "+btn.id);
			seen.add(btn.id);
			for (let i of document.getElementsByClassName(btn.id)) {
				i.style.display = 'block';
			}
			btn.style.backgroundColor = "rgb(197, 255, 197)";
		}

		if (seen.size == all.size && !seen.has('all')) {
			seen.add('all');
			document.getElementById('all').style.backgroundColor = "rgb(197, 255, 197)";
		} else if (seen.size != all.size+1 && seen.has('all')) {
			if (seen.has('all')) seen.delete('all');
			document.getElementById('all').style.backgroundColor = "#f0fff5";

		}
	});

	let img = document.createElement("img");
	switch (btn.id) {
		case 'java':
			img.src = "https://www.stickpng.com/assets/images/58480979cef1014c0b5e4901.png";
			break;
		case 'cpp':
			img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png";
			break;
		case 'py':
			img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png";
			break;
		case 'js':
			img.src = 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg';
			break;
		case 'posh':
			img.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png';
			break;
		case 'proc':
			img.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Processing_3_logo.png';
			break;
		case 'all': 
			
			break;
	}
	btn.innerHTML = "&nbsp&nbsp" + btn.innerHTML;
	btn.insertBefore(img, btn.childNodes[0]);
}

function change(i,disp) {
	for (let c of i.classList) {
		if (seen.has(c)) return;
	}
	i.style.display = disp;
}