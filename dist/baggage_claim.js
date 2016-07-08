
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("circle", { cx: "14.5", cy: "48", r: "2" }),
		React.createElement("circle", { cx: "21.5", cy: "48", r: "2" }),
		React.createElement("circle", { cx: "28.5", cy: "48", r: "2" }),
		React.createElement("circle", { cx: "35.5", cy: "48", r: "2" }),
		React.createElement("circle", { cx: "42.5", cy: "48", r: "2" }),
		React.createElement("circle", { cx: "49.5", cy: "48", r: "2" }),
		React.createElement("path", { d: "m41 19h-2v-3.9c0-.6-.4-1-1-1h-12c-.6 0-1 .5-1 1v3.9h-2v-3.9c0-1.7 1.3-3.1 3-3.1h12c1.7 0 3 1.4 3 3.1v3.9" }),
		React.createElement("path", { d: "m50 19h-3.5v24h3.5c1.1 0 2-.9 2-2v-20c0-1.1-.9-2-2-2" }),
		React.createElement("path", { d: "m19.5 19h25v24h-25z" }),
		React.createElement("path", { d: "m17.5 19h-3.5c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h3.5v-24" })
	)
);
};
