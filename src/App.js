import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, rmCard, changeCard } from './features/cards/cardsSlice';
import Card from './components/Card';
import Form from './components/Form';
import { useLocalStorage } from './hooks/useLocalStorage';

class CardClass {
  constructor(title, description, imageUrl) {
    this.id = Date.now();
    this.title = title
    this.description = description
    this.imageUrl = URL.createObjectURL(imageUrl)
    this.timestamp = new Date().toString()
  }
}

class Chan extends CardClass {
  constructor(id, ...restProps) {
    super(...restProps)
    this.id = id;
  }
}

function App() {
 const dispatch = useDispatch();
 const [isOpen, setOpen] = useState(false)
 const [cards, setCards] = useLocalStorage('cards', []);

 const handleSubmit = event => {
    event.preventDefault();

    const newCard = new CardClass(
      event.target.title.value,
      event.target.description.value,
      event.target.image.files[0]
    )
    
    dispatch(addCard(newCard));
    setCards([...cards, newCard]);

    event.target.reset();
  };

  const handleDelite = id => {
      dispatch(rmCard({ id }));
      setCards(cards.filter((card) => card.id !== id));
  };

  const handleChange = event => {
    event.preventDefault();
    const cardId = event.target.children[5].value;

    const changedCard = new Chan ( 
      cardId,
      event.target.title.value, 
      event.target.description.value, 
      event.target.image.files[0],
    )

    dispatch(changeCard(changedCard));
    setCards(cards.map(card => card.id.toString() ===  changedCard.id 
      ? { ...card, ...changedCard } 
      : card
    ));

    event.target.reset();
  };

 return (
    <div className="App" style={{backgroundColor: 'palevioletred', paddingBottom: 20  }}>
      <button onClick={() => setOpen(!isOpen)}>Open Modal</button>
      <Form isOpen={isOpen} handler={handleSubmit} value="Add Card" />
      {!!cards?.length && cards.map((card, index) => (
        <div 
        style={{
          display: 'flex',
          margin: '40px',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid black',
          backgroundColor: 'cadetblue'
        }}>
          <Card key={index} card={card} handleDelite={handleDelite} handleChange={handleChange} setOpen={setOpen} />
        </div>
      ))}
    </div>
 );
}

export default App;
