const deselcol = "var(--bkgd)"; // deselected button colour
const selcol = "rgb(225, 255, 225)"; // selected button colour


var seen = new Set();
var all = new Set();
// var seenall = new Set();

// change the colours
$(document).ready(() => {
	let btns = $('#select-lang');
	$('#select-lang').children('button').each((toss,dombtn) => {
		let btn = $(dombtn);
		let id = btn.attr('id');

		if (id != 'all') all.add(id);

		btn.click(() => {
			if (id == 'all'){
				if (seen.has('all')) {
					all.forEach(seen.add,seen);
					seen.delete('all');
					btn.css('background-color',deselcol);
				} else {
					seen.clear();
					seen.add('all');
					btn.css('background-color',selcol);
				}
				$('#select-lang').children('button:not(#all)').click();
			} else if (seen.has(id)) {
				console.log(`remove ${id}`);
				seen.delete(id);
				$(`.${id}`).each((toss,i) => {
					if (shouldHide(i)) $(i).hide();
				});
				btn.css('background-color',deselcol);

				if (seen.size != all.size+1 && seen.has('all')) {
					seen.delete('all');
					$('#all').css('background-color',deselcol);
				}
			} else {
				console.log(`add ${id}`);
				seen.add(id);
				$(`.${id}`).show(); 
				btn.css('background-color',selcol);

				if (seen.size == all.size && !seen.has('all')) {
					seen.add('all');
					$('#all').css('background-color',selcol);
				}
			}

		});

		let img = document.createElement("img");
		switch (id) {
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
		btn.html(`&nbsp&nbsp${btn.text()}`);
		btn.prepend(img);
	});

	// default language
	$('#java').click();


	$('#select-lang .label').click(() => {
		$('#select-lang button').toggle();
	});

	$('body').click((e) => {
	    if ($(e.target).closest('#select-lang').length === 0 && window.innerWidth <= 550) $('#select-lang button').hide();
	});

	$(window).resize(() => {
		if (window.innerWidth > 550) $('#select-lang button').show();
		else $('#select-lang button').hide();
	});
});

function shouldHide(i) {
	for (let c of i.classList) {
		if (seen.has(c)) return false;
	}
	return true;
}