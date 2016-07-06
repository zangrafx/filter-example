/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";

export default class ResultsPanel extends React.Component {
    static propTypes = {
        "Results": React.PropTypes.array.isRequired,
        "setSortByValue": React.PropTypes.func.isRequired,
        "sortBy": React.PropTypes.string.isRequired
    };
    handleClick = (evt, value) => {
        evt.preventDefault();
        this.props.setSortByValue(value);
    };
    render() {
        const DOWNWARDS_ARROW = String.fromCharCode(8595);
        var {Results, sortBy} = this.props;
        if (Results.length > 0) {
            return (
                <table>
                    <thead>
                        <tr>
                            <th>
                                <button
                                    onClick={evt => this.handleClick(evt, "Title")}
                                >
                                    {"Title" + (sortBy === "Title" ? DOWNWARDS_ARROW : "")}
                                </button>
                            </th>
                            <th>
                                <button
                                    onClick={evt => this.handleClick(evt, "Author")}
                                >
                                    {"Author" + (sortBy === "Author" ? DOWNWARDS_ARROW : "")}
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Results.map(Result => (
                            <tr key={Result.Id}>
                                <td>{Result.Title}</td><td>{Result.Author}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        }
        return <p>No results.</p>;
    }
}
