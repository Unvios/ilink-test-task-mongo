import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserDto } from "./dto/create-user.dto";
import { DeleteUserDto } from "./dto/delete-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./user.schema";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
    constructor (
        private readonly _userService: UserService,
    ) {}


    @Query(() => [User], {
        description: 'Получить список пользователей',
    })
    users () {
        return this._userService.getUsers();
    }


    @Query(() => User, {
        description: 'Получить пользователя',
    })
    user (
        @Args('id') id: string,
    ) {
        return this._userService.getUser(id);
    }


    @Mutation(() => User, {
        description: 'Создать пользователя',
    })
    createUser (
        @Args('dto') dto: CreateUserDto,
    ) {
        return this._userService.createUser(dto);
    }


    @Mutation(() => User, {
        description: 'Обновить данные пользователя',
    })
    updateUser (
        @Args('dto') dto: UpdateUserDto,
    ) {
        return this._userService.updateUser(dto);
    }


    @Mutation(() => User, {
        description: 'Удалить пользователя',
    })
    deleteUser (
        @Args('dto') dto: DeleteUserDto,
    ) {
        return this._userService.deleteUser(dto);
    }
}
