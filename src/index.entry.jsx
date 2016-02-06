/**
 * Copyright (c) 2016-present, zangrafx
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

import Wrapper from "./Wrapper";
import React from "react";
import ReactDOM from "react-dom";
var Books = [
    {
        "Author": "Juliusz Verne",
        "Title": "Tajemnicza wyspa"
    },
    {
        "Author": "Zbigniew Nienacki",
        "Title": "Pan Samochodzik"
    },
    {
        "Author": "Karol May",
        "Title": "Winnetou"
    },
    {
        "Author": "Henryk Sienkiewicz",
        "Title": "Krzyżacy"
    },
    {
        "Author": "Juliusz Verne",
        "Title": "Dwa lata wakacji"
    }
];
ReactDOM.render(<Wrapper Books={Books} />, document.getElementById("app"));
