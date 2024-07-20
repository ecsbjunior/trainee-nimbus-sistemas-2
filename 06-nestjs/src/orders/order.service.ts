import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

type CreateOrderDTO = {
  userId: string;
}

@Injectable()
export class OrdersService {
  constructor(
    @Inject(UsersService)
    private readonly usersService: UsersService
  ) {}

  async findOne(id: string) {
    return { message: `Retorna o pedido com id '${id}'` };
  }

  async findMany() {
    return { message: `Retorna Lista de pedidos` };
  }

  async create(data: CreateOrderDTO) {
    //Verificar se um usuário existe no sistema
    this.usersService.findOne(data.userId);
    
    return { message: `Criar um pedido no Sistemas ${JSON.stringify(data)}` };
  }

  async update() {
    return { message: 'Atualizar varias informações de um pedido' };
  }

  async delete() {
    return { message: 'Deleta um pedido' };
  }
}
