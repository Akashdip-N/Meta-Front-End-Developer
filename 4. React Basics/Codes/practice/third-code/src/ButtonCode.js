import './ButtonCode.css';

function buttons(props) {
  return(
    <div>
      <button className="button">{props.name}</button>
    </div>
  )
}

export default buttons;
