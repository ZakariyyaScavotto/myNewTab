const show = (classname) => {
	const elements = document.getElementsByClassName(classname)
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.display = "block"
	}
}
const hide = (classname) => {
	const elements = document.getElementsByClassName(classname)
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.display = "none"
	}
}
const showAll = () => {
	show("monday")
	show("tuesday")
	show("wednesday")
	show("thursday")
	show("friday")
	show("weekend")

	document.getElementById("main-container").style.alignItems = "center"
	// document.getElementById("btnShow").style.display = "none";
	// document.getElementById("btnHide").style.display = "block"
}
const hideAll = () => {
	const currDate = new Date()
	const dayOfTheWeek = currDate.getDay()
	setDisplay(dayOfTheWeek)
}
const setDisplay = (day) => {
	if (day == 1) {
		// document.getElementById("btnHide").style.display = "none";
		// document.getElementById("btnShow").style.display = "block";
		show("monday")
		hide("tuesday")
		hide("wednesday")
		hide("thursday")
		hide("friday")
		hide("weekend")
	} else if (day == 2) {
		// document.getElementById("btnHide").style.display = "none";
		// document.getElementById("btnShow").style.display = "block";
		hide("monday")
		show("tuesday")
		hide("wednesday")
		hide("thursday")
		hide("friday")
		hide("weekend")
	} else if (day == 3) {
		// document.getElementById("btnHide").style.display = "none";
		// document.getElementById("btnShow").style.display = "block";
		hide("monday")
		hide("tuesday")
		show("wednesday")
		hide("thursday")
		hide("friday")
		hide("weekend")
	} else if (day == 4) {
		// document.getElementById("btnHide").style.display = "none";
		// document.getElementById("btnShow").style.display = "block";
		hide("monday")
		hide("tuesday")
		hide("wednesday")
		show("thursday")
		hide("friday")
		hide("weekend")
	} else if (day == 5) {
		// document.getElementById("btnHide").style.display = "none";
		// document.getElementById("btnShow").style.display = "block";
		hide("monday")
		hide("tuesday")
		hide("wednesday")
		hide("thursday")
		show("friday")
		hide("weekend")
	} else {
		hide("monday")
		hide("tuesday")
		hide("wednesday")
		hide("thursday")
		hide("friday")
		show("weekend")
	}
}

const currDate = new Date()
const dayOfTheWeek = currDate.getDay()
setDisplay(dayOfTheWeek)
