
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("circle", { cx: "20.5", cy: "26", r: "5" }),
		React.createElement("circle", { cx: "43.5", cy: "26", r: "5" }),
		React.createElement("path", { d: "m45.7 44c-1.5-3.6-5.1-6-13.7-6-8.6 0-12.2 2.4-13.7 6-.8 1.9.3 4 .3 4 .4 1.2 2.2 2 13.4 2 11.1 0 12.9-.8 13.4-2 0 0 1.1-2.1.3-4" })
	),
	React.createElement("path", { d: "m42 43c.1-.3 0-.6-.2-.8 0 0-2.2-2.2-9.8-2.2-7.5 0-9.8 2.2-9.8 2.2-.2.1-.2.5-.2.8l.2.6c.1.3.3.5.6.5h18.4c.2 0 .5-.2.6-.5l.2-.6", fill: "#fff" })
);
};
