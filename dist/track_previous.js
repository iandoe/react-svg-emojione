
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "M52 46 34.6 32 52 18z" }),
		React.createElement("path", { d: "M34.6 46 17.2 32 34.6 18z" }),
		React.createElement("path", { d: "m12 18h5.2v28h-5.2z" })
	)
);
};
