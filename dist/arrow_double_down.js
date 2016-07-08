
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m14 18l11.9 12.7h-11.9l18 19.3 18-19.3h-11.9l11.9-12.7z", fill: "#fff" })
);
};
