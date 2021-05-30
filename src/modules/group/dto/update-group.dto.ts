import { ApiProperty } from "@nestjs/swagger";
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateGroupDto {
    @ApiProperty({
        example: '60b396dc10fce6972a28124c',
        description: 'Идентификатор группы',
    })
    @Field({
        description: 'Идентификатор группы',
    })
    id: string;


    @ApiProperty({
        example: 'GroupName',
        description: 'Наименование группы',
    })
    @Field()
    name: string;
}
