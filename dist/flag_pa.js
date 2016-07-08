
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "m32 2v30h30c0-16.6-13.4-30-30-30", fill: "#ed4c5c" }),
	React.createElement("path", { d: "M32,62V32H2C2,48.6,15.4,62,32,62z", fill: "#2a5f9e" }),
	React.createElement(
		"g",
		{ fill: "#f9f9f9" },
		React.createElement("path", { d: "m32 62v-30h30c0 16.6-13.4 30-30 30" }),
		React.createElement("path", { d: "M32,2v30H2C2,15.4,15.4,2,32,2z" })
	),
	React.createElement("path", { d: "m17 20.7l3.1 2.3-1.2-3.8 3.1-2.4h-3.8l-1.2-3.8-1.2 3.8h-3.8l3.1 2.4-1.2 3.8z", fill: "#2a5f9e" }),
	React.createElement("path", { d: "m47 46.7l3.1 2.3-1.2-3.8 3.1-2.4h-3.8l-1.2-3.8-1.2 3.8h-3.8l3.1 2.4-1.2 3.8z", fill: "#ed4c5c" })
);
};
