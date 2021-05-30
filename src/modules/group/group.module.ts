import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from "../user/user.module";
import { GroupController } from "./group.controller";
import { GroupResolver } from "./group.resolver";
import { GroupSchema } from "./group.schema";
import { GroupService } from "./group.service";

@Module({
    controllers: [
        GroupController,
    ],
    providers: [
        GroupService,
        GroupResolver,
    ],
    imports: [
        MongooseModule.forFeature([{
            name: 'Group',
            schema: GroupSchema,
        }]),
        UserModule,
    ],
    exports: [
        MongooseModule,
    ]
})
export class GroupModule {}
