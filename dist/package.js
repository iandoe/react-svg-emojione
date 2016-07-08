
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M32 64 0 44.8 0 19.2 32 38.4z", fill: "#89664c" }),
	React.createElement("path", { d: "m32 38.4v25.6l32-19.2v-25.6z", fill: "#fed0ac" }),
	React.createElement("path", { d: "M0 19.2 32 38.4 64 19.2 32 0z", fill: "#d3976e" }),
	React.createElement("path", { d: "M50.9 27 19 7.8 13 11.4 45 30.6z", fill: "#89664c" }),
	React.createElement("path", { d: "m39.3 6.8l-7.1-4.4-5.9 3.6 7.1 4.3z", fill: "#d0d0d0" }),
	React.createElement("path", { d: "m50.8 27.1l-5.6 3.4v9.2l5.6-3.4z", fill: "#d3976e" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m62.5 22.1l-5.7 3.4v9.2l5.7-3.4z" }),
		React.createElement("path", { d: "m41.6 43.5l-7.7 4.6v12.6l7.7-4.7z" })
	),
	React.createElement("path", { d: "m45.2 56.1l5.6-3.4v-9.2l-5.6 3.4z", fill: "#d3976e" })
);
};
