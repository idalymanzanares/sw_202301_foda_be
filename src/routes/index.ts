import express from 'express';
const router  = express.Router();



router.get('/', (_req, res) => {
  res.json({msg:'Hello World!'});
 });

router.get('/version', (_req, res)=> {
  const version: string = "1.0.0";
  const jsonResp = {"name":"FODA Be", "version": version};
  res.json(jsonResp);
});

import empresasRouter from './Empresas/empresas';
import UsuariossRouter from './Usuarios/usuario';


router.use('/empresas', empresasRouter);
router.use ('/Usuarios', UsuariossRouter)
//router.get router.post router.put router.delete router.use

export default router;
