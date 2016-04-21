import React from "react";

var Header = React.createClass({displayName: "Header",

  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "React Component Example")
      )
    );
  }
});

export default Header;
