import api from './index';

// get instructor info
export const getAdmin = async (id) => {
  try {
    const instructor = await api.get(`/instructor/${id}`);
    return instructor;
  } catch (err) {
    throw new Error(err);
  }
}