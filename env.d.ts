/// <reference types="vite/client" />
declare module "*.vue" {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }

// types.d.ts
declare module 'element-plus/dist/locale/zh-cn.mjs' {
  const zhCn: Record<any>;
  export default zhCn;
}