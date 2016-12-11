import React from 'react';
class Tag extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <span className={'sui-tag ' + this.props.class} style={this.props.style}> {this.props.children}</span>
        );
    }
}

Tag.propTypes = {
    class: React.PropTypes.string,
    style: React.PropTypes.object,
    children: React.PropTypes.node
};

Tag.defaultProps = {
    text: '',
    class: 'sui-theme',
    style: {}
};

export default Tag;