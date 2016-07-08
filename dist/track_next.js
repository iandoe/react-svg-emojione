
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "M12 18 29.4 32 12 46z" }),
		React.createElement("path", { d: "m29.4 18l17.4 14-17.4 14z" }),
		React.createElement("path", { d: "m46.8 18h5.2v28h-5.2z" })
	)
);
};
