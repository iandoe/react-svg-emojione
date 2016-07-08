
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m21.9 44.5l22.1-.5.5-22.1-7.5 7.5-13.2-13.3-7.3 7.3 13.3 13.2z", fill: "#fff" })
);
};
