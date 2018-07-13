import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class Second extends Component {
    render() {
        return <div className="slide" id="instruction1">

            <br/><br/>
            <p className="block-text"> Welcome to the intuitive physics test! You will see videos representing objects moving in a virtual environment.
                They have been created using software similar to that used in computer
                games and animation movies.</p>
            <p className="block-text">Some are simple: </p>
            <p align="center"><img src="https://s3-eu-west-1.amazonaws.com/ronan.gif.com/video.gif"
                                   width="256"/>
                <img src="train/047_block_C1_test_visible_dynamic_1/1/scene/video.gif" width="256"/></p>
            <p align="center"><img src="train/048_block_C1_test_visible_dynamic_1/1/scene/video.gif"
                                   width="256"/>
                <img src="train/049_block_C1_test_visible_dynamic_1/1/scene/video.gif" width="256"/></p>
            <br/>
            <p className="block-text">Some are more complicated: </p>
            <p align="center"><img src="train/1016_blockC1_train.gif" width="256"/>
                <img src="train/1174_blockC1_train.gif" width="256"/></p>
            <p align="center"><img src="train/1372_blockC1_train.gif" width="256"/>
                <img src="train/1438_blockC1_train.gif" width="256"/></p>

            <table align="center">
                <td align="center">
                    <Link to={"instruction_2"}>Next</Link>
                </td>
            </table>


        </div>;
    }
}

export default Second;
