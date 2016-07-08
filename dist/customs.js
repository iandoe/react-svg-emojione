
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m17.4 43.5h14v6h-14z" }),
		React.createElement("path", { d: "m11.4 29.5h6v14h-6z" }),
		React.createElement("path", { d: "m37.2 22c0 4.8 9.6 4.8 9.6 0 0-2.6 0-4.8 0-4.8h-9.6l-3.8 2.9h3.8c0 .6 0 1.3 0 1.9" }),
		React.createElement("path", { d: "m46.7 16.3v-3.8h-10.5l1 3.8z" }),
		React.createElement("path", { d: "m33.8 42.1l14.4-14.4h-8.7-5.7l-13.5 14.1h5.7l7.8-8.2z" }),
		React.createElement("path", { d: "m33.8 44.5h16.8v5h-16.8z" }),
		React.createElement("path", { d: "m35.5 42.8h15.1v-15.1z" })
	)
);
};
