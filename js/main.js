"use strict";

import React from "react";
import Header from "views/header/Header";
import Content from "views/content/Content";

React.render(React.createElement(Header, null), document.getElementById("header"));
React.render(React.createElement(Content, null), document.getElementById("content"));
