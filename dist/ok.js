
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M62,52c0,5.5-4.5,10-10,10H12C6.5,62,2,57.5,2,52V12C2,6.5,6.5,2,12,2h40c5.5,0,10,4.5,10,10V52z", fill: "#4fd1d9" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m12 32.1c0-2 .3-3.6.9-5 .5-1 1.1-1.9 1.9-2.7.8-.8 1.7-1.4 2.7-1.7 1.3-.5 2.8-.8 4.4-.8 3 0 5.5.9 7.3 2.6 1.8 1.8 2.7 4.2 2.7 7.4 0 3.1-.9 5.6-2.7 7.3-1.7 1.9-4.1 2.8-7.2 2.8-3.1 0-5.5-.9-7.3-2.6-1.8-1.8-2.7-4.2-2.7-7.3m4.3-.1c0 2.2.5 3.8 1.6 5 1.1 1.1 2.4 1.7 4.1 1.7 1.7 0 3-.6 4.1-1.7 1.1-1.1 1.6-2.8 1.6-5 0-2.2-.5-3.9-1.6-5s-2.4-1.6-4.1-1.6c-1.7 0-3.1.6-4.1 1.7-1.1 1-1.6 2.7-1.6 4.9" }),
		React.createElement("path", { d: "M34,42V22h4v8.9l8.1-8.9h5.4l-7.5,7.8L52,42h-5.2l-5.5-9.4L38,36v6H34z" })
	)
);
};
