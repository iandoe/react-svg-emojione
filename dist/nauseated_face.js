
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#c7e755", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#425e21" },
		React.createElement("circle", { cx: "20.5", cy: "27", r: "4.5" }),
		React.createElement("circle", { cx: "43.5", cy: "27", r: "4.5" }),
		React.createElement("path", { d: "m37.4 43.2h-10.8c-.7 0-.7-2.5 0-2.5h10.7c.8 0 .8 2.5.1 2.5" }),
		React.createElement("path", { d: "m23.7 35c1 2 1.6 4.4 1.6 7 0 2.6-.6 5-1.6 7 2.1-.9 3.6-3.7 3.6-7s-1.5-6.1-3.6-7" }),
		React.createElement("path", { d: "m40.3 49c-1-2-1.6-4.4-1.6-7 0-2.6.6-5 1.6-7-2.1.9-3.6 3.7-3.6 7s1.5 6 3.6 7" })
	),
	React.createElement(
		"g",
		{ fill: "#75a843" },
		React.createElement("path", { d: "m25.6 15.9c-3.2 2.7-7.5 3.9-11.7 3.1-.6-.1-1.1 2-.4 2.2 4.8.9 9.8-.5 13.5-3.6.5-.5-1-2.1-1.4-1.7" }),
		React.createElement("path", { d: "m50.1 18.9c-4.2.7-8.5-.4-11.7-3.1-.4-.4-2 1.2-1.4 1.7 3.7 3.2 8.7 4.5 13.5 3.6.7-.2.2-2.3-.4-2.2" })
	),
	React.createElement(
		"g",
		{ fill: "#ff717f", opacity: ".5" },
		React.createElement("path", { d: "m51.7 30.3c4.9 0 8.8 4 8.8 8.8 0 4.9-4 8.8-8.8 8.8-4.9 0-8.8-4-8.8-8.8-.1-4.8 3.9-8.8 8.8-8.8", opacity: ".8" }),
		React.createElement("circle", { cx: "12.3", cy: "39.1", opacity: ".8", r: "8.8" })
	)
);
};
