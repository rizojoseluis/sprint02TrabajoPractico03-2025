// Capa superheroesController.mjs

import{obtenerSuperheroePorId, obtenerTodosLosSuperheroes,
    buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30}
    from '../services/superheroesService.mjs';

import {renderizarSuperheroe, renderizarListaSuperheroes}
    from '../views/responseView.mjs';

export async function obtenerSuperheroePorIdController(req, res) {
    try{
        const {id} = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        if(!superheroe){
            return res.status(404).send({mensaje: 'Superheroe no encontrado'});
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
        } catch (error){
            res.status(500).send({mensaje: 'Error al obtener el superhéroe',
                error: error.message});
        }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
    try{
        const superheroes = await obtenerTodosLosSuperheroes();
        const superheroeFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroeFormateados);
    }catch (error){
        res.status(500).send({mensaje: 'Erro al obtener los superhéroes',
            error: error.message});
    }
}

export async function buscarSuperheroesPorAtributoController(req, res) {
    try{
        const{atributo, valor} = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if (superheroes.length ===0){
            return res.status(404).send(
                {mensaje: 'No se encontraron superhéroes con ese atributo'});
            }

            const superheroeFormateados = renderizarListaSuperheroes(superheroes);
            res.status(200).json(superheroeFormateados);
        } catch (error){
            res.status(500).send({mensaje: 'Error al buscar los superheroes',
                error: error.message});
        }
    }


    export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
        try {
            console.log("Entrando a obtenerSuperheroesMayoresDe30Controller");
            const superheroes = await obtenerSuperheroesMayoresDe30();
            console.log("Superhéroes obtenidos:", superheroes);
            if (!superheroes || superheroes.length === 0) {
                console.log("No se encontraron superhéroes mayores de 30.");
                return res.status(404).send({
                    mensaje: 'No se encontraron superhéroes mayores de 30 años, del planeta Tierra y con al menos dos poderes.'
                });
            }
            const superheroeFormateados = renderizarListaSuperheroes(superheroes);
            console.log("Superhéroes formateados:", superheroeFormateados);
            res.status(200).json(superheroeFormateados);
        } catch (error) {
            console.error("Error al obtener superhéroes mayores de 30:", error.message);
            res.status(500).send({
                mensaje: 'Error al obtener superhéroes mayores de 30',
                error: error.message
            });
        }
    }