// user-list.ts
import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserList = defineStore('userlist', {
  state: () => ({
    users: [], // 存储所有用户数据
    total: 20,//总记录数
  }),
  actions: {
    //获取用户列表
    async getAllUser() {
      try {
        const response = await axios.get('http://localhost:9999/user/all');
        // 检查 response.data.data 是否存在并且是一个数组
        if (Array.isArray(response.data.data)) {
          this.users = response.data.data.map((user: any) => ({
            id: user.id, // id
            username: user.username, // 用户名
            name: user.name, // 姓名
            email: user.email, // 电子邮件
            phone: parseInt(user.phone), // 电话号码
            createdAt: new Date(user.createdAt).toLocaleDateString(), // 创建时间
          }));
        } else {
          console.error('预期是一个数组，但得到的是一个列表:', response.data.data);
          this.users = []; // 确保 users 被设置为空数组
        }
      } catch (error) {
        console.error('无法获取用户:', error);
        this.users = []; // 确保 users 被设置为空数组
      }
    },
    //查询用户
    async getUserList(params: any) {
      try {
        const response = await axios.get('http://localhost:9999/user/list', { params });
        if (response.data && response.data.data && response.data.data.rows) {
          this.users = response.data.data.rows.map((user: any) => ({
            id: user.id,
            username: user.username,
            name: user.name,
            email: user.email,
            phone: parseInt(user.phone),
            createdAt: new Date(user.createdAt).toLocaleDateString(),
          }));
          this.total = response.data.data.total;
        } else {
          console.error('预期是一个数组，但得到的是一个列表:', response.data.data);
          this.users = [];
          this.total = 0;
        }
      } catch (error) {
        console.error('无法获取用户:', error);
        this.users = [];
        this.total = 0;
      }
    },
    //添加用户
    async addUser(newUser: any) {
      try {
        // 转换数据格式以匹配后端实体类
        const user = {
          name: newUser.newName,
          email: newUser.neweMail,
          phone: parseInt(newUser.newPhone, 10), // 确保电话号码是整数
          username: newUser.newUsername,
        };
        const response = await axios.post('http://localhost:9999/user/add', user);
        if (response.data.code === 20000) {
          await this.getAllUser();// 重新获取用户列表
          console.log('用户添加成功');
        } else {
          console.error('添加用户失败:', response.data.message);
        }
      } catch (error) {
        console.error('无法添加用户:', error);
      }
    },
    //删除用户
    async deleteUser(id: number) {
      try {
        const response = await axios.delete(`http://localhost:9999/user/delete/${id}`); // 发送DELETE请求
        if (response.data.code === 20000) { // 假设 20000 是成功的 code
          await this.getAllUser(); // 重新获取用户列表
          console.log('用户删除成功');
        } else {
          console.error('删除用户失败:', response.data.message);
        }
      } catch (error) {
        console.error('无法删除用户:', error);
      }
    },
    // 更新用户
    async updateUser(updatedUser: any) {
      try {
        const user = {
          id: updatedUser.id,
          name: updatedUser.editName,
          email: updatedUser.editMail,
          phone: parseInt(updatedUser.editPhone, 10), // 确保电话号码是整数
          username: updatedUser.editUsername,
        };
        const response = await axios.put('http://localhost:9999/user/update', user);
        if (response.data.code === 20000) { // 假设 20000 是成功的 code
          await this.getAllUser(); // 重新获取用户列表
          console.log('用户信息更新成功');
        } else {
          console.error('更新用户失败:', response.data.message);
        }
      } catch (error) {
        console.error('无法更新用户:', error);
      }
    },
  },
});