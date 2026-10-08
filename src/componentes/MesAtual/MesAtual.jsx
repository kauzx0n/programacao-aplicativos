import "./MesAtual.css";

function MesAtual() {
  const month = new Date().getMonth() + 1
  return (
    <div className="Mes_Atual">{month}</div>
  );
}

export default MesAtual;
