import "./DiaAtual.css";

function DiaAtual() {
  const day = new Date().getDate()
  return (
    <div className="Dia_Atual">{day}</div>
  );
}

export default DiaAtual;
