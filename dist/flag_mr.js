
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#699635", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#ffce31" },
		React.createElement("path", { d: "m47.7 28.8c-1.5 7.3-7.9 12.8-15.7 12.8s-14.2-5.5-15.7-12.8c-.2 1-.3 2.1-.3 3.2 0 8.8 7.2 16 16 16s16-7.2 16-16c0-1.1-.1-2.2-.3-3.2" }),
		React.createElement("path", { d: "m26.6 32l5.4-3.8 5.4 3.8-2-6.1 5.4-3.9h-6.7l-2.1-6-2 6h-6.8l5.4 3.9z" })
	)
);
};
