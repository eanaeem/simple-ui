import React from 'react';
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handlerClose = this.handlerClose.bind(this);
        this.state = { toggleVisible: false };
    }
    componentWillReceiveProps() {
        this.setState({ toggleVisible: this.props.showModal });
    }
    handlerClose() {
        this.setState(prevState => ({
            toggleVisible: !prevState.toggleVisible
        }));
    }

    renderModal() {
        return (
            <div className="sui-modal">
                <div className={'sui-modal-content ' + this.props.class} style={this.props.style}>
                    <header className={'sui-container  ' + this.props.classHeader} style={this.props.styleHeader}>
                        <span onClick={this.handlerClose} className="sui-closebtn">&times;</span>
                        <h2>
                            {this.props.headerIcon && <i className={this.props.headerIcon} />}
                            {this.props.header}
                            {this.props.headerImage && <img src={this.props.headerImage} />}
                        </h2>
                    </header>

                    <div className="sui-container sui-padding-botom">
                        {this.props.children}
                    </div>

                </div>
            </div>);
    }
    render() {
        return (this.state.toggleVisible ? this.renderModal() : null);
    }
}

Modal.propTypes = {
    header: React.PropTypes.string,
    headerIcon: React.PropTypes.string,
    headerImage: React.PropTypes.string,
    classHeader: React.PropTypes.string,
    styleHeader: React.PropTypes.object,
    showModal: React.PropTypes.bool,
    class: React.PropTypes.string,
    style: React.PropTypes.object,
    children: React.PropTypes.node

};

Modal.defaultProps = {
    header: '',
    headerIcon: '',
    headerImage: '',
    showModal: false,
    class: 'sui-card-small',
    classHeader: 'sui-theme',
    style: {}
};

export default Modal;