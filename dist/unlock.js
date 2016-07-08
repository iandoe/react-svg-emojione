
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M2,28.3v31.4C2,62.1,3.9,64,6.3,64h51.4c2.4,0,4.3-1.9,4.3-4.3V28.3H2z", fill: "#ffce31" }),
	React.createElement("path", { d: "M62,24c0-2.4-1.9-4.3-4.3-4.3H6.3C3.9,19.6,2,21.6,2,24v4.3h60V24z", fill: "#ff8736" }),
	React.createElement(
		"g",
		{ fill: "#3e4347" },
		React.createElement("ellipse", { cx: "12.4", cy: "23.5", rx: "5.9", ry: "2.5" }),
		React.createElement("ellipse", { cx: "51.6", cy: "23.5", rx: "5.9", ry: "2.5" }),
		React.createElement("path", { d: "m36.6 56.4l-1.9-12.3c1.1-.8 1.9-2.2 1.9-3.7 0-2.5-2-4.6-4.6-4.6s-4.6 2.1-4.6 4.6c0 1.5.7 2.9 1.9 3.7l-1.9 12.3h9.2" })
	),
	React.createElement("path", { d: "m32 0c-5.6 0-10.7 2-14.8 5.3l2.9 2.9c3.3-2.7 7.4-4.3 11.9-4.3 10.4 0 18.9 8.7 19.6 19.7v1.4c2.2 0 3.8-.6 3.8-1.4 0-13-10.5-23.6-23.4-23.6", fill: "#dfe9ef" }),
	React.createElement("path", { d: "m51.6 23.5c-.7-10.9-9.2-19.6-19.6-19.6-4.4 0-8.6 1.6-11.9 4.3l2.9 2.8c2.4-1.8 5.5-3 9-3 9.5 0 15.5 8.4 15.5 15.5 0 .8 2 1.4 4.2 1.4l-.1-1.4", fill: "#b0bdc6" })
);
};
