import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateGroupDto } from "./dto/create-group.dto";
import { DeleteGroupDto } from "./dto/delete-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { Group } from "./group.schema";
import { GroupService } from "./group.service";

@ApiTags('Группы')
@Controller('group')
export class GroupController {
    constructor (
        private readonly _groupService: GroupService,
    ) {}


    @ApiOperation({ summary: 'Получить список групп' })
    @ApiResponse({ status: 200, type: [Group] })
    @Get()
    getGroups () {
        return this._groupService.getGroups();
    }


    @ApiOperation({ summary: 'Получить группу' })
    @ApiResponse({ status: 200, type: Group })
    @Get('/:id')
    getGroup (
        @Param('id') id: string,
    ) {
        return this._groupService.getGroup(id);
    }


    @ApiOperation({ summary: 'Создать группу' })
    @ApiResponse({ status: 200, type: Group })
    @Post()
    createGroup (
        @Body() dto: CreateGroupDto,
    ) {
        return this._groupService.createGroup(dto);
    }


    @ApiOperation({ summary: 'Обновить данные группы' })
    @ApiResponse({ status: 200, type: Group })
    @Put()
    updateGroup (
        @Body() dto: UpdateGroupDto,
    ) {
        return this._groupService.updateGroup(dto);
    }


    @ApiOperation({ summary: 'Удалить группу' })
    @ApiResponse({ status: 200, type: Group })
    @Delete()
    deleteGroup (
        @Body() dto: DeleteGroupDto,
    ) {
        return this._groupService.deleteGroup(dto);
    }
}
