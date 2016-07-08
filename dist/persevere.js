
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#ff717f" },
		React.createElement("ellipse", { cx: "52.5", cy: "31.3", opacity: ".8", rx: "6.5", ry: "9", transform: "matrix(.4226-.9063.9063.4226 1.9347 65.6611)" }),
		React.createElement("ellipse", { cx: "11.5", cy: "31.3", opacity: ".8", rx: "9", ry: "6.5", transform: "matrix(.9063-.4226.4226.9063-12.1546 7.7934)" })
	),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("path", { d: "m19.4 42.2c8.1-5.7 17.1-5.6 25.2 0 1 .7 1.8-.5 1.2-1.6-2.5-4-7.4-7.7-13.8-7.7s-11.3 3.6-13.8 7.7c-.6 1.1.2 2.3 1.2 1.6" }),
		React.createElement("path", { d: "m51.7 15.1c.6.3.3 1-.2 1.1-2.7.4-5.5.9-8.3 2.4 4 .7 7.2 2.7 9 4.8.4.5-.1 1.1-.5 1-4.8-1.7-9.7-2.7-15.8-2-.5 0-.9-.2-.8-.7 1.6-7.3 10.9-10 16.6-6.6" }),
		React.createElement("path", { d: "m12.3 15.1c-.6.3-.3 1 .2 1.1 2.7.4 5.5.9 8.3 2.4-4 .7-7.2 2.7-9 4.8-.4.5.1 1.1.5 1 4.8-1.7 9.7-2.7 15.8-2 .5 0 .9-.2.8-.7-1.6-7.3-10.9-10-16.6-6.6" })
	)
);
};
