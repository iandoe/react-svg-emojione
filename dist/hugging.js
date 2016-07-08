
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "30", fill: "#ffdd67", r: "28" }),
	React.createElement(
		"g",
		{ fill: "#ff717f" },
		React.createElement("ellipse", { cx: "49.9", cy: "21.5", opacity: ".8", rx: "6.1", ry: "8.4", transform: "matrix(.2588-.9659.9659.2588 16.2122 64.2167)" }),
		React.createElement("ellipse", { cx: "12.3", cy: "28.2", opacity: ".8", rx: "8.4", ry: "6.1", transform: "matrix(.8192-.5735.5735.8192-13.9487 12.1328)" })
	),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("path", { d: "m26.7 18.2c-2.5-4.3-5.3-6.1-7.8-5.6-2.5.4-4.6 3.1-5.4 8-.1.5.9 1.2 1.3.6 1.3-2 3.1-3 5.1-3.3 2-.4 4 0 5.9 1.4.5.3 1.2-.7.9-1.1" }),
		React.createElement("path", { d: "m46.2 14.7c-2.5-4.2-5.3-6.1-7.8-5.6-2.5.4-4.6 3.2-5.4 8-.1.5.9 1.2 1.3.6 1.3-2 3.1-3 5.1-3.3 2-.4 4 0 5.9 1.4.4.3 1.1-.6.9-1.1" }),
		React.createElement("path", { d: "m42.9 26.5c-6.3 6.3-14.3 7.7-22.4 3.9-1-.5-1.6.7-.8 1.6 2.8 3.2 7.8 5.6 13.4 4.6 5.6-1 9.5-5 11-9 .5-.9-.4-1.8-1.2-1.1" })
	),
	React.createElement("path", { d: "m27.2 46.8c0 0 1.8-.6 1.1-3-.7-2.5-6.9 0-10-1.2 0 0 2.5-.8 1.7-2.9-.8-1.9-7.6-2.6-14.3 2.6-6.7 5.2-2.4 17.2 5.9 18.7 5.8 1 14.6.9 15.7-1.6.9-2-1.9-2.7-1.9-2.7s3.5 0 3.5-2.7c0-1.6-1.3-1.6-1.3-1.6s2.9-.4 2.9-3.1c.1-2.3-3.3-2.5-3.3-2.5", fill: "#fff" }),
	React.createElement("path", { d: "m28.4 46.9c2.2-1.5.3-5.1-2.4-4.7-2.3.4-6.3.4-6.3.4 0 0 1.3-.5 1-2.2-.3-1.7-2.7-4.2-12.3-.3-3.6 1.5-5.9 4.5-6.3 8.2-.4 4 1.4 8.7 4.3 10.8 3.2 2.4 10.7 3.8 17.9 2.4 4.8-.9 4.3-4 2.3-4.5 3.3-.6 3.6-3.4 2-4.2 3.7-1.2 2.7-5.8-.2-5.9m-2.6 5.1c-1.9.2-7 .6-7 .6s3.5.7 7.2.1c3.3-.5 3.1 2.8-1.5 3.4-2.2.3-5.7.4-5.7.4s3.2.5 4.9.3c4.4-.6 3.9 2.7-.2 3.3-7.3 1-13.2 0-16.1-2.1-4.1-3-6.5-13 1.5-16.7 3.6-1.7 9.5-3.2 10.4-1.2 1.2 2.9-4.2 3.2-4.2 3.2s4.4.6 10.7-.1c1.7-.2 3 1.9.9 3.1-1.8 1.1-7.9 1.5-7.9 1.5s3.3.1 7.9-.3c3.7-.3 4 3.9-.9 4.5", fill: "#cccfd4" }),
	React.createElement("path", { d: "m36.8 46.8c0 0-1.8-.6-1.1-3 .7-2.5 6.9 0 10-1.2 0 0-2.5-.8-1.7-2.9.8-1.9 7.6-2.6 14.3 2.6 6.7 5.2 2.3 17.2-5.9 18.6-5.8 1-14.6.9-15.7-1.6-.9-2 1.9-2.7 1.9-2.7s-3.5 0-3.5-2.7c0-1.6 1.3-1.6 1.3-1.6s-2.9-.4-2.9-3.1c-.1-2.2 3.3-2.4 3.3-2.4", fill: "#fff" }),
	React.createElement("path", { d: "m35.4 52.7c-1.5.8-1.2 3.6 2 4.2-2 .5-2.5 3.6 2.3 4.5 7.3 1.4 14.7.1 17.9-2.4 2.8-2.1 4.7-6.8 4.3-10.8-.4-3.7-2.7-6.7-6.3-8.2-9.7-3.9-12-1.5-12.3.3-.3 1.7 1 2.2 1 2.2 0 0-4 0-6.3-.4-2.7-.5-4.6 3.2-2.4 4.7-2.9.2-3.9 4.8-.2 5.9m1.9-5.2c4.6.4 7.9.3 7.9.3s-6.1-.4-7.9-1.5c-2.1-1.2-.8-3.3.9-3.1 6.4.8 10.7.1 10.7.1s-5.4-.4-4.2-3.2c.9-2 6.8-.5 10.4 1.2 8 3.8 5.5 13.7 1.5 16.7-2.8 2.1-8.8 3.2-16.1 2.1-4.2-.6-4.7-3.9-.2-3.3 1.7.2 4.9-.3 4.9-.3s-3.5-.1-5.7-.4c-4.6-.6-4.8-3.9-1.5-3.4 3.6.5 7.2-.1 7.2-.1s-5.1-.3-7-.6c-4.9-.6-4.6-4.8-.9-4.5", fill: "#cccfd4" })
);
};
