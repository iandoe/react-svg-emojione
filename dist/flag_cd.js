
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement(
		"g",
		{ fill: "#42ade2" },
		React.createElement("path", { d: "M10.8,10.8C2.1,19.5-0.1,32.2,4.1,43L43,4.1C32.2-0.1,19.5,2.1,10.8,10.8z" }),
		React.createElement("path", { d: "m53.2 53.2c8.7-8.7 10.9-21.4 6.7-32.2l-38.9 38.9c10.8 4.2 23.5 2 32.2-6.7" })
	),
	React.createElement("path", { d: "m53.2 10.8c-2-2-4.1-3.6-6.4-4.9l-40.9 40.9c1.3 2.3 2.9 4.5 4.9 6.4 2 2 4.1 3.6 6.4 4.9l40.9-40.9c-1.3-2.3-2.9-4.5-4.9-6.4", fill: "#c94747" }),
	React.createElement(
		"g",
		{ fill: "#ffce31" },
		React.createElement("path", { d: "m17.2 58.1c.6.3 1.2.7 1.9 1 .6.3 1.3.6 2 .9l38.8-39c-.3-.7-.5-1.3-.9-2-.3-.6-.6-1.2-1-1.9l-40.8 41" }),
		React.createElement("path", { d: "m44.9 4.9c-.7-.3-1.3-.6-2-.9l-38.8 39c.3.7.5 1.3.9 2 .3.6.6 1.2 1 1.9l40.8-41c-.6-.4-1.2-.7-1.9-1" }),
		React.createElement("path", { d: "m18 19.2l3.7 2.8-1.4-4.6 3.7-2.9h-4.6l-1.4-4.5-1.4 4.5h-4.6l3.7 2.9-1.4 4.6z" })
	)
);
};
