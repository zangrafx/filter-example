/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";
import ResultsPanel from "src/ResultsPanel";
import SearchPanel from "src/SearchPanel";

export default React.createClass({
    "propTypes": {
        "Books": React.PropTypes.array.isRequired
    },
    "render": function () {
        var Results = this.props.filterList(this.props.Books);
        if (this.props.sortBy && Results) {
            Results = this.props.sortList(Results);
        }
        return (
            <div>
                <h1>List of books</h1>
                <SearchPanel setFilterValue={this.props.setFilterValue} />
                <ResultsPanel
                    Results={Results}
                    setSortByValue={this.props.setSortByValue}
                    sortBy={this.props.sortBy}
                />
            </div>
        );
    }
});

