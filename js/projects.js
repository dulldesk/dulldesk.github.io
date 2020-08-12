$(document).ready(() => {
	addProjects();
});

async function addProjects() {
 	const cntr = $('#node-cntr');

	const icons = {
		"GitHub" : "https://raw.githubusercontent.com/primer/octicons/e65f8b2876b23a1157d97a0df7598c649f214149/icons/mark-github.svg",
		"Gist" : "https://raw.githubusercontent.com/primer/octicons/e65f8b2876b23a1157d97a0df7598c649f214149/icons/logo-gist.svg"
	}

	const bullet = '•';
	const shortLink = link => link.substring(link.indexOf("//")+2).replace(/\/+$/,'');

	const work = await fetch('/js/projects-list.json').then(async(response) => await response.json());

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
		if (node.external !== undefined) {
			node.external.sort((a,b) => a.type.localeCompare(b.type));
			for (let footelm of node.external) {
				let type = footelm.type.toLowerCase();
				if (type == "github" || type == "gist") {
					ft.append(footicon(footelm.type,footelm.src,icons[footelm.type]));
				}
				else if (type == "link") {
					let a = $('<a></a>');
					let img = $('<span></span>');

					img.text("< />");
					img.attr('title',`Go to ${shortLink(footelm.src)}`);
					img.addClass('ignore');
					// img.attr('alt','link');
					a.attr('href',footelm.src);

					a.addClass('no-select');
					a.addClass('ignore');
					img.addClass('card-link-icon');
					a.attr('target','_blank');
					a.append(img);
					
					ft.append(a);
				}
			}
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
}
