
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "m62 32c0-16.6-13.4-30-30-30v60c16.6 0 30-13.4 30-30", fill: "#f9f9f9" }),
	React.createElement("path", { d: "M2,32c0,16.6,13.4,30,30,30V2C15.4,2,2,15.4,2,32z", fill: "#699635" }),
	React.createElement(
		"g",
		{ fill: "#ed4c5c" },
		React.createElement("path", { d: "m40.7 39l-.1-5.4 5.4-1.6-5.4-1.6.1-5.4-3.3 4.3-5.4-1.6 3.3 4.3-3.3 4.3 5.4-1.6z" }),
		React.createElement("path", { d: "m37.2 44c-6.6 0-11.9-5.4-11.9-12s5.3-12 11.9-12c2.5 0 4.8.8 6.8 2.1-2.7-3.1-6.7-5.1-11.2-5.1-8.2 0-14.8 6.7-14.8 15 0 8.3 6.6 15 14.8 15 4.5 0 8.5-2 11.2-5.1-1.9 1.3-4.2 2.1-6.8 2.1" })
	)
);
};
