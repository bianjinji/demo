import { defineStore } from 'pinia';
import { Monitor, Setting, ShoppingBag } from '@element-plus/icons-vue';
import { markRaw } from 'vue';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menus: [
      {
        index: '1',
        title: '系统总览',
        icon: markRaw(Monitor),
        children: [
          { index: '1-1', name: 'overview', title: '核心技术' },
          { index: '1-2', name: 'dashboard', title: '商品统计' },
        ],
      },
      {
        index: '2',
        title: '系统管理',
        icon: markRaw(Setting),
        children: [
          { index: '2-1', name: 'user-management', title: '用户管理' },
          { index: '2-2', name: 'department-management', title: '部门管理' },
          { index: '2-3', name: 'menu-management', title: '菜单管理' },
          { index: '2-4', name: 'role-management', title: '角色管理' },
        ],
      },
      {
        index: '3',
        title: '商品中心',
        icon: markRaw(ShoppingBag),
        children: [
          { index: '3-1', name: 'product-category', title: '商品类别' },
          { index: '3-2', name: 'product-info', title: '商品信息' },
        ],
      },
      {
        index: '4',
        title: '随便聊聊',
        icon: markRaw(Monitor),
        children: [
          { index: '4-1', name: 'your-story', title: '你的故事' },
          { index: '4-2', name: 'story-list', title: '故事列表' },
        ],
      },
    ],
  }),
  actions: {
  }
});