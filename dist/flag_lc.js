
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#49c3f2", r: "30" }),
	React.createElement("path", { d: "m32 15l-15 30h30z", fill: "#fff" }),
	React.createElement("path", { d: "m32 21l-12 24h24z", fill: "#3e4347" }),
	React.createElement("path", { d: "m32 33l-12 12h24z", fill: "#ffce31" })
);
};
