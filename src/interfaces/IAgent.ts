import { Types } from 'mongoose';

export interface IAgent {
  _id: Types.ObjectId;

  email: string;

  businessName: string;

  password: string;

  accountType?: string;

  createdAt?: Date;

  updatedAt?: Date;
}
