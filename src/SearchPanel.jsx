/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";

export default class SearchPanel extends React.Component {
    static propTypes = {
        "setFilterValue": React.PropTypes.func.isRequired
    };
    handleChange = evt => this.props.setFilterValue(evt.target.value);
    handleClick = evt => {
        evt.preventDefault();
        this.props.setFilterValue("");
        this.refs.search.value = "";
    };
    render() {

        return (
            <div className="SearchPanel">
                <label htmlFor="search">Filter by title: </label>
                <input id="search" ref="search" type="text" onChange={evt => this.handleChange(evt)} />
                <input type="button" value="Reset" onClick={this.handleClick} />
            </div>
        );
    }
}
