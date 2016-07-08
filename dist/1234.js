
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m22.1 17.9l-3.4 1.3-.7-2.5 4.6-1.7h3.4v14h-3.9v-11.1" }),
		React.createElement("path", { d: "m35.5 29v-1.9l1.8-1.6c3.1-2.7 4.6-4.2 4.6-5.8 0-1.1-.7-2-2.3-2-1.2 0-2.3.6-3 1.1l-.9-2.3c1.1-.8 2.7-1.4 4.6-1.4 3.2 0 4.9 1.8 4.9 4.3 0 2.3-1.7 4.2-3.8 5.9l-1.3 1.1h5.3v2.6h-9.9" }),
		React.createElement("path", { d: "m19.7 45.7c.6.3 1.9.8 3.3.8 1.7 0 2.6-.8 2.6-1.8 0-1.3-1.4-1.9-2.9-1.9h-1.4v-2.3h1.3c1.1 0 2.5-.4 2.5-1.6 0-.8-.7-1.4-2.1-1.4-1.2 0-2.4.5-3 .8l-.6-2.3c.9-.5 2.5-1 4.4-1 3 0 4.7 1.5 4.7 3.4 0 1.4-.9 2.6-2.6 3.1 1.7.3 3.1 1.5 3.1 3.3 0 2.4-2.2 4.1-5.8 4.1-1.8 0-3.4-.5-4.2-1l.7-2.2" }),
		React.createElement("path", { d: "m40.8 49v-3.3h-6.8v-2.1l5.8-8.5h4.4v8.2h1.8v2.5h-1.8v3.2h-3.4m0-5.8v-3.1c0-.8 0-1.7.1-2.6h-.1c-.5.9-.9 1.7-1.4 2.6l-2 3.1h3.4" })
	)
);
};
