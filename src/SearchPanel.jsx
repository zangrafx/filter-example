/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";

export default React.createClass({
    "propTypes": {
        "setFilterValue": React.PropTypes.func.isRequired
    },
    "handleChange": function (evt) {
        this.props.setFilterValue(evt.target.value);
    },
    "handleClick": function (evt) {
        evt.preventDefault();
        this.props.setFilterValue("");
        this.refs.search.value = "";
    },
    "render": function () {

        return (
            <div className="SearchPanel">
                Filter by title: <input ref="search" type="text" onChange={evt => this.handleChange(evt)} />
                <input type="button" value="Reset" onClick={this.handleClick} />
            </div>
        );
    }
});
