
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M2,32c0,13.1,8.4,24.2,20,28.3V3.7C10.4,7.8,2,18.9,2,32z", fill: "#83bf4f" }),
	React.createElement("path", { d: "m62 32c0-13.1-8.3-24.2-20-28.3v56.6c11.7-4.1 20-15.2 20-28.3", fill: "#c94747" }),
	React.createElement("path", { d: "M22,60.3c3.1,1.1,6.5,1.7,10,1.7s6.9-0.6,10-1.7V3.7C38.9,2.6,35.5,2,32,2s-6.9,0.6-10,1.7V60.3z", fill: "#ffce31" })
);
};
