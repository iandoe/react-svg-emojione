
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "M38,17.5h6.9l-9.7,18.1v10.9h-6.1V35.6l-10-18.1h7.1l6,12.6L38,17.5z", fill: "#fff" })
);
};
