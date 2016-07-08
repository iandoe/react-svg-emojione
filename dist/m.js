
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m41 15l-9 9-9-9h-6v34h6v-25l9 9 9-9v25h6v-34z", fill: "#fff" })
);
};
