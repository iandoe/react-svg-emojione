
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "M20.3,46.5v-29h6v11.1h11.3V17.5h6v29h-6v-13H26.4v13H20.3z", fill: "#fff" })
);
};
