import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { DeleteUserDto } from "./dto/delete-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./user.schema";
import { UserService } from "./user.service";

@ApiTags('Пользователи')
@Controller('user')
export class UserController {
    constructor (
        private readonly _userService: UserService,
    ) {}


    @ApiOperation({ summary: 'Получить список пользователей' })
    @ApiResponse({ status: 200, type: [User] })
    @Get()
    getUsers () {
        return this._userService.getUsers();
    }


    @ApiOperation({ summary: 'Получить пользователя' })
    @ApiResponse({ status: 200, type: User })
    @Get('/:id')
    getUser (
        @Param('id') id: string,
    ) {
        return this._userService.getUser(id);
    }


    @ApiOperation({ summary: 'Создать пользователя' })
    @ApiResponse({ status: 200, type: User })
    @Post()
    createUser (
        @Body() dto: CreateUserDto,
    ) {
        return this._userService.createUser(dto);
    }


    @ApiOperation({ summary: 'Обновить данные пользователя' })
    @ApiResponse({ status: 200, type: User })
    @Put()
    updateUser (
        @Body() dto: UpdateUserDto,
    ) {
        return this._userService.updateUser(dto);
    }


    @ApiOperation({ summary: 'Удалить пользователя' })
    @ApiResponse({ status: 200, type: User })
    @Delete()
    deleteUser (
        @Body() dto: DeleteUserDto,
    ) {
        return this._userService.deleteUser(dto);
    }
}
