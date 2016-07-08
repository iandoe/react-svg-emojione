
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M22,60.3V3.7C10.4,7.8,2,18.9,2,32S10.4,56.2,22,60.3z", fill: "#f9f9f9" }),
	React.createElement("path", { d: "m22 32h40c0-16.6-13.4-30-30-30-3.5 0-6.9.6-10 1.7v28.3", fill: "#ed4c5c" }),
	React.createElement("path", { d: "m22 32v28.3c3.1 1.1 6.5 1.7 10 1.7 16.6 0 30-13.4 30-30h-40", fill: "#699635" })
);
};
