
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m26.2 46.5h-7l9.3-14.8-8.9-14.2h7.2l5.2 9.4 5.3-9.4h7l-8.9 14 9.4 15h-7.4l-5.4-9.9-5.8 9.9", fill: "#fff" })
);
};
