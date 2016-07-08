
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#f42f4c", r: "30" }),
	React.createElement("path", { d: "m32 39l9.9 7-3.7-11.4 9.8-7.4h-12.2l-3.8-11.2-3.7 11.2h-12.3l9.8 7.4-3.7 11.4z", fill: "#ffe62e" })
);
};
