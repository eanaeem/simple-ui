import React from 'react';
class Badge extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <span className={'sui-badge ' + this.props.class} style={this.props.style}> {this.props.text}</span>
        );
    }
}

Badge.propTypes = {
    class: React.PropTypes.string,
    style: React.PropTypes.object,
    text: React.PropTypes.string

};

Badge.defaultProps = {
    text: '',
    class: 'sui-theme',
    style: {}
};

export default Badge;