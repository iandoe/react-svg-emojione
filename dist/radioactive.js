
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#3e4347", r: "30" }),
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffe62e", r: "27" }),
	React.createElement(
		"g",
		{ fill: "#3e4347" },
		React.createElement("circle", { cx: "32", cy: "32", r: "5" }),
		React.createElement("path", { d: "m8 28.8l17.1 2.2c.2-1.9 1.2-3.5 2.7-4.6l-10.5-13.8c-5 3.9-8.5 9.6-9.3 16.2" }),
		React.createElement("path", { d: "m32 38.8c-.9 0-1.8-.2-2.7-.5l-6.6 15.9c2.9 1.2 6 1.9 9.3 1.9 3.3 0 6.4-.7 9.3-1.9l-6.6-15.9c-.9.3-1.8.5-2.7.5" }),
		React.createElement("path", { d: "m38.9 31l17.1-2.2c-.8-6.6-4.3-12.3-9.3-16.1l-10.5 13.7c1.4 1.1 2.4 2.7 2.7 4.6" })
	)
);
};
