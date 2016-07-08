
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m48 30.3l-16-15.3-16 15.3h10.6v18.7h10.3v-18.7z", fill: "#fff" })
);
};
