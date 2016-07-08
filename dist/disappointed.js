
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("path", { d: "m25.5 28.4c1.4 2.9-.4 6.6-3.9 8.3-3.5 1.6-7.5.6-8.9-2.3-.8-1.9 12-7.9 12.8-6" }),
		React.createElement("path", { d: "m38.5 28.4c-1.4 2.9.4 6.6 3.9 8.3 3.5 1.6 7.5.6 8.9-2.3.8-1.9-12-7.9-12.8-6" })
	),
	React.createElement(
		"g",
		{ fill: "#917524" },
		React.createElement("path", { d: "m22.7 19.8c-2.7 3.3-9.2 6.3-13.5 6.3-.6 0-.7 2.2 0 2.2 4.9 0 12-3.3 15.2-7.1.5-.5-1.3-1.8-1.7-1.4" }),
		React.createElement("path", { d: "m41.3 19.8c2.7 3.3 9.2 6.3 13.5 6.3.6 0 .7 2.2 0 2.2-4.9 0-12-3.3-15.2-7.1-.5-.5 1.3-1.8 1.7-1.4" })
	),
	React.createElement("path", { d: "m40.6 46.4c-5.4-2.5-11.8-2.5-17.2 0-1.3.6.3 4.2 1.7 3.5 3.6-1.7 8.9-2.3 13.9 0 1.3.6 3-2.8 1.6-3.5", fill: "#664e27" })
);
};
