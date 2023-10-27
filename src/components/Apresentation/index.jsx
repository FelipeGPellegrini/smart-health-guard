import "./styles.css"
import ResourceItem from "../ResourceItem"

const index = () => {
  return (
    <div className="containerApresentation">
      <div className="imageApresentation">
        <img width={300} src="./smart.png" alt="SmartHealthGuard" />
      </div>
      <div className="description">
          <p>O &quot;SmartHealthGuard&quot; é um dispositivo wearable de última geração projetado para melhorar a saúde e o bem-estar das pessoas. Ele combina tecnologia avançada com recursos inteligentes para monitorar, prevenir e gerenciar condições de saúde de forma proativa.</p>
      </div>
      <div className="resources">
        <h2>Principais recursos</h2>
        <ResourceItem title={"Monitoramento de Saúde em Tempo Real"} desc={"O SmartHealthGuard monitora constantemente sinais vitais, como frequência cardíaca, pressão arterial, níveis de oxigênio no sangue e atividade física."}/> 
      </div>

    </div>
  )
}

export default index