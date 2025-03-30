//Capa SuperHeroRepository.mjs

import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository{
    async obtenerPorId(id){
        return await SuperHero.findById(id);
    }

    async obtenerTodos(){
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        const query = { [atributo]: valor }; 

        return await SuperHero.find(query);
        
    }
    async obtenerMayoresDe30(){            
        return await SuperHero.find({ 
            edad: { $gt: 30 }, 
            planetaOrigen: 'Tierra',
            poderes: { 
                $exists: true, //Me aseguro que el campo existe
                $type: "array", // Verifico que sea un array 
                $gte: 2 } //Que tenga 2 o más elementos.
        });
    
}}

export default new SuperHeroRepository();