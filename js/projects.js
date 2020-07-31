const cntr = $('#node-cntr');

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