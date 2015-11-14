var React = require('react');
var StyleSheet = require('react-style');
var FeedItem = require('./FeedItem');
var $ = require('jquery');

// Feed contains multiple FeedItems
// Put AJAX in this Component
var dataUrl = 'https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json';

var Feed = React.createClass({

  getInitialState: function() {
    return {
      photos: ''
    }
  },

  componentDidMount: function() {
    $.get(dataUrl, function (data){
      console.log(data);
        this.setState({
          photos: data
        })
    }.bind(this));
  },
  render: function() {
    // put render logic here
    return (
      <div styles={styles.container}>
        <FeedItem photos={this.state.photos}/>
      </div>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    border: "1px black solid",
    width: "50%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "10px",
  },
});

module.exports = Feed;
