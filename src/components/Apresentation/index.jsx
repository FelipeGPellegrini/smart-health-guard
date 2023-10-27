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
        <ResourceItem title={"Análise de Dados Personalizada"} desc={"Utilizando algoritmos de aprendizado de máquina, o dispositivo analisa os dados coletados para fornecer insights personalizados sobre a saúde do usuário."}/>
        <ResourceItem title={"Alertas e Notificações"} desc={"O dispositivo emite alertas e notificações em tempo real se detectar anomalias nos sinais vitais do usuário, permitindo ação imediata em situações de emergência."}/>
        <ResourceItem title={"Acompanhamento de Atividade Física"} desc={"Registra a atividade física diária, calcula calorias queimadas e oferece orientações para alcançar metas de fitness."}/>
        <ResourceItem title={"Compatibilidade com Aplicativo Móvel"} desc={"Os dados são sincronizados com um aplicativo móvel intuitivo, que permite ao usuário acompanhar seu progresso ao longo do tempo."}/>
        <ResourceItem title={"Design Elegante e Confortável"} desc={"O SmartHealthGuard é projetado para ser leve, resistente à água e confortável de usar durante o dia e a noite."}/>
      </div>
      <div className="target">
        <h2>Público-alvo</h2>
        <div className="targetItem">
          <p>Pessoas que buscam uma maneira conveniente de monitorar sua saúde diariamente.</p>
          <p>Idosos que desejam manter um acompanhamento contínuo de sua saúde e bem-estar.</p>
          <p>Atletas e entusiastas do fitness interessados em otimizar seu desempenho e recuperação.</p>
        </div>
      </div>

    </div>
  )
}

export default index