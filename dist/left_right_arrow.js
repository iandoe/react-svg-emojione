
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m12 32l15.5 16v-11.4h9v11.4l15.5-16-15.5-16v11.4h-9v-11.4z", fill: "#fff" })
);
};
