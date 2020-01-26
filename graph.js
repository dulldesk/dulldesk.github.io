// scope management
{
	let cntr = document.getElementById("graph-cntr");

	// fix broken images
	const work = {
		"snowman" : {
			"src" : "https://blob.myblueprint.ca/b9Ktko0TTQOgg5OSg2QM_melting%20snowman%20%282%29.jpg",
			"caption" : "melting snowman",
			"description" : "Quick sketch of a melting snowman"
		},
		"sax" : {
			"src" : "https://blob.myblueprint.ca/lwWjlXsRjuVoTdskdi4M_IMG_6847.jpg",
			"caption" : "saxophonist",
			"description" : "A saxophonist perched on a music note"
		},
		"water" : {
			"src" : "https://blob.myblueprint.ca/kEUnwUqVQL64SZeK2KP3_drink%20water-01.png",
			"caption" : "drink water",
			"description" : "A simple graphic"
		},
		"duckling" : {
			"src" : "https://blob.myblueprint.ca/DK6GqZUoTtOudzLB4mE8_duck_animals.jpg",
			"caption" : "duckling",
			"description" : "Vector illustration of a duckling"
		},
		"walrus" : {
			"src" : "https://blob.myblueprint.ca/cSz9GfUjSXyuVY3IyRq2_walrus_animals.jpg",
			"caption" : "walrus",
			"description" : "Vector illustration of a walrus"
		},
		"shark" : {
			"src" : "https://blob.myblueprint.ca/nz8jKBWsSDKmNVDk0rep_shark_animals.jpg",
			"caption" : "shark",
			"description" : "Vector illustration of a shark"
		},
		"rabbit" : {
			"src" : "https://blob.myblueprint.ca/J8wrofCWRPusxFE2fSqb_rabbit-01.jpg",
			"caption" : "rabbit",
			"description" : "Vector illustration of a rabbit"
		},
		"turtle" : {
			"src" : "https://blob.myblueprint.ca/BZs3fXuEQDmcPfewsVGD_turtle_animals.jpg",
			"caption" : "turtle",
			"description" : "Vector illustration of a turtle"
		},
		"river" : {
			"src" : "https://blob.myblueprint.ca/1rlL6einQ0W2uDCRlmpJ_river-01.png",
			"caption" : "river",
			"description" : "A simple vector river drawing"
		},
		"facebook" : {
			"src" : "https://blob.myblueprint.ca/hmdTFTBRqacVudb0FHNV_facebook%20firewall.png",
			"caption" : "facebook firewall",
			"description" : "A satirical graphic"
		},
		"heron" : {
			"src" : "https://pbs.twimg.com/media/CidPfxhUkAAOx6Q?format=jpg&name=medium",
			"caption" : "heron",
			"description" : "Taken at Toogood Pond in Ontario, Canada" // verify
		},
		"swan" : {
			"src" : "https://blob.myblueprint.ca/lnIwB4kaSI2WCn15aFZC_DSCF5232.JPG",
			"caption" : "swans",
			"description" : "Taken at High Park in Toronto"
		},
		"killbear" : {
			"src" : "https://pbs.twimg.com/media/CmKZWZnUYAE1_Q5?format=jpg&name=medium",
			"caption" : "nature",
			"description" : "Taken at Killbear Provincial Park in Ontario, Canada"
		},
		"ciutadella" : {
			"src" : "https://pbs.twimg.com/media/EKmS7r8WkAAEyC5?format=jpg&name=medium",
			"caption" : "flying duck",
			"description" : "Taken at Ciutadella Park in Barcelona"
		},
		"pompeii" : {
			"src" : "https://pbs.twimg.com/media/DIADQJDXYAET9-L?format=jpg&name=medium",
			"caption" : "trees",
			"description" : "Taken in Pompeii" 
		},
		"frog" : {
			"src" : "https://pbs.twimg.com/media/DGb1-SsV0AQJU7W?format=jpg&name=medium",
			"caption" : "frog",
			"description" : "Frog in a small pond"
		},
		"pigeon" : {
			"src" :  "https://pbs.twimg.com/media/DG1OflqXsAANHbX?format=jpg&name=medium",
			"caption" : "pigeon",
			"description" : "Italian pigeon"
		},
		"goose-seagull" : {
			"src" : "https://pbs.twimg.com/media/DTERxylX4AouOxY?format=jpg&name=medium",
			"caption" : "seagull and goose",
			"description" : "A Canada Goose and a seagull staring at it"
		},
		"squirrel-branch" : {
			"src" : "https://pbs.twimg.com/media/DcTeZxgWAAYMa0E?format=jpg&name=medium",
			"caption" : "squirrel",
			"description" : "A squirrel hiding behind a branch"
		}
	}

	for (let name in work) {
		let node = work[name];

		let div = document.createElement("div");
		div.setAttribute("class","node");

		let img = document.createElement("img");
		img.setAttribute("class","image");
		img.setAttribute("src",node.src);
		img.setAttribute("draggable","false");
		img.addEventListener('contextmenu', event => event.preventDefault());

		let cap = document.createElement("p");
		cap.innerHTML = node.caption;

		// let tag = document.createElement("span");
		// tag.setAttribute("class","tag");
		// tag.innerHTML=node.description;
		let divc = document.createElement("div");
		divc.setAttribute("class","caption");
/*
		divc.addEventListener("mouseover",function() {
			tag.style.display="block";
		});
		divc.addEventListener("mouseout",function() {
			tag.style.display="none";
		});
*/
/*

		let modb = document.createElement("div");
		modb.setAttribute("class","modal-back");

		let mod = document.createElement("div");
		mod.setAttribute("class","modal");

		let btn = document.createElement("span");
		btn.setAttribute("class","modal-btn");
		btn.innerHTML = "&times;";
		btn.addEventListener('click', function() {
			modb.style.display = "none";
		});

		mod.appendChild(btn);
		img.addEventListener("click",function () {
			modb.style.display = "block";
			mod.style.display="inline-block";
		});


		modb.appendChild(mod);
		document.body.appendChild(modb);
*/
		// shady solutions
		let spc = document.createElement("div");
		let toss = document.createElement("p");
		toss.innerHTML = ".";

		spc.setAttribute("class","caption-space");

		div.appendChild(img);
		divc.appendChild(cap);
		div.appendChild(divc);

		spc.appendChild(toss);
		div.appendChild(spc);

		// div.appendChi	ld(tag);
		cntr.appendChild(div);
	}
}

function createModal(name,node) {
	let mod = document.createElement("div");
	mod.setAttribute("class","modal");

	let btn = document.createElement("span");
	mod.setAttribute("class","modal-btn");
	btn.innerHTML = "&times;";
	btn.addEventListener('click', function() {
		mod.style.display = "none";
	});

	mod.appendChild(btn);

	return mod;
}