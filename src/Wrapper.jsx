/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";
import SearchPanel from "./SearchPanel";
import ResultsPanel from "./ResultsPanel";

export default React.createClass({
    "getInitialState": function () {
        return {
            "filter": "",
            "sortBy": null
        };
    },
    "setFilterValue": function (value) {
        this.setState({
            "filter": value
        });
    },
    "setSortByValue": function (value) {
        if (this.props.Books[0].hasOwnProperty(value)) {
            this.setState({
                "sortBy": value
            });
        } else {
            this.setState({
                "sortBy": null
            });
        }
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
                <SearchPanel setFilterValue={this.setFilterValue} />
                <ResultsPanel setSortByValue={this.setSortByValue} Results={Results} />
            </div>
        );
    }
});

