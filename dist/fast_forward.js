
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m19.9 14l12.8 11.9v-11.9l19.4 18-19.4 18v-11.9l-12.8 11.9z", fill: "#fff" })
);
};
