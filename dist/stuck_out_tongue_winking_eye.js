
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ffdd67", r: "30" }),
	React.createElement("path", { d: "m31.2 24.6c0 5.5-4.5 10-10 10-5.5 0-10-4.5-10-10 0-5.5 4.5-10 10-10 5.6 0 10 4.5 10 10", fill: "#fff" }),
	React.createElement(
		"g",
		{ fill: "#664e27" },
		React.createElement("circle", { cx: "21.2", cy: "24.6", r: "4.5" }),
		React.createElement("path", { d: "m51 29.1c-1.9-4.1-4.7-6.1-7.5-6.1s-5.6 2-7.5 6.1c-.2.4.8 1.2 1.3.8 1.8-1.5 4-2.1 6.2-2.1s4.4.6 6.2 2.1c.5.4 1.5-.4 1.3-.8" }),
		React.createElement("path", { d: "m47.9 38c-3.3 0-9.7 0-15.9 0s-12.6 0-15.9 0c-.7 0-1.1.5-1.1 1 0 7.3 6 15 17 15s17-7.7 17-15c0-.5-.4-1-1.1-1" })
	),
	React.createElement("path", { d: "m41.2 44c-2.3 0-9.2 0-9.2 0s-6.9 0-9.2 0c-.7 0-.8.3-.8.8 0 .9 0 2.4 0 4 0 8.8 4.5 13.2 10 13.2 5.5 0 10-4.4 10-13.2 0-1.6 0-3.1 0-4 0-.5-.1-.8-.8-.8", fill: "#ff717f" }),
	React.createElement("path", { d: "M33.5 44 32 57.8 30.5 44z", fill: "#e2596c" })
);
};
