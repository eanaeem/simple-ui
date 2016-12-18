import React from 'react';
import Container from '../../sui/ContainerComponent';

class HomePage extends React.Component {
    render() {
        return (
            <Container>
                <p>
                    <input id="Name" className="sui-input-float" />
                    <label htmlFor="Name" className="sui-label-float"> Name </label>

                </p>
                <p>
                    <select className="sui-select-float"> <option></option><option> Test 2 </option> </select>
                    <label className="sui-label-float"> Name </label>

                </p>

            </Container>
        );
    }
}
export default HomePage;
