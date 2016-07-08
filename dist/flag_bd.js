
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#75a843", r: "30" }),
	React.createElement("circle", { cx: "32", cy: "32", fill: "#699635", r: "30" }),
	React.createElement("circle", { cx: "26", cy: "32", fill: "#ed4c5c", r: "14.1" })
);
};
