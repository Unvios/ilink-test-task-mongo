import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { User } from "../user/user.schema";
import { UserGroupDto } from "./dto/user-group.dto";
import { UserGroupService } from "./user-group.service";

@Resolver(() => User)
export class UserGroupResolver {
    constructor (
        private readonly _userGroupService: UserGroupService,
    ) {}


    @Mutation(() => User, {
        description: 'Добавить пользователя в группу',
    })
    addUserToGroup (
        @Args('dto') dto: UserGroupDto,
    ) {
        return this._userGroupService.addUserToGroup(dto);
    }


    @Mutation(() => User, {
        description: 'Удалить пользователя из группы',
    })
    deleteUserFromGroup (
        @Args('dto') dto: UserGroupDto,
    ) {
        return this._userGroupService.deleteUserFromGroup(dto);
    }
}
