const cntr = $('#node-cntr');

const work = {
	"timestamp" : {
		"name" : "Timestamp Editor",
		"caption" : "PowerShell script to edit file timestamps",
		"lang" : "PowerShell",
		"github" : "https://github.com/dulldesk/timestamp-editor"
	}, 
	"quick-notes" : {
		"name" : "Quick Notes",
		"caption" : "Browser extension to take short, quick notes",
		"lang" : "JavaScript, JQuery, HTML, CSS",
		"github" : "https://github.com/dulldesk/quick-notes"
	},
	"website" : {
		"name" : "Personal Website",
		"caption" : "My personal portfolio website",
		"lang" : "HTML, CSS, JavaScript, JQuery",
		"link" : "https://dulldesk.github.io",
		"github" : "https://github.com/dulldesk.github.io",
		"short" : "dulldesk.github.io"
	},
	"sched-del" : {
		"name" : "Scheduled File Deleter",
		"caption" : "PowerShell script to schedule file deletions",
		"lang" : "PowerShell",
		"github" : "https://github.com/dulldesk/sched-file-del"
	}, 
	"recycle" : {
		"name" : "Recycle Bin Size Script",
		"caption" : "A small script to check one's recycle bin size",
		"lang" : "PowerShell",
		"gist" : "https://gist.github.com/dulldesk/4529497dd9f10c8f68d7d4dd4cf9599a"
	}, 
	"covid-cashier" : {
		"name" : "COVID Cashier",
		"caption" : "A game to inform on safe restaurant cashiering workplace during a pandemic",
		"lang" : "Java",
		"github" : "https://github.com/dulldesk/covid-cashier"
	},
	"chords" : {
		"name" : "Chords",
		"caption" : "A small site with an online piano. Play, save, and share chords.",
		"lang" : "HTML, CSS, JavaScript, JQuery",
		"github" : "https://github.com/dulldesk/chords",
		"link" : "https://dulldesk.github.io/chords",
		"ongoing" : true
	},
	"calendar" : {
		"name" : "Calendar Phone Background Generator",
		"caption" : "A Processing application to generate a calendar background for a smartphone",
		"lang" : "Processing",
		"github" : "https://github.com/dulldesk/calendar",
		"ongoing" : true
	},
	"quicksort" : {
		"name" : "Quicksort Demo",
		"caption" : "A Processing to demonstrate the quicksort algorithm",
		"lang" : "Processing",
		"github" : "https://github.com/dulldesk/quicksort-demo"
	},
	"twitter" : {
		"name" : "TTC Twitter Bot",
		"caption" : "A Twitter bot to filter and private message subscribing users TTC service tweets relevant to their routes",
		"lang" : "JavaScript",
		"ongoing" : true
	},
	"collage" : {
		"name" : "Collage Generator",
		"caption" : "A collage generator site. Upload an image and a collage will be created. Inspired by an AP Computer Science Student Lab.",
		"lang" : "HTML, CSS, JavaScript",
		"ongoing" : true
	}
}

const icons = {
	"github" : "https://raw.githubusercontent.com/primer/octicons/e65f8b2876b23a1157d97a0df7598c649f214149/icons/mark-github.svg",
	"gist" : "https://raw.githubusercontent.com/primer/octicons/e65f8b2876b23a1157d97a0df7598c649f214149/icons/logo-gist.svg"
}

const bullet = '•';

for (let key in work) {
	let node = work[key];
	let card = $('<div></div>').addClass('card');

	let bd = $('<div></div>').addClass('card-body');
	let ft = $('<div></div>').addClass('card-footer');

	let title = $('<h2></h2>').text(`${node.name + (node.ongoing ? ' ⚗' : '')}`).addClass('card-title');
	let cap = $('<p></p>').text(node.caption).addClass('card-text');

	let langP = $('<p></p>').addClass('card-text');
	let lang = $('<small></small>').text(node.lang).addClass('text-muted');
	langP.append(lang);

	let hasLink = false;
	if (node.hasOwnProperty('github')) {
		ft.append(footicon('GitHub',node.github,icons.github));
	}
	if (node.hasOwnProperty('gist')) {
		ft.append(footicon('Gist',node.gist,icons.gist));
	}
	if (node.hasOwnProperty('link')) {
		let a = $('<a></a>');
		let img = $('<span></span>');

		img.text("< />");
		img.attr('title',`Go to ${node.short}`);
		img.addClass('ignore');
		// img.attr('alt','link');
		a.attr('href',node.link);

		a.addClass('no-select');
		a.addClass('ignore');
		img.addClass('card-link-icon');
		a.attr('target','_blank');
		a.append(img);
		
		ft.append(a);
	}

	// let img = $('<img></img>')
	// img.addClass('card-img-top');
	// card.append(img);
	bd.append(title,cap,lang);
	// ft.append(lang);

	card.append(bd);
	if (!node.ongoing) card.append(ft);
	// if (!node.ongoing) card.append($("<hr>"),ft);
	// card.append(bd,ft);

	cntr.append(card);
}

function footicon(name,link,imgsrc) {
	let a = $('<a></a>');
	let img = $('<img></img>');

	img.attr('src',imgsrc);
	img.attr('title',`Go to ${name}`);
	img.attr('alt',name);
	a.attr('href',link);

	img.attr('draggable','false');
	img.addClass('card-link-icon');
	a.addClass('ignore');
	a.addClass('no-select');
	a.attr('target','_blank');
	a.append(img);

	return a;
}