/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";
import ResultsPanel from "src/ResultsPanel";
import SearchPanel from "src/SearchPanel";

export default class Wrapper extends React.Component {
    static propTypes = {
        "Books": React.PropTypes.array.isRequired
    };
    state = {
        "filter": "",
        "sortBy": ""
    };
    setFilterValue = value => {
        this.setState({
            "filter": value
        });
    };
    setSortByValue = value => {
        this.setState({
            "sortBy": value
        });
    };
    containsFilterValue = (word, value) => {
        return word.indexOf(value) !== -1;
    };
    filterList = list => {
        return list.filter(
            element => this.containsFilterValue(element.Title.toLowerCase(), this.state.filter)
        );
    };
    sortList = list => {
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
    };
    render() {
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
}
