
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "m2 2h60v60h-60z", fill: "#333" }),
	React.createElement("path", { d: "m10 10h44v44h-44z", fill: "#d0d0d0" })
);
};
