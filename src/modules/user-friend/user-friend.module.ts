import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { UserFriendController } from "./user-friend.controller";
import { UserFriendResolver } from "./user-friend.resolver";
import { UserFriendService } from "./user-friend.service";

@Module({
    controllers: [
        UserFriendController,
    ],
    providers: [
        UserFriendService,
        UserFriendResolver,
    ],
    imports: [
        UserModule,
    ],
})
export class UserFriendModule {}
