
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m19.5 42.1l.5-22.1 22.1-.5-7.5 7.5 13.3 13.2-7.3 7.3-13.2-13.3z", fill: "#fff" })
);
};
