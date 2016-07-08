
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M32,2v30H2c0,16.6,13.4,30,30,30s30-13.4,30-30S48.6,2,32,2z", fill: "#ed4c5c" }),
	React.createElement("path", { d: "M32,2C15.4,2,2,15.4,2,32h30V2z", fill: "#2a5f9e" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m19 13.1l1.2.9-.4-1.5 1.2-1h-1.5l-.5-1.5-.5 1.5h-1.5l1.2 1-.4 1.5z" }),
		React.createElement("path", { d: "m19 27.1l1.2.9-.4-1.5 1.2-1h-1.5l-.5-1.5-.5 1.5h-1.5l1.2 1-.4 1.5z" }),
		React.createElement("path", { d: "m14 18.1l1.2.9-.4-1.5 1.2-1h-1.5l-.5-1.5-.5 1.5h-1.5l1.2 1-.4 1.5z" }),
		React.createElement("path", { d: "m24 18.1l1.2.9-.4-1.5 1.2-1h-1.5l-.5-1.5-.5 1.5h-1.5l1.2 1-.4 1.5z" }),
		React.createElement("path", { d: "m22 22.5l.6.5-.2-.8.6-.4h-.8l-.2-.8-.2.8h-.8l.6.4-.2.8z" })
	)
);
};
