import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Document } from "mongoose";
import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
@Schema()
export class Group {
    @Field({
        description: 'Наименование группы',
    })
    @Prop({ required: true })
    name: string;
}

export const GroupSchema = SchemaFactory.createForClass(Group);

export type GroupDocument = Group & Document;
