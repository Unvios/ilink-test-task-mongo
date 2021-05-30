import { ApiProperty } from "@nestjs/swagger";
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserGroupDto {
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
        description: 'Идентификатор группы',
    })
    @Field({
        description: 'Идентификатор группы',
    })
    groupId: string;
}
