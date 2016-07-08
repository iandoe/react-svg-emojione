
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ed4c5c", r: "30" }),
	React.createElement("path", { d: "m47 27h-10v-10h-10v10h-10v10h10v10h10v-10h10z", fill: "#fff" })
);
};
