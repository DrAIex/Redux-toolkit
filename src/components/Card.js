function Card({ card }) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'antiquewhite'
      }}>
        <img style={{ maxWidth: 200, padding: 10 }} src={card.imageUrl} alt={card.description} />
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    )
   }
   
   export default Card;
   