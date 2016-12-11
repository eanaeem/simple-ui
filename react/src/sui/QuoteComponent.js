import React from 'react';
class Quote extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <blockquote className={'sui-panel ' + this.props.class} style={this.props.style}>
                <p className="sui-large">
                    {this.props.children}
                </p>
            </blockquote>
        );
    }
}

Quote.propTypes = {
    class: React.PropTypes.string,
    style: React.PropTypes.object,
    children: React.PropTypes.node

};

Quote.defaultProps = {
    class: ' sui-leftbar sui-card-small sui-light-grey',
    style: {}
};

export default Quote;