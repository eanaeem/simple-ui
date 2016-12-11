import React from 'react';
import uuidV4 from 'uuid/v4';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { currentSlide: 0 };
        this.handleThumbClick = this.handleThumbClick.bind(this);
        this.handleArrowClick = this.handleArrowClick.bind(this);
    }

    componentDidMount() {
        if (this.props.autoPlay)
            this.setupAutoPlay();
    }

    componentWillUnmount() {
        if (this.props.autoPlay)
            this.destroyAutoPlay();
    }

    setupAutoPlay() {
        this.timer = setTimeout(() => {
            this.handleArrowClick(1, null);
        }, this.props.autoPlayInterval);
    }
    destroyAutoPlay() {
        this.clearAutoPlay();
    }
    clearAutoPlay() {
        clearTimeout(this.timer);
    }
    handleThumbClick(i, e) {
        this.setState({ currentSlide: i });
    }

    handleArrowClick(i, e) {
        let sid = this.state.currentSlide + (1 * i);
        if (sid < 0)
            sid = 0;
        if (sid >= this.props.children.length)
            sid = this.props.children.length - 1;
        this.setState({ currentSlide: sid });
    }

    renderThumb(i) {
        return (<span key={uuidV4()} className="sui-thumb" onClick={this.handleThumbClick.bind(this, i)} />);
    }

    renderThumbs() {
        return this.props.children.map((item, index) => {
            return this.renderThumb(index);
        });
    }

    renderArrows() {
        return (<span>
            <a className="sui-btn-floating sui-hover-dark-grey sui-display-left" onClick={this.handleArrowClick.bind(this, -1)}>&#10094;</a>
            <a className="sui-btn-floating sui-hover-dark-grey sui-display-right" onClick={this.handleArrowClick.bind(this, 1)}>&#10095;</a>
        </span>);
    }

    render() {
        let itemsLength = this.props.children.length;
        if (itemsLength === 0) {
            return null;
        }

        return (

            <div className={this.props.class} style={this.props.style}>
                <div className="sui-row">
                    {this.props.showArrows && itemsLength > 0 && this.renderArrows()}
                    {this.props.children[this.state.currentSlide]}
                </div>
                <div className="sui-row">
                    <div className="sui-center sui-section sui-large sui-text-white sui-display-bottommiddle sui-responsive">
                        {this.props.showThubs && itemsLength > 0 && this.renderThumbs()}
                    </div>
                </div>
            </div>
        );
    }
}

Carousel.propTypes = {
    class: React.PropTypes.string,
    showThubs: React.PropTypes.bool,
    showArrows: React.PropTypes.bool,
    autoPlay: React.PropTypes.bool,
    autoPlayInterval: React.PropTypes.number,
    style: React.PropTypes.object,
    children: React.PropTypes.node

};

Carousel.defaultProps = {
    class: 'sui-content sui-section',
    showThubs: true,
    showArrows: true,
    autoPlay: true,
    autoPlayInterval: 3000,
    style: {}
};

export default Carousel;