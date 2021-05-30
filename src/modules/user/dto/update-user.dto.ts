import { ApiProperty } from "@nestjs/swagger";
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserDto {
    @ApiProperty({
        example: '60b396dc10fce6972a28124c',
        description: 'Идентификатор пользователя',
    })
    @Field({
        description: 'Идентификатор пользователя',
    })
    id: string;


    @ApiProperty({
        example: 'UserLogin',
        description: 'Логин пользователя',
    })
    @Field({
        description: 'Логин пользователя',
    })
    login: string;
}
