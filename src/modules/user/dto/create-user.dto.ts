import { ApiProperty } from "@nestjs/swagger";
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
    @ApiProperty({
        example: 'UserLogin',
        description: 'Логин пользователя',
    })
    @Field({
        description: 'Логин пользователя',
    })
    login: string;
}
