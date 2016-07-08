
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#f42f4c", r: "30" }),
	React.createElement("path", { d: "m23.3 44l3.3-9.9-8.6-6.2h10.7l3.3-9.9 3.3 9.9h10.7l-8.7 6.1 3.3 9.9-8.6-6-8.7 6.1m10.5-7.4l2.7 1.9-1-3.1-1.7 1.2m-5.3-1.2l-1 3.1 2.7-1.9-1.7-1.2m.7-2.1l2.8 2 2.8-2-1.1-3.2h-3.5l-1 3.2m-4.5-3.2l2.7 1.9.6-1.9h-3.3m11.9 1.9l2.7-1.9h-3.3l.6 1.9m-5.6-4.1h2l-1-3.1-1 3.1", fill: "#4f682e" })
);
};
