
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("path", { d: "m52.5 40c-2.2-3.6-7.7-6-20.5-6-12.8 0-18.3 2.4-20.5 6-1.2 1.9.5 5 .5 5 2.1 3.9 1.8 5 20 5 18.1 0 17.9-1.1 20-5 0 0 1.7-3.1.5-5" }),
		React.createElement("circle", { cx: "20.5", cy: "24.5", r: "5" }),
		React.createElement("circle", { cx: "43.5", cy: "24.5", r: "5" })
	),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m48 40c.1-.5-.2-1.2-.6-1.5 0 0-3.9-2.5-15.4-2.5-11.5 0-15.4 2.5-15.4 2.5-.4.3-.7.9-.6 1.5l.2 1c.1.5.6 1 1.1 1h29.3c.5 0 1-.4 1.1-1l.3-1" }),
		React.createElement("path", { d: "m32 48c6.3 0 15.2 0 15-2.1 0-.4-.1-.8-.3-1.3-.2-.5-.3-.7-1.4-.7-2.4 0-24.9 0-26.7 0-1.1 0-1.2.1-1.4.7-.1.5-.2.9-.3 1.3-.1 2.1 8.8 2.1 15.1 2.1" })
	)
);
};
