
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "m24.5 35.5c-6.7 7.4-21.6 25.4-23.9 27.6 0 0-.1 0-.1.1-.9.9-.6 1.2.3.3 2-2 20.2-17.2 27.6-23.9l-3.9-4.1", fill: "#d0d0d0" }),
	React.createElement("path", { d: "m25.5 14.7h31.7v16.2h-31.7z", fill: "#c94747", transform: "matrix(.7071-.7071.7071.7071-3.9661 35.935)" }),
	React.createElement(
		"g",
		{ fill: "#ed4c5c" },
		React.createElement("path", { d: "m43.6 54.6c.9-7.8-2.5-17.1-9.8-24.3s-16.6-10.7-24.4-9.9l34.2 34.2" }),
		React.createElement("path", { d: "m64 22.9c-5.2.6-11.4-1.7-16.3-6.6-4.9-4.9-7.2-11.1-6.6-16.3l22.9 22.9" })
	)
);
};
