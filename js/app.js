import React, { useState } from "react";
import ReactDOM from "react-dom";
import { getTask } from "./api/tasks";

import App from './components/App'

ReactDOM.render(<App/>, document.querySelector("#app"));