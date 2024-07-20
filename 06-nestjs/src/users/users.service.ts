import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async findOne(id: string) {
    console.log('chamando findOne do UsersService');
    return { message: `Retorna o usuário com id '${id}'` };
  }

  async findMany(name: string, username: string) {
    return { message: `Retorna Lista de Usuários filtrando por name '${name}' e username '${username}'` };
  }

  async create(data: any) {
    return { message: `Criar um Usuário no Sistemas ${JSON.stringify(data)}` };
  }

  async update() {
    return { message: 'Atualizar varias informações de um Usuários' };
  }

  async updatePhoto() {
    return { message: 'Atualiza a foto do Usuário' };
  }

  async delete() {
    return { message: 'Deleta um Usuário' };
  }
}
