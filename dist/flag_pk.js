
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M17,58V6C8,11.2,2,20.9,2,32S8,52.8,17,58z", fill: "#f9f9f9" }),
	React.createElement("path", { d: "M32,2c-5.5,0-10.6,1.5-15,4v52c4.4,2.6,9.5,4,15,4c16.6,0,30-13.4,30-30S48.6,2,32,2z", fill: "#699635" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m38 38.1c-6.1 0-11-4.8-11-10.8 0-2.9 1.1-5.4 3-7.4-4.1 2.1-7 6.4-7 11.3 0 7 5.8 12.7 13 12.7s13-5.7 13-12.7c0-.7-.1-1.4-.2-2-.9 5.1-5.4 8.9-10.8 8.9" }),
		React.createElement("path", { d: "m40 19.9l2.5-1.9-1 3.1 2.5 1.8-3 .1-1 3-1-3-3-.1 2.5-1.8-1-3.1z" })
	)
);
};
