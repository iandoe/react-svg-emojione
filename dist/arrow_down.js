
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m16 33.7l16 15.3 16-15.3h-10.6v-18.7h-10.3v18.7z", fill: "#fff" })
);
};
