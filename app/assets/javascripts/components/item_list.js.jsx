var ItemList = React.createClass({
   propTypes: {
    source: React.PropTypes.string
   },

   loadItems: function() {
      this.serverRequest = $.get(this.props.source, function (result) {
        this.setState({
          items: result
        });
      }.bind(this));
  },

  getInitialState: function(){
    return {items: []};
  },

  componentDidMount: function() {
  	this.loadItems();
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    return (
    	<ReactBootstrap.Grid>
        {
           this.state.items.map(function(result) {
	           return (
					<ReactBootstrap.Row>
						<ReactBootstrap.Col xs={6} md={5}>
							<Item key={result.id} {...result}/>
						</ReactBootstrap.Col>
					</ReactBootstrap.Row>
	           	);
           })
        }
      	</ReactBootstrap.Grid>
    );
  }
});
