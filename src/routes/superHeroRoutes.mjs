//Capa superHeroRoutes.mjs

import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
} from '../controllers/superheroesController.mjs';
import { obtenerSuperheroePorId } from '../services/superheroesService.mjs';

const router = express.Router();

router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes', obtenerTodosLosSuperheroesController);



export default router;