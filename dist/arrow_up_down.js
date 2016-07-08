
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m32 52l16-15.5h-11.4v-9h11.4l-16-15.5-16 15.5h11.4v9h-11.4z", fill: "#fff" })
);
};
