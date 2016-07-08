
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement("path", { d: "m45.5 40c6.1 0 11-4.9 11-11 0-1.6-.4-3.2-1-4.6-2.8-1.3-6.3-2-10-2s-7.2.8-10 2c-.6 1.4-1 2.9-1 4.6 0 6.1 4.9 11 11 11", fill: "#fff" }),
	React.createElement("path", { d: "m46 22.4c-.5.7-.8 1.6-.8 2.5 0 2.5 2 4.5 4.5 4.5 2.5 0 4.5-2 4.5-4.5 0-.4-.1-.7-.1-1-2.4-.9-5.2-1.5-8.1-1.5", fill: "#664e27" }),
	React.createElement("path", { d: "m18.5 40c6.1 0 11-4.9 11-11 0-1.6-.4-3.2-1-4.6-2.8-1.3-6.3-2-10-2s-7.2.8-10 2c-.6 1.4-1 2.9-1 4.6 0 6.1 4.9 11 11 11", fill: "#fff" }),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("path", { d: "m19 22.4c-.5.7-.8 1.6-.8 2.5 0 2.5 2 4.5 4.5 4.5 2.5 0 4.5-2 4.5-4.5 0-.4-.1-.7-.1-1-2.4-.9-5.2-1.5-8.1-1.5" }),
		React.createElement("path", { d: "m40.6 47.3c-5.4-2.5-11.8-2.5-17.2 0-1.4.7.3 4.2 1.6 3.5 3.6-1.7 8.9-2.3 13.9 0 1.4.6 3.1-2.8 1.7-3.5" })
	)
);
};
