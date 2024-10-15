import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  ownersService: any;
  constructor(
    @InjectRepository(Owner) private ownersRepository: Repository<Owner>,
  ) {}
  create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownersRepository.create(createOwnerInput);
    return this.ownersRepository.save(newOwner);
  }

  findAll() {
    return this.ownersRepository.find();
  }

  findOne(id: number) {
    return this.ownersRepository.findOneOrFail({ where: { id } });
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return this.ownersService.update(updateOwnerInput.id, updateOwnerInput);
  }

  remove(id: number) {
    return this.ownersService.remove(id);
  }
}
