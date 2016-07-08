
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement(
		"g",
		{ fill: "#4d5357" },
		React.createElement("path", { d: "m2 26h60v12h-60z" }),
		React.createElement("circle", { cx: "32", cy: "9.5", r: "7.5" }),
		React.createElement("circle", { cx: "32", cy: "54.5", r: "7.5" })
	)
);
};
