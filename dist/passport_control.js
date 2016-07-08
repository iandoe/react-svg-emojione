
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m34.3 23c0 4.8 9.6 4.8 9.6 0 0-2.6 0-4.8 0-4.8h-9.6l-3.8 2.9h3.8c0 .6 0 1.3 0 1.9" }),
		React.createElement("path", { d: "m43.8 17.3v-3.8h-10.5l1 3.8z" }),
		React.createElement("path", { d: "m24.6 25.6l-10.3-2.2v9.9l10.3 2.1z" }),
		React.createElement("path", { d: "m24.6 19.1l-10.3 2.1 10.3 2.2z" }),
		React.createElement("path", { d: "m30.9 43.1l14.4-14.4h-8.7-5.7l-6.7 11.9-1.9-3.4h-5.7l4.8 8.6h5.7l3.8-6.9z" }),
		React.createElement("path", { d: "m32.6 43.8h15.1v-15.1z" }),
		React.createElement("path", { d: "m30.9 45.5h16.8v5h-16.8z" })
	)
);
};
