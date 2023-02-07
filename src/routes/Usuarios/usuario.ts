import express from 'express';
const router = express.Router();
 
//registrar los endpoint router

import { Usuario }  
 from '@libs/Usuarios/Usuarios';


const empresasModel = new Usuario();

empresasModel.add({
    codigos: '',
    correo: '',
    nombre: '',
    password: '',
});
router.get ('/', (_req, res)=>{ 
    const jsonUrls = {
        "getAll": {"method":"get", "url": "usuarios/all"},
        "getById": {"method":"get", "url": "usuarios/byid/:id"},
        "new": {"method":"post", "url": "usuarios/new"},
        "update": {"method":"post", "url": "usuarios/upd/:id"},
        "delete": {"method":"delete", "url": "usuarios/del/:id"},
    };
    res.status (200).json(jsonUrls)

 
  });
  router.get ('/all',(_req, res)=>{ 
    res.status (200).json(empresasModel.getAll());
});
export default router;
