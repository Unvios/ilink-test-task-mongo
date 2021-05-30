import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Group, GroupDocument } from '../group/group.schema';

@ObjectType()
@Schema()
export class User {
    @Field({
        description: 'Логин пользователя',
    })
    @Prop({ required: true })
    login: string;


    @Field(() => [Group], {
        description: 'Группы пользователя',
    })
    @Prop({
        type: [{
            type: MongooseSchema.Types.ObjectId,
            ref: 'Group',
        }],
    })
    groups: GroupDocument[];


    @Field(() => [User], {
        description: 'Друзья пользователя',
    })
    @Prop({
        type: [{
            type: MongooseSchema.Types.ObjectId,
            ref: 'User',
        }],
    })
    friends: UserDocument[];
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;
