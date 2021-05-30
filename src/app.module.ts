import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from "@nestjs/mongoose";
import { GroupModule } from "./modules/group/group.module";
import { UserFriendModule } from "./modules/user-friend/user-friend.module";
import { UserGroupModule } from "./modules/user-group/user-group.module";
import { UserModule } from "./modules/user/user.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
        GraphQLModule.forRoot({
            autoSchemaFile: true,
        }),
        UserModule,
        GroupModule,
        UserGroupModule,
        UserFriendModule,
    ],
})
export class AppModule {}
