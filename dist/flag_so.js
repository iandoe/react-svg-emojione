
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#42ade2", r: "30" }),
	React.createElement("path", { d: "m32 39.2l9.9 7.1-3.8-11.5 9.9-7.1h-12.2l-3.8-11.4-3.8 11.4h-12.2l9.8 7.1-3.7 11.5z", fill: "#fff" })
);
};
