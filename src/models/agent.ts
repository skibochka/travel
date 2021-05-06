import { prop, getModelForClass } from '@typegoose/typegoose';

class Agent {
  @prop({ required: true, trim: true })
  public email!: string;

  @prop({ required: true })
  public businessName!: string;

  @prop({ required: true })
  public password!: string;

  @prop({ default: 'free' })
  public accountType: string;

  @prop({ required: false })
  public createdAt: Date;

  @prop({ required: false })
  public updatedAt: Date;
}

const agentModel = getModelForClass(Agent);

export default agentModel;
