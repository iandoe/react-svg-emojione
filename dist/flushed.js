
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#ff717f" },
		React.createElement("circle", { cx: "52.8", cy: "37.1", r: "8" }),
		React.createElement("circle", { cx: "11.2", cy: "37.1", r: "8" })
	),
	React.createElement(
		"g",
		{ fill: "#917524" },
		React.createElement("path", { d: "m54.6 20.6c-2.7-3.3-6.7-5.1-11-5.1-.6 0-.7-2.2 0-2.2 4.9 0 9.5 2.1 12.7 5.9.5.6-1.3 1.9-1.7 1.4" }),
		React.createElement("path", { d: "m20.3 15.4c-4.2 0-8.3 1.9-11 5.1-.4.5-2.1-.8-1.7-1.4 3.1-3.8 7.8-5.9 12.7-5.9.7 0 .6 2.2 0 2.2" })
	),
	React.createElement("circle", { cx: "32", cy: "49.5", fill: "#664e27", r: "4.5" }),
	React.createElement("path", { d: "m29.5 29.1c0 5-4 9-9 9-5 0-9-4-9-9 0-5 4-9 9-9 5 0 9 4.1 9 9", fill: "#fff" }),
	React.createElement("circle", { cx: "20.5", cy: "29.1", fill: "#664e27", r: "4.5" }),
	React.createElement("path", { d: "m52.5 29.1c0 5-4 9-9 9-5 0-9-4-9-9 0-5 4-9 9-9 5 0 9 4.1 9 9", fill: "#fff" }),
	React.createElement("circle", { cx: "43.5", cy: "29.1", fill: "#664e27", r: "4.5" })
);
};
