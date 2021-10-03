import axios from '@/core/axios';

const postApi = {
  async createPost(postData) {
    const res = await axios.post(`/posts`, postData);
    return res;
  },
  async fetchPosts() {
    const res = await axios.get(`/posts`);
    console.log(res);
    return res;
  },
  async fetchPostsById(id) {
    const res = await axios.get(`/posts/${id}`);
    return res;
  },
  async deletePost(id) {
    const res = await axios.delete(`/posts/${id}`);
    return res;
  },
};

export default postApi;
