import React from 'react';
import Panel from './PanelComponent';
class Notes extends Panel {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Panel classHeader={this.props.class} headerText={this.props.notesHeader} styleHeaderText={this.props.style}>
                <div className={this.props.classNotes}>
                    {this.props.children}
                </div>
            </Panel>
        );
    }
}

Notes.propTypes = {
    notesHeader: React.PropTypes.string,
    class: React.PropTypes.string,
    style: React.PropTypes.object,
    children: React.PropTypes.node

};

Notes.defaultProps = {
    notesHeader: 'Notes',
    class: 'sui-yellow',
    style: {}
};

export default Notes;