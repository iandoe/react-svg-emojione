
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m42 16c-3 0-5.6 1.7-7 4.1-1.4-2.5-4-4.1-7-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c3 0 5.6-1.7 7-4.1 1.4 2.5 4 4.1 7 4.1 4.4 0 8-3.6 8-8s-3.6-8-8-8m-14 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3m14 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3" }),
		React.createElement("path", { d: "m46 32h-23c-1.1 0-2 .9-2 2v.5l-5-2.5v16l5-2.5v.5c0 1.1.9 2 2 2h23c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2" })
	)
);
};
