
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M62,32c0,13.1-8.3,24.2-20,28.3V3.7C53.7,7.8,62,18.9,62,32z", fill: "#75a843" }),
	React.createElement("path", { d: "M2,32C2,18.9,10.4,7.8,22,3.7v56.6C10.4,56.2,2,45.1,2,32z", fill: "#ed4c5c" }),
	React.createElement("path", { d: "m42 60.3c-3.1 1.1-6.5 1.7-10 1.7s-6.9-.6-10-1.7v-56.6c3.1-1.1 6.5-1.7 10-1.7s6.9.6 10 1.7v56.6", fill: "#ffce31" })
);
};
