import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { GroupDocument } from "../group/group.schema";
import { User, UserDocument } from "../user/user.schema";
import { UserGroupDto } from "./dto/user-group.dto";

@Injectable()
export class UserGroupService {
    constructor (
        @InjectModel('User') private _userModel: Model<UserDocument>,
    ) {}


    async addUserToGroup (dto: UserGroupDto): Promise<User> {
        return this._userModel.findByIdAndUpdate(dto.userId, {
            $push: {
                groups: dto.groupId,
            },
        }, {
            new: true,
        }).exec();
    }


    async deleteUserFromGroup (dto: UserGroupDto): Promise<User> {
        return this._userModel.findByIdAndUpdate(dto.userId, {
            $pull: {
                groups: dto.groupId,
            },
        }, {
            new: true,
        }).exec();
    }
}
