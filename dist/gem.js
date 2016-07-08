
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M41 4 23 4 2 20.1 32 60 62 20.1z", fill: "#9450e0" }),
	React.createElement(
		"g",
		{ fill: "#c28fef" },
		React.createElement("path", { d: "m32 60l12.5-39.9h-25.7z" }),
		React.createElement("path", { d: "M9.5 9.5 2 20.1 18.8 20.1 23 4z" }),
		React.createElement("path", { d: "M54.5 9.5 41 4 44.5 20.1 62 20.1z" })
	)
);
};
