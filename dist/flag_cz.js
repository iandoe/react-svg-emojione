
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "m10.8 10.8v21.2h51.2c0-16.6-13.4-30-30-30-8.3 0-15.8 3.4-21.2 8.8", fill: "#f9f9f9" }),
	React.createElement("path", { d: "m10.8 32v21.2c5.4 5.4 12.9 8.8 21.2 8.8 16.6 0 30-13.4 30-30h-51.2", fill: "#ed4c5c" }),
	React.createElement("path", { d: "M10.8,10.8C5.4,16.2,2,23.7,2,32s3.4,15.8,8.8,21.2L32,32L10.8,10.8z", fill: "#428bc1" })
);
};
