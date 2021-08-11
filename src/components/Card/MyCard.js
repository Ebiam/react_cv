import React from "react";
import PropTypes from 'prop-types';
import './MyCard.css';


function MyCard (props) {

    return(
        <div className={'myCard-container'} style={props.style}>
            <div className={'myCard-title-container'}>
                <p style={props.titleStyle}>
                    <strong>{props.title}</strong>
                </p>
            </div>
            <div >
                {props.children}
            </div>
        </div>
    )
}

MyCard.defaultProps = {
    title: 'Title',
    titleStyle: {fontFamily: 'Lobster, monospace'},
    style: {overflow: 'auto'}
};

MyCard.propTypes = {
    title: PropTypes.string,
    titleStyle: PropTypes.object,
};

export default MyCard;
