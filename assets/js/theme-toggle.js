function initToggles() {
	const alterWrapper = (func) => document.querySelectorAll(".toggle").forEach(i => func(i));
	const setDataTheme = (theme) => document.body.setAttribute("data-theme", theme); 
	const addClickHandler = (selector, hdlr) => {
		document.querySelectorAll(selector).forEach(i => i.addEventListener("click", hdlr));
	};

	if (!window.matchMedia) {
		alterWrapper(i => i.remove());
		return;
	}
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		setDataTheme("dark");
		alterWrapper(i => i.classList.add("toggle--dark"));
	} else {
		setDataTheme("light");
	}

	addClickHandler(".toggle__switch", function() {
		setDataTheme(document.body.getAttribute("data-theme") === "dark" ? "light" : "dark");
		alterWrapper(i => i.classList.toggle("toggle--dark"));
	});
	addClickHandler(".toggle__caret", function() {
		this.parentElement.classList.toggle("toggle--down");
	});

	alterWrapper(i => i.style.visibility = "visible");
}
window.addEventListener("load", initToggles);
