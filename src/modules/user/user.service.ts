import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { GroupDocument } from "../group/group.schema";
import { CreateUserDto } from "./dto/create-user.dto";
import { DeleteUserDto } from "./dto/delete-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User, UserDocument } from "./user.schema";

@Injectable()
export class UserService {
    constructor (
        @InjectModel('User') private _userModel: Model<UserDocument>,
    ) {}


    getUsers (): Promise<User[]> {
        return this._userModel.find()
            .populate('groups')
            .populate('friends')
            .exec();
    }


    getUser (id: string): Promise<User> {
        return this._userModel.findById(id)
            .populate('groups')
            .populate('friends')
            .exec();
    }


    createUser (dto: CreateUserDto): Promise<User> {
        return this._userModel.create(dto);
    }


    updateUser (dto: UpdateUserDto): Promise<User> {
        return this._userModel.findByIdAndUpdate(dto.id, {
            login: dto.login,
        }, {
            new: true,
        }).exec();
    }


    async deleteUser (dto: DeleteUserDto): Promise<User> {
        const deletedUser = this._userModel.findByIdAndRemove(dto.id);

        await this._userModel.updateMany({}, {
            $pull: {
                friends: dto.id,
            },
        });

        return deletedUser;
    }
}
