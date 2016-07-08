
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m27.3 20.1c1.5-.7 3.2-1 4.9-1 6.6 0 11.9 5.1 11.9 12h7.9c0-10.8-8.9-19.8-19.8-19.8-3.8 0-7.6 1.1-10.8 3.2l-3.4-3.5v13.1h13.5l-4.2-4" }),
		React.createElement("path", { d: "m36.5 42.6c-1.5.7-3.1 1-4.7 1-6.6 0-12-5.3-12-12.6h-7.8c0 11.4 8.9 20.8 19.8 20.8 3.7 0 7.2-1.1 10.3-3.1l3.9 4.3v-14.8h-13.4l3.9 4.4" })
	)
);
};
