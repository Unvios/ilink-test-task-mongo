import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateGroupDto } from "./dto/create-group.dto";
import { DeleteGroupDto } from "./dto/delete-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { Group } from "./group.schema";
import { GroupService } from "./group.service";

@Resolver(() => Group)
export class GroupResolver {
    constructor (
        private readonly _groupService: GroupService,
    ) {}


    @Query(() => [Group], {
        description: 'Получить список групп',
    })
    groups () {
        return this._groupService.getGroups();
    }


    @Query(() => Group, {
        description: 'Получить группу',
    })
    group (
        @Args('id') id: string,
    ) {
        return this._groupService.getGroup(id);
    }


    @Mutation(() => Group, {
        description: 'Создать группу',
    })
    createGroup (
        @Args('dto') dto: CreateGroupDto,
    ) {
        return this._groupService.createGroup(dto);
    }


    @Mutation(() => Group, {
        description: 'Обновить данные группы',
    })
    updateGroup (
        @Args('dto') dto: UpdateGroupDto,
    ) {
        return this._groupService.updateGroup(dto);
    }


    @Mutation(() => Group, {
        description: 'Удалить группу',
    })
    deleteGroup (
        @Args('dto') dto: DeleteGroupDto,
    ) {
        return this._groupService.deleteGroup(dto);
    }
}
