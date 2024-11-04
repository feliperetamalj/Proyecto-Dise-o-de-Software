import mongoose, { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

// Definimos la interfaz para el usuario
interface IUser extends Document {
  userId: string;
  email: string;
  password: string;
}

// Definimos el esquema de usuario
const UserSchema: Schema = new Schema({
  userId: {
    type: String,
    default: uuidv4, // Genera un UUID automáticamente para cada usuario nuevo
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Exportamos el modelo de usuario
export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);