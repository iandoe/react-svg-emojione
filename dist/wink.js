
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement("circle", { cx: "22.3", cy: "31.6", fill: "#664e27", r: "5" }),
	React.createElement(
		"g",
		{ fill: "#917524" },
		React.createElement("path", { d: "m51.2 27.5c-3.2-2.7-7.5-3.9-11.7-3.1-.6.1-1.1-2-.4-2.2 4.8-.9 9.8.5 13.5 3.6.6.5-1 2.1-1.4 1.7" }),
		React.createElement("path", { d: "m24.5 18.8c-4.2-.7-8.5.4-11.7 3.1-.4.4-2-1.2-1.4-1.7 3.7-3.2 8.7-4.5 13.5-3.6.7.2.2 2.3-.4 2.2" })
	),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("path", { d: "m50.2 34.3c-1.7-3.5-4.4-5.3-7-5.3s-5.2 1.8-7 5.3c-.2.4.7 1 1.2.6 1.7-1.3 3.7-1.8 5.8-1.8s4.1.5 5.8 1.8c.4.3 1.3-.3 1.2-.6" }),
		React.createElement("path", { d: "m44.1 42.2c-6.9 3.6-16.4 2.9-19.1 2.9-.7 0-1.2.3-1 .9 2 7 17 7 21.1-2.7.5-1.1-.3-1.4-1-1.1" })
	)
);
};
