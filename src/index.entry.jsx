/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import Baobab from "baobab";
import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "src/Wrapper";

var treeData = {
    "sortBy": "",
    "filter": "",
    "Books": [
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
    ]
};

var tree = new Baobab(treeData);
var books = tree.select("Books");
var sortBy = tree.select("sortBy");
var filter = tree.select("filter");
function sortList(list) {
    return list.sort(
        (a, b) => {
            var A = a[sortBy.get()].toLowerCase();
            var B = b[sortBy.get()].toLowerCase();
            if (A < B) {
                return -1;
            }
            if (A > B) {
                return 1;
            }
            return 0;
        }
    );
}
function setSortByValue(value) {
    sortBy.set(value);
}
function setFilterValue(value) {
    filter.set(value);
}
function containsFilterValue(word, value) {
    return word.indexOf(value) !== -1;
}
function filterList(list) {
    return list.filter(
        element => containsFilterValue(element.Title.toLowerCase(), filter.get())
    );
}
function render() {
    ReactDOM.render(<Wrapper
        sortBy={sortBy.get()}
        setSortByValue={setSortByValue}
        sortList={sortList}
        Books={books.get()}
        filterList={filterList}
        setFilterValue={setFilterValue}
    />, document.getElementById("app"));
}
tree.on("update", render);
render();
