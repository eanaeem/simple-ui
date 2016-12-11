import React from 'react';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.classContainer} style={this.props.styleContainer}>
        <h2> <i className={this.props.headerIcon} /> {this.props.headerText} </h2>
        {this.props.headerImagePath && <img src={this.props.headerImagePath} alt={this.props.headerText} className={this.props.classHeaderImage} style={this.props.styleHeaderImage} />}
        <div className="sui-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  headerText: React.PropTypes.string,
  headerIcon: React.PropTypes.string,
  headerImagePath: React.PropTypes.string,
  classContainer: React.PropTypes.string,
  styleContainer: React.PropTypes.object,
  classHeaderImage: React.PropTypes.string,
  styleHeaderImage: React.PropTypes.object,
  children: React.PropTypes.node
};

Container.defaultProps = {
  headerText: '',
  headerIcon: '',
  headerImagePath: '',
  classContainer: 'sui-container',
  styleContainer: {},
  classHeaderImage: 'sui-image',
  styleHeaderImage: {}
};

export default Container;
