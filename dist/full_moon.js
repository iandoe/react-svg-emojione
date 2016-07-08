
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffe8a6", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#f4dc9f" },
		React.createElement("circle", { cx: "50", cy: "35.2", r: "7" }),
		React.createElement("circle", { cx: "18.1", cy: "39", r: "6" }),
		React.createElement("circle", { cx: "24.2", cy: "50", r: "9" }),
		React.createElement("circle", { cx: "24", cy: "17.2", r: "4" }),
		React.createElement("circle", { cx: "37", cy: "18.2", r: "4" }),
		React.createElement("circle", { cx: "12.1", cy: "25.9", r: "4" }),
		React.createElement("circle", { cx: "39", cy: "9.2", r: "2" }),
		React.createElement("circle", { cx: "8.1", cy: "39", r: "2" }),
		React.createElement("circle", { cx: "52", cy: "50", r: "2" }),
		React.createElement("circle", { cx: "25", cy: "29.9", r: "3" }),
		React.createElement("circle", { cx: "15", cy: "15.7", r: "2" }),
		React.createElement("circle", { cx: "46", cy: "52.6", r: "4" }),
		React.createElement("path", { d: "m24.2 10.8c0 2.8 2.2 5 5 5 2.8 0 5-2.2 5-5 0-2.8-2.2-5-5-5-2.8-.1-5 2.2-5 5" })
	)
);
};
