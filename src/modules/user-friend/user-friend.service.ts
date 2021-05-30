import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../user/user.schema";
import { UserFriendDto } from "./dto/user-friend.dto";

@Injectable()
export class UserFriendService {
    constructor (
        @InjectModel('User') private _userModel: Model<UserDocument>,
    ) {}


    async addFriend (dto: UserFriendDto): Promise<User> {
        return this._userModel.findByIdAndUpdate(dto.userId, {
            $push: {
                friends: dto.friendId,
            },
        }, {
            new: true,
        }).exec();
    }


    async deleteFriend (dto: UserFriendDto): Promise<User> {
        return await this._userModel.findByIdAndUpdate(dto.userId, {
            $pull: {
                friends: dto.friendId,
            },
        }, {
            new: true,
        }).exec();
    }
}
