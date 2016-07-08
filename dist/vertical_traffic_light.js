
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "m32 2c-8.2 0-15 6.8-15 15v30c0 8.3 6.8 15 15 15s15-6.7 15-15v-30c0-8.2-6.8-15-15-15", fill: "#94989b" }),
	React.createElement("path", { d: "m32 3.9c-7.2 0-13.1 5.9-13.1 13.1v30c0 7.2 5.9 13.1 13.1 13.1s13.1-5.9 13.1-13.1v-30c0-7.2-5.9-13.1-13.1-13.1", fill: "#3e4347" }),
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffe62e", r: "7.5" }),
	React.createElement("circle", { cx: "32", cy: "13.2", fill: "#ed4c5c", r: "7.5" }),
	React.createElement("circle", { cx: "32", cy: "50.8", fill: "#83bf4f", r: "7.5" })
);
};
