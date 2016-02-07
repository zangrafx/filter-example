/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";

export default React.createClass({
    "render": function () {

        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            <strong onClick={() => this.props.setSortByValue("Title")}>Name</strong>
                        </th>
                        <th>
                            <strong onClick={() => this.props.setSortByValue("Author")}>Author</strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.Results.map((Result, index) => (
                        <tr key={index}>
                            <td>{Result.Title}</td><td>{Result.Author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
});
