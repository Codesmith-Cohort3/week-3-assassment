var React = require('react');
var StyleSheet = require('react-style');
var FeedItem = require('./FeedItem');

var Feed = React.createClass({
  render: function() {
    // put render logic here
    return (
      <div styles={styles.container}>
        <FeedItem/>
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