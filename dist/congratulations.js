
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ff5a79", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m27.4 39.2c-.7-1-1.9-2.5-3.2-3.9v14.2h-4.8v-12.3c-1.4 1.2-2.7 2.3-4.1 3.2-.4-1.3-1.5-3.8-2.2-4.6 3.8-2.1 7.5-5.8 9.8-9.9h-8.2v-4.6h4.8v-6.8h4.9v6.8h1.3l.9-.2 2.7 1.7c-1 2.7-2.3 5.2-3.9 7.6 1.8 1.4 4.5 3.9 5.3 4.7l-3.3 4.1" }),
		React.createElement("path", { d: "m47.3 39.2c-.1 4.7-.3 5.4-.9 5.4h-1.2c-.6 0-.6-.1-.6-1.4v-11.9h4.1v-16.3h-17.6v16.3h3c-.4 6.8-1.4 11.1-6.5 13.8 1 .9 2.2 2.7 2.8 3.9 6.3-3.4 7.7-9.1 8.2-17.7h1.8v11.9c0 4.1.8 5.4 4.1 5.4h2.5c2.7 0 3.7-1.6 4-7.7-1.1-.3-2.9-1-3.7-1.7m-3.2-12.5h-8.5v-7.1h8.5v7.1" })
	)
);
};
