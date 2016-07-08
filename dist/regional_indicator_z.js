
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "M20.8,41.4l14.8-18.8H21.2v-5.1h22v4.9l-15,19h15.1v5.1H20.8V41.4z", fill: "#fff" })
);
};
