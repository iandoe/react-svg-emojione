
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m33.7 16l15.3 16-15.3 16v-10.6h-18.7v-10.3h18.7z", fill: "#fff" })
);
};
