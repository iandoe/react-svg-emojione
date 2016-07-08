
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m44 16h6v32h-6z" }),
		React.createElement("path", { d: "m34 24h6v24h-6z" }),
		React.createElement("path", { d: "m24 32h6v16h-6z" }),
		React.createElement("path", { d: "m14 40h6v8h-6z" })
	)
);
};
