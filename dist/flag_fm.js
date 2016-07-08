
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#428bc1", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m32.8 21.6l2.4 1.8-.9-2.9 2.4-1.9h-3l-.9-2.9-.9 2.9h-3l2.4 1.9-.9 2.9z" }),
		React.createElement("path", { d: "m32.8 42.4l2.4-1.8-.9 2.9 2.4 1.9h-3l-.9 2.9-.9-2.9h-3l2.4-1.9-.9-2.9z" }),
		React.createElement("path", { d: "m21.9 29.9l2.4-1.8-.9 3 2.4 1.8h-3l-.9 3-.9-3h-3l2.4-1.8-.9-3z" }),
		React.createElement("path", { d: "m42.1 29.9l-2.4-1.8.9 3-2.4 1.8h3l.9 3 .9-3h3l-2.4-1.8.9-3z" })
	)
);
};
