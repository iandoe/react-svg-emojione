
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32.1", fill: "#ff5a79", r: "30" }),
	React.createElement("circle", { cx: "32", cy: "32.1", fill: "#333", r: "24" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m32.6 20.5h2.6c1 0 1.7-.6 1.7-1.4v-3.4c0-.8-.8-1.4-1.7-1.4h-2.6c-1 0-1.7.6-1.7 1.4v3.4c0 .7.8 1.4 1.7 1.4" }),
		React.createElement("path", { d: "m39.5 22h-11.5c-.8 0-1.5.5-1.5 1.2v5.8l-3.7 3v1.3l5.8-2.9.7-6v25.6h3l1.5-11.6 1.5 11.6h3v-25.7l1.3 11.6h1.4v-12.7c0-.7-.7-1.2-1.5-1.2" }),
		React.createElement("path", { d: "m20 34.3h2.8v3.8h-2.8z" }),
		React.createElement("path", { d: "m23.8 38.9h2.8v3.8h-2.8z" }),
		React.createElement("path", { d: "m19.2 43.2h2.8v3.8h-2.8z" })
	),
	React.createElement("path", { d: "m29 2.9h6v58.4h-6z", fill: "#ff5a79", transform: "matrix(.7071-.7071.7071.7071-13.2935 32.0473)" })
);
};
