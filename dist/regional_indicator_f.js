
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m21.7 17.5h20.7v5.1h-14.7v6.7h12.9v5h-12.9v12.2h-6v-29", fill: "#fff" })
);
};
