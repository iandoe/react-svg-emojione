
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement("path", { d: "m50.9 58h-.1z", fill: "#f46767" }),
	React.createElement("ellipse", { cx: "22", cy: "27", fill: "#664e27", rx: "5", ry: "6" }),
	React.createElement("path", { d: "m61.4 42.6c-.9-1.8-2.7-3-5-2.8-2.3.2-4.1 1.4-5.6 3.5-1.5-2-3.3-3.3-5.6-3.4-2.3-.1-4.1 1.1-5 2.9-.9 1.8-.9 4.2.9 7 1.8 2.7 9.5 8.2 9.7 8.4.2-.2 7.9-5.8 9.7-8.4 1.8-3 1.8-5.4.9-7.2", fill: "#f46767" }),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("path", { d: "m51.9 30.5c-1.9-4.1-4.7-6.1-7.5-6.1s-5.6 2-7.5 6.1c-.2.4.8 1.2 1.3.8 1.8-1.5 4-2.1 6.2-2.1s4.4.6 6.2 2.1c.5.4 1.4-.3 1.3-.8" }),
		React.createElement("path", { d: "m39.5 50.4c1.6-1.6-1.8-3-1.8-5.9s3.4-4.2 1.8-5.9c-1.9-2-6-.5-8.6-3.1 0 2.2 1.8 4.5 5.2 4.5 0 0-2.3.9-2.3 4.5s2.3 4.5 2.3 4.5c-3.4 0-5.2 2.3-5.2 4.5 2.6-2.7 6.7-1.2 8.6-3.1" })
	)
);
};
