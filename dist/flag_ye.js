
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M32,2C18.9,2,7.8,10.4,3.7,22h56.6C56.2,10.4,45.1,2,32,2z", fill: "#c94747" }),
	React.createElement("path", { d: "M32,62c13.1,0,24.2-8.3,28.3-20H3.7C7.8,53.7,18.9,62,32,62z", fill: "#3e4347" }),
	React.createElement("path", { d: "M3.7,22C2.6,25.1,2,28.5,2,32s0.6,6.9,1.7,10h56.6c1.1-3.1,1.7-6.5,1.7-10s-0.6-6.9-1.7-10H3.7z", fill: "#f9f9f9" })
);
};
