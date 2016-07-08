
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M60,40c-5,0-9-8-9-13c0-10-9-18-19-18s-19,8-19,18c0,5-4,13-9,13H0v13h64V40H60z", fill: "#594640" }),
	React.createElement("circle", { cx: "32", cy: "28", fill: "#fed0ac", r: "15" }),
	React.createElement(
		"g",
		{ fill: "#333" },
		React.createElement("circle", { cx: "32", cy: "28", r: "2" }),
		React.createElement("path", { d: "m40.1 30c.7 0 2.9-2 2.9-2s-2.2-2-2.9-2c-.6 0-1.1.6-1.3 1.4h-7.8v1.2h7.8c.2.8.7 1.4 1.3 1.4" }),
		React.createElement("path", { d: "m32 13.7l-1 14h2z" })
	),
	React.createElement(
		"g",
		{ fill: "#d3976e" },
		React.createElement("path", { d: "m3 53h8v2h-8z" }),
		React.createElement("path", { d: "m53 53h8v2h-8z" })
	)
);
};
