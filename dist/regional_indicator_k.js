
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m20.2 17.5h6v12l11.2-12h7.8l-11.9 11.9 12.5 17.1h-7.8l-8.9-12.7-2.9 3v9.7h-6v-29", fill: "#fff" })
);
};
