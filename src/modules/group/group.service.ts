import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument } from "../user/user.schema";
import { CreateGroupDto } from "./dto/create-group.dto";
import { DeleteGroupDto } from "./dto/delete-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { Group, GroupDocument } from "./group.schema";

@Injectable()
export class GroupService {
    constructor (
        @InjectModel('Group') private _groupModel: Model<GroupDocument>,
        @InjectModel('User') private _userModel: Model<UserDocument>,
    ) {}


    getGroups (): Promise<Group[]> {
        return this._groupModel.find().exec();
    }


    getGroup (id: string): Promise<Group> {
        return this._groupModel.findById(id).exec();
    }


    createGroup (dto: CreateGroupDto): Promise<Group> {
        return this._groupModel.create(dto);
    }


    updateGroup (dto: UpdateGroupDto): Promise<Group> {
        return this._groupModel.findByIdAndUpdate(dto.id, {
            login: dto.name,
        }, {
            new: true,
        }).exec();
    }


    async deleteGroup (dto: DeleteGroupDto): Promise<Group> {
        const removedGroup = await this._groupModel.findByIdAndRemove(dto.id);

        await this._userModel.updateMany({}, {
            $pull: {
                groups: dto.id,
            },
        }).exec();

        return removedGroup;
    }
}
