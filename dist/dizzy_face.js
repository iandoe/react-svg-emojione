
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("path", { d: "m28.6 19.8l-12.1 12.2c-.8.8-3.6-2-2.8-2.8l12.2-12.2c.7-.7 3.5 2.1 2.7 2.8" }),
		React.createElement("path", { d: "m25.8 32l-12.1-12.2c-.8-.8 2-3.6 2.8-2.8l12.2 12.2c.7.8-2.1 3.6-2.9 2.8" }),
		React.createElement("path", { d: "m50.3 19.8l-12.1 12.2c-.8.8-3.6-2-2.8-2.8l12.2-12.2c.7-.7 3.5 2.1 2.7 2.8" }),
		React.createElement("path", { d: "m47.5 32l-12.1-12.2c-.8-.8 2-3.6 2.8-2.8l12.2 12.2c.7.8-2.1 3.6-2.9 2.8" }),
		React.createElement("circle", { cx: "32", cy: "47", r: "9" })
	),
	React.createElement("path", { d: "m26 44c1.2-2.4 3.4-4 6-4 2.6 0 4.8 1.6 6 4h-12", fill: "#fff" })
);
};
