
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m28 38l-1 10h-8l-1-10h-2v13h14v-13z" }),
		React.createElement("path", { d: "m20 37l3-3 3 4-4 2z" }),
		React.createElement("path", { d: "m45 23h-6-6c-1 0-2 1-2 2l-1 4-5 3 1 2 6-2 2-5 1 24h3l1-13 1 13h3l1-24 1 9h3l-1-11c0-1-1-2-2-2" }),
		React.createElement("path", { d: "m43 19c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-4c0-1 1-2 2-2h4c1 0 2 1 2 2v4" })
	)
);
};
