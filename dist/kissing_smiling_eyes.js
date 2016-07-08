
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("path", { d: "m29 26.6c-2.7-4.7-5.9-6.7-8.7-6.3s-5.1 3.5-6 8.8c-.1.5 1 1.3 1.4.7 1.4-2.2 3.4-3.3 5.7-3.7 2.2-.4 4.5 0 6.6 1.5.5.6 1.3-.5 1-1" }),
		React.createElement("path", { d: "m50.6 22.8c-2.7-4.7-5.9-6.7-8.7-6.3s-5.1 3.5-6 8.8c-.1.5 1 1.3 1.4.7 1.4-2.2 3.4-3.3 5.7-3.7 2.2-.4 4.5 0 6.6 1.5.5.6 1.3-.5 1-1" }),
		React.createElement("path", { d: "m45.6 45.4c1.3-1.9-2.3-2.6-2.8-5.5-.5-2.9 2.6-4.8.8-6.1-2.2-1.6-6 .6-9-1.6.4 2.1 2.6 4.1 5.9 3.5 0 0-2.1 1.3-1.5 4.8.6 3.5 3 4 3 4-3.3.6-4.7 3.2-4.3 5.3 2-2.8 6.4-2.1 7.9-4.4" })
	)
);
};
