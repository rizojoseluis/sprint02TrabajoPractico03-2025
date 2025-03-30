// Capa IRepository.mjs

class IRepository{
    obtenerPorId(id){
        throw new Error("Método 'obtenerPorID()' no implementado");
    }
    obtenerTodos(){
        throw new Error("Método 'obtenerTodos()' no implementado");
    }
    buscarPorAtributo(atributo, valor){
        throw new Error("Método 'buscarPorAtributo()' no implementado");
    }
    obtenerMayoresDe30(){
        throw new Error("Método 'obtenerMayoresDe30()' no implementado");

    }
}

export default IRepository;
