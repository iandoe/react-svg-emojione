
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#42ade2", r: "30" }),
	React.createElement("circle", { cx: "24", cy: "32", fill: "#ffe62e", r: "16" })
);
};
