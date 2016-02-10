/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";

export default React.createClass({
    "getDefaultProps": function () {
        return {
            "sortBy": React.PropTypes.string.isRequired,
            "setSortByValue": React.PropTypes.func.isRequired,
            "Results": React.PropTypes.array.isRequired
        };
    },
    "handleClick": function (evt, value) {
        evt.preventDefault();
        this.props.setSortByValue(value);
    },
    "render": function () {
        const DOWNWARDS_ARROW = String.fromCharCode(8595);
        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            <button
                                onClick={(evt) => this.handleClick(evt, "Title")}
                            >
                                {"Title" + (this.props.sortBy === "Title" ? DOWNWARDS_ARROW : "")}
                            </button>
                        </th>
                        <th>
                            <button
                                onClick={(evt) => this.handleClick(evt, "Author")}
                            >
                                {"Author" + (this.props.sortBy === "Author" ? DOWNWARDS_ARROW : "")}
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.Results.map((Result) => (
                        <tr key={Result.Id}>
                            <td>{Result.Title}</td><td>{Result.Author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
});
