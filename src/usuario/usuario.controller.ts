import { UsuarioService } from './usuario.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { updateUsuarioDTO } from './dto/updateUsuario.dto';

@Controller('usuario')
export class UsuarioController {
    
    constructor(private readonly usuarioService : UsuarioService){ }

    @Get()
    listAll(){
        return this.usuarioService.listAll();
    }

    @Post()
    createUser(@Body() body : any){
        return this.usuarioService.createUsuario(body);
    }

    @Put('/:id')
    updateUsuario(@Param('id') id: string, @Body() body: updateUsuarioDTO){
        return this.usuarioService.updateUsuario(id, body);
    }

    @Delete()
    removeUser(){
        return 'Deletar usuario'
    }
}
