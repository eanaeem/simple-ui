import React, { PropTypes } from 'react';
import NavBar from '../sui/NavBarComponent';
class App extends React.Component {
    render() {
        return (
            <div className="sui-row">
                <NavBar routes={this.props.routes} />
                <div className="sui-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
