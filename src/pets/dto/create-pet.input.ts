import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreatePetInput {
  @IsAlpha() // only letter will be allowed
  @Field()
  name: string;
  @Field({ nullable: true })
  type?: string;
  @Field((type) => Int)
  ownerId: number;
}
