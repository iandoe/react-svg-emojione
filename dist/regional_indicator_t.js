
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m43.8 17.5v5.1h-8.7v23.9h-6.1v-23.9h-8.7v-5.1c-.1 0 23.5 0 23.5 0", fill: "#fff" })
);
};
