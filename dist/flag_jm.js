
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement(
		"g",
		{ fill: "#699635" },
		React.createElement("path", { d: "M53.1,10.7c-11.7-11.6-30.6-11.6-42.3,0L32,27L53.1,10.7z" }),
		React.createElement("path", { d: "M10.9,53.3c11.7,11.6,30.6,11.6,42.3,0L32,37L10.9,53.3z" })
	),
	React.createElement(
		"g",
		{ fill: "#3e4347" },
		React.createElement("path", { d: "M58,47c5.3-9.2,5.3-20.7,0-29.9L38.6,32L58,47z" }),
		React.createElement("path", { d: "M6,17C0.7,26.3,0.7,37.7,6,47l19.5-15L6,17z" })
	),
	React.createElement("path", { d: "M53.1,10.7L32,27L10.9,10.7C9,12.6,7.3,14.7,6,17l19.4,15L6,47c1.3,2.3,3,4.5,4.9,6.3L32,37l21.1,16.3 c1.9-1.9,3.5-4,4.9-6.3L38.6,32L58,17C56.7,14.7,55,12.6,53.1,10.7z", fill: "#ffe62e" })
);
};
