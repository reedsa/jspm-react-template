"use strict";

import React from "react";
import Header from "views/header/Header";
import Content from "views/content/Content";

React.render(<Header />, document.getElementById("header"));
React.render(<Content />, document.getElementById("content"));
