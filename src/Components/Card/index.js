import"./card.css";



const  Card =({title,par}) => (
    <div className="card">
        <h6>{title}</h6>
        <p>{par}</p>
        <button>devami</button>
    </div>
);


export default Card;