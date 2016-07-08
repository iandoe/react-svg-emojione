
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "M50 46 38.1 33.3 50 33.3 32 14 14 33.3 25.9 33.3 14 46z", fill: "#fff" })
);
};
