
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M17,6C6.3,12.2,0.9,23.9,2.2,35.3L49.8,7.9C40.5,1,27.7-0.1,17,6z", fill: "#83bf4f" }),
	React.createElement("path", { d: "m14.2 56.1c9.3 6.9 22.2 8 32.8 1.8 10.7-6.1 16.1-17.8 14.8-29.3l-47.6 27.5", fill: "#428bc1" }),
	React.createElement("path", { d: "m58 17c-1.4-2.4-3.1-4.5-5-6.4l-50 28.9c.7 2.6 1.7 5.1 3 7.5 1.4 2.4 3.1 4.5 5 6.4l50-28.9c-.6-2.6-1.6-5.1-3-7.5", fill: "#3e4347" }),
	React.createElement(
		"g",
		{ fill: "#ffce31" },
		React.createElement("path", { d: "m61.5 26.5c-.1-.7-.3-1.4-.5-2l-50 28.9c.5.5 1 1 1.5 1.4.5.5 1.1.9 1.7 1.3l47.6-27.5c-.1-.7-.2-1.4-.3-2.1" }),
		React.createElement("path", { d: "m51.5 9.2c-.5-.5-1.1-.9-1.7-1.3l-47.6 27.4c.1.7.2 1.4.3 2.1.1.7.3 1.4.5 2l50-28.8c-.5-.5-1-1-1.5-1.4" })
	)
);
};
