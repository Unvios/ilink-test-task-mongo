import { ApiProperty } from "@nestjs/swagger";
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateGroupDto {
    @ApiProperty({
        example: 'GroupName',
        description: 'Наименование группы',
    })
    @Field({
        description: 'Наименование группы',
    })
    name: string;
}
