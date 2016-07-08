
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#ff717f" },
		React.createElement("circle", { cx: "50.8", cy: "36", opacity: ".8", r: "8" }),
		React.createElement("circle", { cx: "13.2", cy: "36", opacity: ".8", r: "8" })
	),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("path", { d: "m44.6 40.3c-8.1 5.7-17.1 5.6-25.2 0-1-.7-1.8.5-1.2 1.6 2.5 4 7.4 7.7 13.8 7.7s11.3-3.6 13.8-7.7c.6-1.1-.2-2.3-1.2-1.6" }),
		React.createElement("path", { d: "m28.5 26.9c-1.9-5.1-4.7-7.7-7.5-7.7s-5.6 2.6-7.5 7.7c-.2.5.8 1.4 1.3.9 1.8-1.9 4-2.7 6.2-2.7 2.2 0 4.4.8 6.2 2.7.6.5 1.5-.4 1.3-.9" }),
		React.createElement("path", { d: "m50.4 26.9c-1.9-5.1-4.7-7.7-7.5-7.7s-5.6 2.6-7.5 7.7c-.2.5.8 1.4 1.3.9 1.8-1.9 4-2.7 6.2-2.7s4.4.8 6.2 2.7c.5.5 1.5-.4 1.3-.9" })
	)
);
};
