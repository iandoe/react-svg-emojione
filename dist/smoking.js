
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "m0 50h26v14h-26z", fill: "#f2b200" }),
	React.createElement("path", { d: "m26 50h34v14h-34z", fill: "#dce5e5" }),
	React.createElement("path", { d: "m60 50h4v14h-4z", fill: "#ff8736" }),
	React.createElement("path", { d: "M33.5,16C28.4,35.1,43.9,9,64,47C53.3,32.9,18.8,43.2,4.3,27.5C-15.8,5.8,41.9-15.6,33.5,16z", fill: "#abc2c6" })
);
};
