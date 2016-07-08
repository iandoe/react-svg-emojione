
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "31", fill: "#94989b", r: "30" }),
	React.createElement("circle", { cx: "32", cy: "32", fill: "#626a6d", r: "15" }),
	React.createElement("circle", { cx: "32", cy: "30.4", fill: "#d9e3e8", r: "15" })
);
};
