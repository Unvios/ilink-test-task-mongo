import { ApiProperty } from "@nestjs/swagger";
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserFriendDto {
    @ApiProperty({
        example: '60b396dc10fce6972a28124c',
        description: 'Идентификатор пользователя',
    })
    @Field({
        description: 'Идентификатор пользователя',
    })
    userId: string;


    @ApiProperty({
        example: '60b396dc10fce6972a28124c',
        description: 'Идентификатор друга пользователя',
    })
    @Field({
        description: 'Идентификатор друга пользователя',
    })
    friendId: string;
}
