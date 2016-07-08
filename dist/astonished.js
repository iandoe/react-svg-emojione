
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement("circle", { cx: "19", cy: "29", fill: "#fff", r: "11" }),
	React.createElement("path", { d: "m24 29c0 2.8-2.2 5-5 5-2.8 0-5-2.2-5-5s2.2-5 5-5c2.8 0 5 2.2 5 5", fill: "#664e27" }),
	React.createElement("path", { d: "m56 29c0 6.1-4.9 11-11 11-6.1 0-11-4.9-11-11 0-6.1 4.9-11 11-11 6.1 0 11 4.9 11 11", fill: "#fff" }),
	React.createElement("path", { d: "m50 29c0 2.8-2.2 5-5 5-2.8 0-5-2.2-5-5s2.2-5 5-5c2.8 0 5 2.2 5 5", fill: "#664e27" }),
	React.createElement(
		"g",
		{ fill: "#917524" },
		React.createElement("path", { d: "m50.2 15.8c-3.2-2.7-7.5-3.9-11.7-3.1-.6.1-1.1-2-.4-2.2 4.8-.9 9.8.5 13.5 3.6.6.5-1 2.1-1.4 1.7" }),
		React.createElement("path", { d: "m25.5 12.5c-4.2-.7-8.5.4-11.7 3.1-.4.4-2-1.2-1.4-1.7 3.7-3.2 8.7-4.5 13.5-3.6.7.2.2 2.3-.4 2.2" })
	),
	React.createElement("circle", { cx: "32", cy: "49", fill: "#664e27", r: "9" }),
	React.createElement("path", { d: "m26 46c1.2-2.4 3.4-4 6-4 2.6 0 4.8 1.6 6 4h-12", fill: "#fff" })
);
};
