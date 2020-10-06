import axios from 'axios';
import { getAdmin } from './admin';

const api = axios.create({
  baseURL: 'https://guarded-gorge-58939.herokuapp.com/api/v1'
});

export const getInstructorById = async (id) => {
  return await getAdmin(id);
}

// export const getLessons = async instructorId => {
//   try {
//     const lessons = await api.get(`/lessons/${instructorId}`);
//     return lessons;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// }

export default api;
