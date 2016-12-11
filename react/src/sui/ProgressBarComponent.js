import React from 'react';
class ProgressBar extends React.Component {
    render() {
        let percentage = this.props.percentage + '%';
        return (
            <div className="sui-center sui-progress-container">
                <div className={'sui-progressbar  ' + this.props.class} style={{ width: percentage }}>
                    <div className="sui-text-white">{this.props.label}</div>
                </div>
            </div>
        );
    }
}

ProgressBar.propTypes = {
    class: React.PropTypes.string,
    percentage: React.PropTypes.number,
    label: React.PropTypes.string
};

ProgressBar.defaultProps = {
    class: 'sui-green ',
    percentage: 20,
    label: '20%'
};
export default ProgressBar;
