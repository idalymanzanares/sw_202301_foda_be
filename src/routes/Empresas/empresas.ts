import express from 'express';
const router = express.Router();

import { Empresas, IEmpresa} from '@libs/Empresas/empresas';

const empresasModel = new Empresas();

empresasModel.add({
    codigo: '',
    nombre: 'Mi Empresa',
    status: 'Activo',
    created: undefined,
    updated: undefined
})

router.get('/',(_req, res)=>{
    const jsonUrls = {
        "getAll": {"method":"get","url": "empresas/all"},
        "getById": {"method": "get", "url": "empresas/byid/:id"},
        "new":{"method":"post","url": "empresas/new"},
        "update":{"method":"put","url": "empresas/upd/:id"},
        "delete":{"method":"delete","url": "empresas/del/:id"},
    };
    res.status(200).json(jsonUrls);
});

router.get('/all',(_req, res)=>{
    res.status(200).json(empresasModel.getAll());
});

router.get('/byId/:id', (req,res)=>{
    const {id : codigo}=req.params;
    const empresa = empresasModel.getById(codigo);
    if (empresa){
        return res.status(200).json(empresa);
    }
    return res.status(404).json({"error":"No se encontro empresa"});
});

router.post('/new', (req, res) => {
    console.log("Empresas /new request body:", req.body);
    const {nombre="John Corp", status="Activo"} = req.body;
    const newEmpresa : IEmpresa= {
        codigo: "",
        nombre,
        status,
        created: undefined,
        updated: undefined
    };
    if (empresasModel.add(newEmpresa)){
        res.status(200).json({"created": true});
    }
    return res.status(404).json({"error":"Error al agregar una nueva empresa"});
});

router.put ('/upd/:id', (req,res) =>{
    const {id} = req.params;
    const {nombre="John Doe Corp", status="Activo", observacion=""} = req.body;
    const UpdateEmpresa : IEmpresa = {
        codigo: id,
        nombre,
        status,
        observacion,
        created: undefined,
        updated: undefined
    };
    
    if (empresasModel.update(UpdateEmpresa)){
        return res.status(200).json({"updated": true});
    }
    return res.status(400).json({"error":"Error al actualizar la empresa"});
});

router.delete('/del/:id', (req, res)=>{
    const {id:codigo} = req.params;
    if(empresasModel.delete(codigo)){
        return res.status(200).json({"deleted":true});
    }
    return res.status(404).json({"error":"No se puede eliminar la empresa"});
});

export default router;

