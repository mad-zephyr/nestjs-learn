import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, _id: true })
export class UserModel {
  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;
  static _name: 'User';
}

export const UserModelSchema = SchemaFactory.createForClass(UserModel);
