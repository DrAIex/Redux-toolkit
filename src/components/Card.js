import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import { toggleChangeModal } from '../features/cards/cardsSlice';

function Card({ card, handleDelite, handleChange }) {
 const dispatch = useDispatch();
 const isChangeModalOpen = useSelector((state) => state.cards.isChangeModalOpen);
 
 const handleModalToggle = () => {
  dispatch(toggleChangeModal());
};
  return (

    <>
      <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'antiquewhite'
      }}>
        <img 
          style={{ maxWidth: 200, padding: 10 }} 
          src={card.imageUrl} 
          alt={card.description} 
        />
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <button onClick={handleModalToggle}>Change</button>
        <button onClick={() => handleDelite(card.id)}>Rm</button>
      </div>
      <Form isOpen={isChangeModalOpen} handler={handleChange} value="Change" id={card.id} />
    </>
  )
}

export default Card;

   