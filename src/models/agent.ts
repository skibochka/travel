import { prop, getModelForClass } from '@typegoose/typegoose';

class Agent {
  @prop({ required: true, trim: true })
  public email!: string;

  @prop({ required: true })
  public businessName!: string;

  @prop({ required: true })
  password!: string;

  @prop({ required: true })
  accountType!: string;

  @prop({ required: false })
  createdAt: Date;

  @prop({ required: false })
  updatedAt: Date;
}

const agentModel = getModelForClass(Agent);

export default agentModel;
