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

  open: function() {
    window.location.href = "items/" + this.props.id;
  },

  delete: function() {
    var deleteInParent = this.props.deleteTask;
    $.ajax({
      url: "items/" + this.props.id ,
      type: 'DELETE',
      success: function(result) {
      }
    });
  },

  render: function() {
    return (
      <ReactBootstrap.Thumbnail src={ this.props.image } alt="242x200">
        <h3>{this.props.title}</h3>
        <p dangerouslySetInnerHTML={{__html: this.props.description}} />
        <ReactBootstrap.Button bsStyle="primary" onClick={this.open} >Open</ReactBootstrap.Button>
        <ReactBootstrap.Button bsStyle="danger" onClick={this.delete} >Delete</ReactBootstrap.Button>
      </ReactBootstrap.Thumbnail>
    );
  }
});
