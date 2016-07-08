
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4bd37b", r: "30" }),
	React.createElement("path", { d: "m46 14l-21 21.6-7-7.2-7 7.2 14 14.4 28-28.8z", fill: "#fff" })
);
};
