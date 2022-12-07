import './card.css'

export default function Card(props){
    return(
        <div className="card">
            <h1>{props.sign}</h1>

            <img src={props.image} alt={props.imageDesc} title={props.imageDesc}/>

            <p>{props.startDate} - {props.finalDate}</p>
        </div>
    )
}