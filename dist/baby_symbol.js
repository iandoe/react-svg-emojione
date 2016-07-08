
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#eda454", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m37 19.5c0 1.2-1.2 2.5-2.5 2.5h-5c-1.2 0-2.5-1.2-2.5-2.5v-5c0-1.2 1.2-2.5 2.5-2.5h5c1.2 0 2.5 1.2 2.5 2.5v5" }),
		React.createElement("path", { d: "m31 41l-5-3-3 7 3 7 3-1-2-6z" }),
		React.createElement("path", { d: "m33 41l5-3 3 7-3 7-3-1 2-6z" }),
		React.createElement("path", { d: "m36 24h-8.1l-7.9-3-1 2 7 5v6c0 2 1 3 3 3h6c2 0 3-1 3-3v-6l7-5-1-2-8 3" })
	)
);
};
