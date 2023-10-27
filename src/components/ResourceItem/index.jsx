import "./styles.css"

const index = ({title, desc}) => {
  return (
    <div className="containerResource">
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default index