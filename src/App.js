import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  state =  {
    lists: [],
    allCards: {},
  }

  componentDidMount(){

    this.setState({
      lists: this.props.store.lists,
      allCards: this.props.store.allCards
    })
  }
  
  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  handleClick =(id)=>{

    
    const newCard = this.newRandomCard();
    let key = newCard.id;
 
    const selectedItem = this.state.lists.find(item=> item.id === id);
 
    const newItem = {...selectedItem, cardIds: [...this.state.lists[id-1].cardIds, key]}
  
    const newList = [...this.state.lists.slice(0, id-1), newItem, ...this.state.lists.slice(id) ]

    this.setState({
      allCards: {
        ...this.state.allCards, 
        [key]: newCard,
      },
      lists: newList
    })
  }

  handleDelete = () => {}


  // omit(obj, keyToOmit) {
  //   return Object.entries(obj).reduce(
  //     (newObj, [key, value]) =>
  //         key === keyToOmit ? newObj : {...newObj, [key]: value},
  //     {}
  //   );
  // }

  // omit(obj, keyToOmit) {
  //   return Object.entries(obj).reduce(
  //     (newObj, [key, value]) =>
  //         key === keyToOmit ? newObj : {...newObj, [key]: value},
  //     {}
  //   );
  // }

  // const objectWithKVPs = {
  //   key: 'value',
  //   foo: 'foo value',
  //   bar: 'bar value',
  //   abc: { nested: 'object' }
  // }
  
  // // To remove the foo key value pair
  // const newObjectWithKVPs = omit(objectWithKVPs, 'abc');




  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              handleClick={this.handleClick}
              handleDelete={this.handleDelete}
              id={list.id}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
