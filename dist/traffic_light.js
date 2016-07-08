
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M2,32c0,8.2,6.8,15,15,15h30c8.3,0,15-6.8,15-15s-6.7-15-15-15H17C8.8,17,2,23.8,2,32z", fill: "#94989b" }),
	React.createElement("path", { d: "m3.9 32c0 7.2 5.9 13.1 13.1 13.1h30c7.2 0 13.1-5.9 13.1-13.1s-5.9-13.1-13.1-13.1h-30c-7.2 0-13.1 5.9-13.1 13.1", fill: "#3e4347" }),
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffe62e", r: "7.5" }),
	React.createElement("circle", { cx: "13.2", cy: "32", fill: "#ed4c5c", r: "7.5" }),
	React.createElement("circle", { cx: "50.8", cy: "32", fill: "#83bf4f", r: "7.5" })
);
};
