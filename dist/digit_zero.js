
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m32 16c3 0 5.3 1.1 7 3.2 2 2.6 3 6.8 3 12.8 0 5.9-1 10.2-3 12.8-1.7 2.1-4 3.2-7 3.2-3 0-5.4-1.2-7.2-3.5-1.9-2.4-2.8-6.5-2.8-12.6 0-5.9 1-10.1 3-12.7 1.7-2.1 4-3.2 7-3.2m0 5c-.7 0-1.4.2-1.9.7s-1 1.3-1.3 2.5c-.4 1.6-.6 4.2-.6 7.8 0 3.7.2 6.2.5 7.6.4 1.4.8 2.3 1.4 2.7.6.5 1.2.7 1.9.7.7 0 1.4-.2 1.9-.7.6-.5 1-1.3 1.3-2.5.4-1.5.6-4.1.6-7.8 0-3.7-.2-6.2-.5-7.6-.4-1.4-.8-2.3-1.4-2.8-.6-.4-1.2-.6-1.9-.6", fill: "#fff" })
);
};