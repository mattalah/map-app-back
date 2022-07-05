import mongoose, { Schema, Document } from 'mongoose';


export interface IMap extends Document {
  lat: number;
  long: number;

}

const MapSchema: Schema = new Schema({
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  
});

export default mongoose.model<IMap>('Map', MapSchema);