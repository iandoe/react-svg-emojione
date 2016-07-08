
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "M33.7,48v-6.4H20v-5.3L34.5,16h5.4v20.2H44v5.4h-4.1V48H33.7z M33.7,36.2V25.3L26,36.2H33.7z", fill: "#fff" })
);
};
