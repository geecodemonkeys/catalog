var Item = React.createClass({
  propTypes: {
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    image: React.PropTypes.string,
    price: React.PropTypes.number,
    currency: React.PropTypes.string,
    timeCreated: React.PropTypes.string
  },

  render: function() {
    return (
      <ReactBootstrap.Thumbnail src={ this.props.image } alt="242x200">
        <h3>{this.props.title}</h3>
        <p dangerouslySetInnerHTML={{__html: this.props.description}} />
        <ReactBootstrap.Button bsStyle="primary">Open</ReactBootstrap.Button>
      </ReactBootstrap.Thumbnail>
    );
  }
});
