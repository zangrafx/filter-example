/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";
import ResultsPanel from "src/ResultsPanel";
import SearchPanel from "src/SearchPanel";
import {observer} from "mobx-react";

@observer
export default class Wrapper extends React.Component {
    static propTypes = {
        "Books": React.PropTypes.array.isRequired
    };
    containsFilterValue = (word, value) => {
        return word.indexOf(value) !== -1;
    };
    filterList = list => {
        return list.filter(
            element => this.containsFilterValue(element.Title.toLowerCase(), this.props.appState.filter)
        );
    };
    sortList = list => {
        return list.sort(
            (a, b) => {
                var A = a[this.props.appState.sortBy].toLowerCase();
                var B = b[this.props.appState.sortBy].toLowerCase();
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
        if (this.props.appState.sortBy && Results) {
            Results = this.sortList(Results);
        }
        return (
            <div>
                <h1>List of books</h1>
                <SearchPanel setFilterValue={this.props.appState.setFilterValue} />
                <ResultsPanel
                    Results={Results}
                    setSortByValue={this.props.appState.setSortByValue}
                    sortBy={this.props.appState.sortBy}
                />
            </div>
        );
    }
}
