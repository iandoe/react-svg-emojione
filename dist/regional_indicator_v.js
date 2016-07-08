
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m38.4 17.5h6.3l-9.9 29h-5.7l-9.8-29h6.5l6.3 22 6.3-22", fill: "#fff" })
);
};
