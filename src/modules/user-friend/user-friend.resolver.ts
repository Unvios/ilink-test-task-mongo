import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { User } from "../user/user.schema";
import { UserFriendDto } from "./dto/user-friend.dto";
import { UserFriendService } from "./user-friend.service";

@Resolver(() => User)
export class UserFriendResolver {
    constructor (
        private readonly _userFriendService: UserFriendService,
    ) {}


    @Mutation(() => User, {
        description: 'Добавить друга пользователю',
    })
    addFriendToUser (
        @Args('dto') dto: UserFriendDto,
    ) {
        return this._userFriendService.addFriend(dto);
    }


    @Mutation(() => User, {
        description: 'Удалить друга у пользователя',
    })
    deleteFriendFromUser (
        @Args('dto') dto: UserFriendDto,
    ) {
        return this._userFriendService.deleteFriend(dto);
    }
}
