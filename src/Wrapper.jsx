/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";
import ResultsPanel from "src/ResultsPanel";
import SearchPanel from "src/SearchPanel";

export default React.createClass({
    "getInitialState": function () {
        return {
            "filter": "",
            "sortBy": ""
        };
    },
    "propTypes": {
        "Books": React.PropTypes.array.isRequired
    },
    "setFilterValue": function (value) {
        this.setState({
            "filter": value
        });
    },
    "setSortByValue": function (value) {
        this.setState({
            "sortBy": value
        });
    },
    "containsFilterValue": function (word, value) {
        return word.indexOf(value) !== -1;
    },
    "filterList": function (list) {
        return list.filter(
            element => this.containsFilterValue(element.Title.toLowerCase(), this.state.filter)
        );
    },
    "sortList": function (list) {
        return list.sort(
            (a, b) => {
                var A = a[this.state.sortBy].toLowerCase();
                var B = b[this.state.sortBy].toLowerCase();
                if (A < B) {
                    return -1;
                }
                if (A > B) {
                    return 1;
                }
                return 0;
            }
        );
    },
    "render": function () {
        var Results = this.filterList(this.props.Books);
        if (this.state.sortBy && Results) {
            Results = this.sortList(Results);
        }
        return (
            <div>
                <h1>List of books</h1>
                <SearchPanel setFilterValue={this.setFilterValue} />
                <ResultsPanel
                    Results={Results}
                    setSortByValue={this.setSortByValue}
                    sortBy={this.state.sortBy}
                />
            </div>
        );
    }
});

