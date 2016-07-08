
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement("path", { d: "m40.3 48.1c0 4.6-3.7 8.3-8.3 8.3-4.6 0-8.3-3.7-8.3-8.3 0-4.6 3.7-8.3 8.3-8.3 4.6 0 8.3 3.7 8.3 8.3", fill: "#664e27" }),
	React.createElement("path", { d: "m26.2 44.8c1.2-2 3.3-3.4 5.8-3.4 2.5 0 4.7 1.3 5.8 3.4h-11.6", fill: "#fff" }),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("circle", { cx: "43.5", cy: "33", r: "4.5" }),
		React.createElement("circle", { cx: "20.5", cy: "33", r: "4.5" })
	),
	React.createElement(
		"g",
		{ fill: "#917524" },
		React.createElement("path", { d: "m25.6 17.9c-3.2 2.7-7.5 3.9-11.7 3.1-.6-.1-1.1 2-.4 2.2 4.8.9 9.8-.5 13.5-3.6.5-.5-1-2.1-1.4-1.7" }),
		React.createElement("path", { d: "m50.1 20.9c-4.2.7-8.5-.4-11.7-3.1-.4-.4-2 1.2-1.4 1.7 3.7 3.2 8.7 4.5 13.5 3.6.7-.2.2-2.3-.4-2.2" })
	),
	React.createElement("path", { d: "m62 18.5c0 9.4-12.7 9.4-12.7 0 0-6.9 6.4-13.5 6.4-13.5s6.3 6.7 6.3 13.5", fill: "#65b1ef" })
);
};
