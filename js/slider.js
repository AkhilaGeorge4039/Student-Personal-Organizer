(function () {
	"use strict";

	// Make prependChild method similar to appendChild
	if (!window.Element.prototype.prependChild) {
		window.Element.prototype.prependChild = function (val) {
			this.insertBefore(val, this.firstChild);
		}
	}

	window.Element.prototype._qs = function (val) {
		return this.querySelectorAll(val);
	}

	function $id(val) {
		return document.getElementById(val);
	}

	function $qs(val) {
		return document.querySelectorAll(val);
	}
	// function to perform slider properties
	function init() {
		var slider1 = new slider("about-slider");
		//previous slide displays when button clicks
		$id("prev").addEventListener("click", function () {
			slider1.prevSlide.call(slider1);
		});
		//next slide displays when button clicks
		$id("next").addEventListener("click", function () {
			slider1.nextSlide.call(slider1);
		});
	}
	// function for slider transition
	function slider(id) {
		this.id = id;
		this.pos = 0;
		this.moving = false;
		this.transitionTime = 600;
		this.slideDelay = 5000;
		this.active = 1;

		var list = $id(this.id)._qs("ul")[0];
		//appending slides in a for loop
		for (let i = 0; i < list.children.length; i++) {
			let element = list.children[i];
			element.style.width = (100 / list.children.length) + "%";
			element.id = i;
		}
		// to perform slide transition
		list.style.width = (list.children.length * 100) + "%";
		list.style.transform = "translateX(-" + (100 / list.children.length) + "%)";
		list.style.transitionDuration = "0ms";
		list.style.transitionProperty = "transform";
		list.style.transformTimingFunction = "ease";
		list.prependChild(list.lastElementChild);
		// setting slide1 as the active slide when page reloads
		this.setActive = function () {
			var self = this;
			var list = $id(this.id)._qs("ul")[0];
			self.active = list.children[1].id;
			console.log(self.active);
		}
		// function for backward sliding of the slider
		this.prevSlide = function () {
			if (!this.moving) {
				this.moving = true;
				var self = this;

				var list = $id(this.id)._qs("ul")[0];
				list.style.transitionDuration = this.transitionTime + "ms";
				list.style.transform = "translateX(0px)";
				// to perform slide transition backwards
				var handler = function (event) {
					list.prependChild(list.lastElementChild);
					list.removeEventListener('transitionend', handler);
					list.style.transitionDuration = "0ms";
					list.style.transform = "translateX(-" + (100 / list.children.length) + "%)";
					self.moving = false;
					console.log("PREV" + self.moving);
					self.setActive();
				};

				list.addEventListener("transitionend", handler);
			}
		}
		// function for forward sliding of the slider
		this.nextSlide = function () {
			if (!this.moving) {
				this.moving = true;
				var self = this;
				var list = $id(this.id)._qs("ul")[0];
				list.style.transform = "translateX(-" + (200 / list.children.length) + "%)";
				list.style.transitionDuration = this.transitionTime + "ms";//transition duration for sliding to next image
				// to perform slide transition forwards
				var handler = function (event) {
					list.appendChild(list.firstElementChild);
					list.removeEventListener('transitionend', handler);
					list.style.transitionDuration = "0ms";
					list.style.transform = "translateX(-" + (100 / list.children.length) + "%)";
					self.moving = false;
					console.log("NEXT" + self.moving);
					self.setActive();
				};

				list.addEventListener("transitionend", handler);
			}
		}
	}

	document.addEventListener("DOMContentLoaded", init);
})();