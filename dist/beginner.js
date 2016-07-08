
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "m32 20.8v41.2l20-18.8v-41.2z", fill: "#24bac5" }),
	React.createElement("path", { d: "m12 2v41.2l20 18.8v-41.2z", fill: "#ffce31" }),
	React.createElement("path", { d: "M32 20.8 12 2 12 43.2 32 62 52 43.2 52 2z", fill: "none", stroke: "#3e4347", strokeLinecap: "round", strokeWidth: "3" })
);
};
