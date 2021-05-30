import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { UserGroupController } from "./user-group.controller";
import { UserGroupResolver } from "./user-group.resolver";
import { UserGroupService } from "./user-group.service";

@Module({
    controllers: [
        UserGroupController,
    ],
    providers: [
        UserGroupService,
        UserGroupResolver,
    ],
    imports: [
        UserModule,
    ],
})
export class UserGroupModule {}
