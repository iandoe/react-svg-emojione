
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M62,52c0,5.5-4.5,10-10,10H12C6.5,62,2,57.5,2,52V12C2,6.5,6.5,2,12,2h40c5.5,0,10,4.5,10,10V52z", fill: "#ff5a79" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "M32,12c0,0-10,8.6-22.2,14.6l3.2,6.1c0,0,7.9-2.6,19-11.5c11.1,8.9,19,11.5,19,11.5l3.2-6.1 C42,20.6,32,12,32,12z" }),
		React.createElement("path", { d: "m20.9 29.5h22.3v5.1h-22.3z" }),
		React.createElement("path", { d: "m16 36.8v15.2h32v-15.2h-32m25.6 9.8h-19.2v-4.3h19.1l.1 4.3" })
	)
);
};
