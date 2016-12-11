import React from 'react';
import Container from '../../sui/ContainerComponent';
import Modal from '../../sui/ModalComponent';


class HomePage extends React.Component {
    render() {
        let showModal = true;
        return (
            <Container headerText="Home">
                <Modal header='test' showModal={showModal}>
                    Test 123
                    <button className="sui-btn sui-green sui-ripple">  Test Btn</button>
                </Modal>
            </Container>
        );
    }
}
export default HomePage;
