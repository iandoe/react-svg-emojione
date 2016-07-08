
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m47.3 23.7l-11.3-6.7v3.8h-11.6c-2.8 0-5.4 1.1-7.4 3.1s-3 4.8-3 7.6c0 1.2.2 2.3.5 3.4.2-.3.5-.7.8-1 .7-.8 1.6-1.4 2.6-1.8.6-.2 1.2-.4 1.8-.5 0 0 0-.1 0-.1 0-2.7 2.1-4.9 4.7-4.9h11.6v3.8l11.3-6.7" }),
		React.createElement("path", { d: "m49.5 28.1l-5.2 3.1c0 .1 0 .2 0 .4 0 2.7-2.1 4.9-4.7 4.9h-12.4c-1.2-2.3-3.5-3.8-6.2-3.8-3.9 0-7 3.2-7 7.2s3.2 7.2 7 7.2c3.1 0 5.7-2 6.6-4.8h11.9c2.8 0 5.4-1.1 7.4-3.1 2-2 3.1-4.7 3.1-7.6 0-1.3-.2-2.4-.5-3.5m-28.5 16.5c-2.6 0-4.7-2.2-4.7-4.8 0-2.7 2.1-4.8 4.7-4.8 2.6 0 4.7 2.2 4.7 4.8.1 2.6-2.1 4.8-4.7 4.8" }),
		React.createElement("path", { d: "m21.8 42.7h-1.1v-4.3c-.4.4-.9.7-1.4.9v-1c.3-.1.6-.3.9-.5.3-.3.6-.6.7-.9h.9v5.8" })
	)
);
};
