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
          <ReactBootstrap.Grid>
            <ReactBootstrap.Row>
              <ReactBootstrap.Col xs={6} md={4}>
                <ReactBootstrap.Thumbnail src={ this.props.image } alt="242x200">
                  <h3>{this.props.title}</h3>
                  <p>{this.props.description}</p>
                  <p>{this.props.image}</p>
                   <ReactBootstrap.Button bsStyle="danger">Danger</ReactBootstrap.Button>
                </ReactBootstrap.Thumbnail>
              </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      </ReactBootstrap.Grid>
    );
  }
});
