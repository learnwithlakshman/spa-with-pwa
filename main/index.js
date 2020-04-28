import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import './index.less';

// for angular subapp
import 'zone.js';

/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
import render from './render/ReactRender';
// import render from './render/VueRender'

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

/**
 * Step1 初始化应用（可选）
 */
render({ appContent: '', loading: true });

/**
 * Step2 注册子应用
 */
registerMicroApps(
  [
    {
      name: 'bus-app',
      entry: '//localhost:5200',
      render,
      activeRule: genActiveRule('/bus-app'),
    },
    {
      name: 'train-app',
      entry: '//localhost:4200',
      render,
      activeRule: genActiveRule('/train-app'),
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/train-app');

/**
 * Step4 启动应用
 */
start({
  prefetch: ['react16', 'react15', 'vue'],
  jsSandbox: true,
  singular: true,
});

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
