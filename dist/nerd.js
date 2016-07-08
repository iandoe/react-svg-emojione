
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("circle", { cx: "17", cy: "30", r: "11" }),
		React.createElement("circle", { cx: "47", cy: "30", r: "11" })
	),
	React.createElement(
		"g",
		{ fill: "#494949" },
		React.createElement("path", { d: "m36 27c-1.8-1.3-6.2-1.3-8 0-1.1-1-.9-2.1-2-3.1 3.1-2.3 8.4-2.7 12 0-1.1 1-.9 2.1-2 3.1" }),
		React.createElement("path", { d: "m47 17c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13-5.8-13-13-13m0 23c-5.5 0-10-4.5-10-10 0-5.5 4.5-10 10-10s10 4.5 10 10c0 5.5-4.5 10-10 10" }),
		React.createElement("path", { d: "m17 17c-7.2 0-13 5.8-13 13 0 7.2 5.8 13 13 13 7.2 0 13-5.8 13-13s-5.8-13-13-13m0 23c-5.5 0-10-4.5-10-10 0-5.5 4.5-10 10-10s10 4.5 10 10c0 5.5-4.5 10-10 10" })
	),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("ellipse", { cx: "20", cy: "30.5", rx: "4", ry: "5" }),
		React.createElement("ellipse", { cx: "44", cy: "30.5", rx: "4", ry: "5" }),
		React.createElement("path", { d: "m26.7 51.3c5.8 1.5 12 .4 16.9-3 1.2-.9-1.1-4-2.3-3.2-3.2 2.3-8.4 3.8-13.7 2.4-1.3-.3-2.4 3.4-.9 3.8" })
	),
	React.createElement(
		"g",
		{ fill: "#917524" },
		React.createElement("path", { d: "m53.2 15.7c-3.2-2.7-7.5-3.9-11.7-3.1-.6.1-1.1-2-.4-2.2 4.8-.9 9.8.5 13.5 3.6.6.5-1 2.1-1.4 1.7" }),
		React.createElement("path", { d: "m22.5 12.4c-4.2-.7-8.5.4-11.7 3.1-.4.4-2-1.2-1.4-1.7 3.7-3.2 8.7-4.5 13.5-3.6.7.2.2 2.3-.4 2.2" })
	)
);
};
