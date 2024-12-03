import { useDispatch, useSelector } from 'react-redux';
import { addCard, rmCard, changeCard, toggleCreateModal } from './features/cards/cardsSlice.ts';
import Card from './components/Card';
import Form from './components/Form.tsx';
import { useLocalStorage } from './hooks/useLocalStorage';
import { CardClass, ChangeClass } from './components/Classes';

function App() {
 const dispatch = useDispatch();
 const isCreateModalOpen = useSelector((state) => state.cards.isCreateModalOpen);
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

    const changedCard = new ChangeClass ( 
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

  const handleModalToggle = () => {
    dispatch(toggleCreateModal());
  };

 return (
    <div className="App" style={{backgroundColor: 'palevioletred', paddingBottom: 20  }}>
      <button onClick={handleModalToggle}>Open Modal</button>
      <Form isOpen={isCreateModalOpen} handler={handleSubmit} value="Add Card" />
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
          <Card key={index} card={card} handleDelite={handleDelite} handleChange={handleChange} />
        </div>
      ))}
    </div>
 );
}

export default App;
