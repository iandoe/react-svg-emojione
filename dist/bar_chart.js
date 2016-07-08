
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement(
		"g",
		{ fill: "#333" },
		React.createElement("path", { d: "m0 0h4v64h-4z" }),
		React.createElement("path", { d: "m0 60h64v4h-64z" })
	),
	React.createElement("path", { d: "m38.7 60h12v-53.3l-12 13.3z", fill: "#fb4f00" }),
	React.createElement("path", { d: "m21.3 60h12v-40l-12 13.3z", fill: "#5c750a" }),
	React.createElement("path", { d: "m4 60h12v-26.7l-12 13.4z", fill: "#106995" }),
	React.createElement("path", { d: "m33.3 20h13.3v40h-13.3z", fill: "#9aca0a" }),
	React.createElement("path", { d: "m16 33.3h13.3v26.7h-13.3z", fill: "#21adf1" }),
	React.createElement("path", { d: "m50.7 6.7h13.3v53.3h-13.3z", fill: "#fc9100" })
);
};
