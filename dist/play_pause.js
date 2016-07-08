
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m13 16l19 16-19 16z" }),
		React.createElement("path", { d: "m35.8 16h5.7v32h-5.7z" }),
		React.createElement("path", { d: "m45.3 16h5.7v32h-5.7z" })
	)
);
};
