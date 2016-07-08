
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("circle", { cx: "20.5", cy: "26.6", r: "5" }),
		React.createElement("circle", { cx: "43.5", cy: "26.6", r: "5" }),
		React.createElement("path", { d: "m23 47.6c5.8-4.8 12.2-4.8 18 0 .7.6 1.3-.4.8-1.3-1.8-3.4-5.3-6.5-9.8-6.5s-8.1 3.1-9.8 6.5c-.5.9.1 1.9.8 1.3" })
	)
);
};
