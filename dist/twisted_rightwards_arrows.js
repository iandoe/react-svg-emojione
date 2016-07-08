
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m49 39.6l-6.4 6.4v-3.9h-5.6c0 0 0 0 0 0-1.6 0-4.5-1-5.7-4.7l-1.6-4.4-1.6-4.6c-.3-1.1-.8-1.2-1-1.3h-12.1v-5h12.2c0 0 0 0 0 0 1.6 0 4.5 1 5.7 4.7l1.6 4.4 1.6 4.6c.3 1.1.8 1.2 1 1.3h5.5v-3.9l6.4 6.4" }),
		React.createElement("path", { d: "m28.4 35l-.2.7c-.3 1.1-.8 1.2-1 1.3h-12.2v5h12.2c0 0 0 0 0 0 .9 0 2.3-.3 3.5-1.4-.5-.8-1-1.6-1.3-2.7l-1-2.9" }),
		React.createElement("path", { d: "m35.8 29l.3-.8c.3-1.1.8-1.2 1-1.3h5.5v3.9l6.4-6.4-6.4-6.4v3.9h-5.6c0 0 0 0 0 0-.9 0-2.4.4-3.6 1.4.6.8 1 1.7 1.4 2.8l1 2.9" })
	)
);
};
