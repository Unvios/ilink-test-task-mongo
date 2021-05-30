import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from "./user.controller";
import { UserResolver } from "./user.resolver";
import { UserSchema } from "./user.schema";
import { UserService } from "./user.service";

@Module({
    controllers: [
        UserController,
    ],
    providers: [
        UserService,
        UserResolver,
    ],
    imports: [
        MongooseModule.forFeature([{
            name: 'User',
            schema: UserSchema,
        }]),
    ],
    exports: [
        MongooseModule,
    ],
})
export class UserModule {}
