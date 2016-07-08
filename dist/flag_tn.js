
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ed4c5c", r: "30" }),
	React.createElement("circle", { cx: "32", cy: "32", fill: "#fff", r: "17.3" }),
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ed4c5c", r: "13" }),
	React.createElement("circle", { cx: "35.5", cy: "32", fill: "#fff", r: "10.4" }),
	React.createElement("path", { d: "m38.4 32l3.4-4.6-5.4 1.8-3.3-4.6v5.7l-5.4 1.7 5.4 1.7v5.7l3.3-4.6 5.4 1.8z", fill: "#ed4c5c" })
);
};
