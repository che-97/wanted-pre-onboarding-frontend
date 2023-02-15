import clases from './Card.module.css'

function Card(props){
    return <div className={clases.card}>
        {props.children}
    </div>
}

export default Card;