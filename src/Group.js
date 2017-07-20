import React, { Component } from 'react';
import List from'./List.js';
import Contact from'./Contact.js';

const STYLES = {
    contacts: {
        cursor: 'pointer',
        color: 'red'
    }
}
class Group extends Component {
  constructor(opts) {
      super(opts)
      this.state = {
          showContacts: false
      }
  }

  handleClick () {
      this.setState({
          showContacts: !this.state.showContacts
      })
  }
  render() {
    const { group } = this.props;
    const { showContacts } = this.state;
    return (
      <div>
        <div onClick={this.handleClick.bind(this)} style={STYLES.contacts} ><Contact item={group} /></div>
        {showContacts ? <List items={group.contacts} /> : null}
      </div>
    );
  }
}

export default Group;
