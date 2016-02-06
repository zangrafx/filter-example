/**
 * @license Copyright (c) 2016, Hypermedia
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";

export default React.createClass({
    "handleChange": function (evt) {
        this.props.setFilterValue(evt.target.value);
    },
    "render": function () {

        return (
            <div>
                <input type="text" onChange={evt => this.handleChange(evt)} />
            </div>
        );
    }
});
