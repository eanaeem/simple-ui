import React from 'react';

class CarouselItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggleVisible: true };
    }
    toggleVisible() {
        this.setState(prevState => ({
            toggleVisible: !prevState.toggleVisible
        }));
    }

    render() {
        return (
            <span className={this.props.class} style={this.props.style}>
                {this.props.children}
            </span>
        );
    }
}

CarouselItem.propTypes = {
    class: React.PropTypes.string,
    style: React.PropTypes.object,
    children: React.PropTypes.node
};

CarouselItem.defaultProps = {
    class: 'sui-responsive',
    style: {}
};

export default CarouselItem;