
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement("path", { d: "m20.2 17.5h6.4l11.5 20.2v-20.2h5.6v29h-6.1l-11.7-20.6v20.6h-5.6l-.1-29", fill: "#fff" })
);
};
