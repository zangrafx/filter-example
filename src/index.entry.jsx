/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "src/Wrapper";
import {observable} from "mobx";

var Books = [
    {
        "Author": "Juliusz Verne",
        "Title": "Tajemnicza wyspa",
        "Id": "dd29ecf524b030a65261e3059c48ab9e1ecb2585"
    },
    {
        "Author": "Zbigniew Nienacki",
        "Title": "Pan Samochodzik",
        "Id": "78b9b27d8c62a4a5b15589942640683eb0a14e5f"
    },
    {
        "Author": "Karol May",
        "Title": "Winnetou",
        "Id": "b12d07c4786afb687b82ccef63db4df16da8952c"
    },
    {
        "Author": "Henryk Sienkiewicz",
        "Title": "Krzyżacy",
        "Id": "66b531b9342d6c1f88908c59f7edbcddc4e61e73"
    },
    {
        "Author": "Juliusz Verne",
        "Title": "Dwa lata wakacji",
        "Id": "a0f1490a20d0211c997b44bc357e1972deab8ae3"
    }
];

var appState = observable({
    "filter": "",
    "sortBy": ""
});

appState.setFilterValue = function (value) {
    appState.filter = value;
};

appState.setSortByValue = function (value) {
    appState.sortBy = value;
};

ReactDOM.render(<Wrapper Books={Books} appState={appState} />, document.getElementById("app"));
