
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m48.6 52h-33.2c-1.9 0-3.4-1.5-3.4-3.3v-23.4c0-1.8 1.5-3.3 3.4-3.3h33.2c1.9 0 3.4 1.5 3.4 3.3v23.3c0 1.9-1.5 3.4-3.4 3.4m-33.2-28c-.8 0-1.4.6-1.4 1.3v23.3c0 .7.6 1.3 1.4 1.3h33.2c.8 0 1.4-.6 1.4-1.3v-23.3c0-.7-.6-1.3-1.4-1.3h-33.2" }),
		React.createElement("path", { d: "m47 32h-3v16h3c.6 0 1-.4 1-1v-14c0-.6-.4-1-1-1" }),
		React.createElement("path", { d: "m38 32v-4c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v4h-4v16h20v-16h-4m-2 0h-8v-4h8v4" }),
		React.createElement("path", { d: "m17 32c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3v-16h-3" }),
		React.createElement("path", { d: "m42 14h-14.6c-.7-1.2-2-2-3.4-2-2.2 0-4 1.8-4 4s1.8 4 4 4c1.5 0 2.8-.8 3.4-2h2.6l2-2 2 2h2l2-2 2 2h2l2-2-2-2m-19 4c-1.1 0-2-.9-2-2s.9-2 2-2c1.1 0 2 .9 2 2s-.9 2-2 2" })
	)
);
};
