
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement(
		"g",
		{ fill: "#ff5a79" },
		React.createElement("path", { d: "m23 42.4h-10l-4-40.4h18z" }),
		React.createElement("ellipse", { cx: "18", cy: "54.4", rx: "7.7", ry: "7.6" }),
		React.createElement("path", { d: "m51 42.4h-10l-4-40.4h18z" }),
		React.createElement("ellipse", { cx: "46", cy: "54.4", rx: "7.7", ry: "7.6" })
	)
);
};
