import { getFirestore } from 'firebase/firestore';
import { app } from '../../App';

export const database = getFirestore(app);
