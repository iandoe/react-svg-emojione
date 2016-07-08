
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement(
		"g",
		{ fill: "#4d5357" },
		React.createElement("path", { d: "m2 2v7.5h10.3v24.5h7.5v-24.5h10.3v-7.5z" }),
		React.createElement("path", { d: "m54.5 2l-6.6 13.2-6.5-13.2h-7.5v32h7.5v-13.2l6.5 13.2 6.6-13.2v13.2h7.5v-32z" })
	)
);
};
