export interface IUsuario{
    codigos: string;
    correo: string;
    nombre: string;
    password: string;
    roles ?: boolean;
    creado ?: Date; 
    ultimo_acceso ?: Date; 
 }
 
 export class Usuario {
  private usuario: IUsuario[];
 
  constructor(){
     this.usuario=[];
    
  }
  add(nueva_Usuario : IUsuario ) {
     const date= new Date();
     const nueva: IUsuario = {
     ... nueva_Usuario,
     codigos: (Math.random()*1000).toString()+new Date().getTime().toString(),
     creado: date,
     ultimo_acceso : date
 
     }
     this.usuario.push(nueva)
     return this.update;
    }
    
    getAll(){
        return this.usuario;
    }
    update (updateusuario:IUsuario){
        const newusuario:IUsuario[] = this.usuario.map((emp)=>{
            if (emp.codigos === updateusuario.codigos ) {
                return {...emp, ...updateusuario, updated: new Date()};
            }
            return emp;
    
        });
        this.usuario = newusuario;
        return this.update;
    
        }
        delete(codigo: string){
           const usuarioToDelete = this.usuario.find((emp)=>{
               return emp.codigos === codigo;
   
           });
   
           if(usuarioToDelete){
               const newusuario: IUsuario[] = this.usuario.filter((emp)=>{
                   return emp.codigos! == codigo;
   
               });
               this.usuario =newusuario;
               return true;
        }
        return false;
     }
 }