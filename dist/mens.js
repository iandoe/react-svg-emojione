
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m38 23h-6-6c-1 0-2 1-2 2l-1 11h3l1-9 1 24h3l1-13 1 13h3l1-24 1 9h3l-1-11c0-1-1-2-2-2" }),
		React.createElement("path", { d: "m36 19c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-4c0-1 1-2 2-2h4c1 0 2 1 2 2v4" })
	)
);
};
