
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ff5a79", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m36 23h-4-4c-1 0-2 1-2 2l-3 11h3l2-9v4l-2 9h2v11h3v-11h2v11h3v-11h2l-2-9v-4l2 9h3l-3-11c0-1-1-2-2-2" }),
		React.createElement("path", { d: "m36 19c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-4c0-1 1-2 2-2h4c1 0 2 1 2 2v4" })
	)
);
};
