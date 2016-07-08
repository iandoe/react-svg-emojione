
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "M42.3,22.6H26.9v6.2H41v5H26.9v7.5H43v5.2H21v-29h21.3V22.6z", fill: "#fff" })
);
};
