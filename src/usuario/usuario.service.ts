import { updateUsuarioDTO } from './dto/updateUsuario.dto';
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/createUser.dto';
import { PrismaService } from 'src/repository/prisma.service';


@Injectable()
export class UsuarioService {
 constructor(private readonly prismaService: PrismaService){ }

   async listAll(){
        return await this.prismaService.user.findMany();
    }

    listApenasUm(){
        return 'Listar apenas um';
    }

    async createUsuario(payload: CreateUsuarioDto) {
      return await this.prismaService.user.create({
        data: {
            name: payload.name,
            age: payload.age,
            email: payload.email,
        },
      })
    }

        async updateUsuario(id: string, body: updateUsuarioDTO){
            const userExist = await this.prismaService.user.findFirst({
                where: {
                    id: id,
                },
            });
            if (!userExist){
                return 'Usuario não existe';
            }
            await this.prismaService.user.update({
                where: {
                    id: id,
                },
                data:{
                    ...body,
                },
            })
            return 'usuario atualizado com sucesso'
        }
       }

  
    

