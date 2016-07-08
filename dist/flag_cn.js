
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ed4c5c", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#ffe62e" },
		React.createElement("path", { d: "m22 28.4l8 5.6-3-9.2 8-5.8h-9.9l-3.1-9-3 9h-10l8 5.8-3 9.2z" }),
		React.createElement("path", { d: "m35.3 35.3l-2.3.5 2.2.9v2.3l1.5-1.7 2.2.8-1.3-1.9 1.4-1.8-2.3.5-1.4-1.9z" }),
		React.createElement("path", { d: "m38.7 28.5l-1.7 1.5 2.3-.2 1 2.2.4-2.3 2.3-.2-2-1.2.5-2.3-1.7 1.5-2-1.2z" }),
		React.createElement("path", { d: "m39.3 20.7l.7 2.3.7-2.2h2.3l-1.8-1.4.7-2.3-1.9 1.4-1.8-1.5.7 2.3-1.9 1.3z" }),
		React.createElement("path", { d: "m35.3 12.7v2.3l1.4-1.9 2.3.5-1.4-1.8 1.3-1.9-2.2.9-1.5-1.8v2.3l-2.2.9z" })
	)
);
};
