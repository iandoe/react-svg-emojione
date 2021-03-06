
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#c28fef", r: "30" }),
	React.createElement("circle", { cx: "32", cy: "32", fill: "#fff", r: "6.6" }),
	React.createElement(
		"g",
		{ fill: "#ffc7ce" },
		React.createElement("path", { d: "m32.2 42.6l9.2 13.6c6.8-2.6 12.2-8 14.8-14.8l-13.6-9.2c-.1 5.7-4.7 10.3-10.4 10.4" }),
		React.createElement("path", { d: "m31.8 21.4l-9.2-13.6c-6.8 2.6-12.2 8-14.8 14.8l13.6 9.2c.1-5.7 4.7-10.3 10.4-10.4" })
	),
	React.createElement("path", { d: "m32 45c-7.1 0-13-5.8-13-13 0-7.1 5.8-13 13-13s13 5.8 13 13c0 7.1-5.9 13-13 13m0-23.3c-5.7 0-10.3 4.6-10.3 10.3s4.6 10.3 10.3 10.3c5.7 0 10.3-4.6 10.3-10.3s-4.6-10.3-10.3-10.3", fill: "#9450e0" })
);
};
