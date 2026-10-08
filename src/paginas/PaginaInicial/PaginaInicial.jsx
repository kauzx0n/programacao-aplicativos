import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import OlaMundo from "../../componentes/OlaMundo/OlaMundo";
import Principal from "../../componentes/Principal/Principal";
import DiaAtual from "../../componentes/DiaAtual/DiaAtual";
import MesAtual from "../../componentes/MesAtual/MesAtual";



function PaginaInicial() {
  return (
    <Principal>
      Conteúdo principal
      <BotaoCustomizado
        tipo="primario"
        aoClicar={() => alert("Salvar clicado!")}
      >
        Salvar
      </BotaoCustomizado>
      <BotaoCustomizado
        tipo="secundario"
        aoClicar={() => alert("Cancelar clicado!")}
      >
        Cancelar
      </BotaoCustomizado>
      <BotaoCustomizado aoClicar={() => alert("Enviar clicado!")}>
        Enviar
      </BotaoCustomizado>

      <OlaMundo />
      
      <DiaAtual />
      <MesAtual />
    </Principal>
  );
}
export default PaginaInicial;
