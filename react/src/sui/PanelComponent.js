import React from 'react';

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.state = { toggleVisible: true };
    }
    handleClose() {
        this.setState(prevState => ({
            toggleVisible: !prevState.toggleVisible
        }));
    }
    renderPanel() {
        return (
            <div className="sui-panel">
                <div className={this.props.classHeader} style={this.props.styleHeader}>
                    <header>
                        <button onClick={this.handleClose} aria-label="Close" className="sui-closebtn">X</button>
                        <h3 className={'sui-margin-0 ' + this.props.classHeaderText} style={this.props.styleHeaderText} >
                            <i className={this.props.headerIcon} />  {this.props.headerText}</h3>
                    </header>
                </div>
                {this.props.children}
            </div>);
    }
    render() {
        return this.state.toggleVisible ? this.renderPanel() : <span />;
    }
}

Panel.propTypes = {
    headerIcon: React.PropTypes.string,
    headerText: React.PropTypes.string,
    classHeader: React.PropTypes.string,
    styleHeader: React.PropTypes.object,
    classHeaderText: React.PropTypes.string,
    styleHeaderText: React.PropTypes.object,
    children: React.PropTypes.node

};

Panel.defaultProps = {
    headerIcon: '',
    headerText: '',
    classHeader: '',
    classHeaderText: '',
    styleHeader: {},
    styleHeaderText: {},
};
export default Panel;
