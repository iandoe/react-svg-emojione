
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M32,2C19.3,2,8.5,9.9,4.1,21h55.8C55.5,9.9,44.7,2,32,2z", fill: "#f42f4c" }),
	React.createElement("path", { d: "M32,62c12.7,0,23.5-7.9,27.9-19H4.1C8.5,54.1,19.3,62,32,62z", fill: "#699635" }),
	React.createElement("path", { d: "m62 32c0-3.1-.5-6.2-1.4-9h-57.2c-.9 2.8-1.4 5.9-1.4 9s.5 6.2 1.4 9h57.2c.9-2.8 1.4-5.9 1.4-9", fill: "#2a5f9e" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m60.3 22c-.1-.3-.3-.7-.4-1h-55.8c-.1.3-.3.7-.4 1-.1.3-.2.7-.3 1h57.2c-.1-.3-.2-.7-.3-1" }),
		React.createElement("path", { d: "m3.7 42c.1.3.3.7.4 1h55.8c.1-.3.3-.7.4-1 .1-.3.2-.7.3-1h-57.2c.1.3.2.7.3 1" })
	)
);
};
