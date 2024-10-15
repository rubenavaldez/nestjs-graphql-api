import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { OwnersService } from 'src/owners/owners.service';
import { Owner } from 'src/owners/entities/owner.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petsRepository: Repository<Pet>,
    private ownerService: OwnersService,
  ) {}

  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInput);
    return this.petsRepository.save(newPet);
  }
  async findAll(): Promise<Pet[]> {
    const pet = new Pet();
    pet.id = 1;
    pet.name = 'Mambo';

    return [pet];
  }
  findOne(id: number): Promise<Pet> {
    return this.petsRepository.findOneOrFail({ where: { id } });
  }
  getOwner(ownerId: number): Promise<Owner> {
    return this.ownerService.findOne(ownerId);
  }
}
