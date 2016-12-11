import React from 'react';
import Panel from './PanelComponent';
class Alert extends Panel {
    constructor(props) {
        super(props);
    }
    render() {


        return (
            <Panel classHeader={this.props.class} styleHeaderText={this.props.style} headerText={this.props.headerText}>
                <div className={this.props.class} style={this.props.style}>
                    {this.props.children}
                </div>
            </Panel>
        );
    }
}

Alert.propTypes = {
    headerText: React.PropTypes.string,
    class: React.PropTypes.string,
    style: React.PropTypes.object,
    children: React.PropTypes.node
};

Alert.defaultProps = {
    headerText: 'Success !',
    class: 'sui-success',
    style: {}
};

export default Alert;