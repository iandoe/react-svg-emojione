
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#f5f5f5", r: "30" }),
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ed4c5c", r: "12" })
);
};
