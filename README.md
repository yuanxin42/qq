# 项目: electron仿客户端QQ简易版

简单讲解electron的起源 --- 学习 -- 从入门到放弃！

## 启动
------
   > * npm install
   > * npm run dev
------
------

> * 进度：已完成 -- 简易登录页，简易聊天页
> * 目的：学习electron的开发
> * 技术栈：electron + vue全家桶 + elementUi + frozenui
> * 学习参考文章：[苏南大叔的博客](https://newsn.net/category/electron/)--[electron官网](https://electronjs.org/docs)--[electron-VUE官网](https://simulatedgreg.gitbooks.io/electron-vue/content/cn/getting_started.html)
> * [electron入门-简单传值](https://juejin.im/post/5cc5641af265da03a85ac9c7#heading-8)
> * [electron用react快速搭建项目](https://juejin.im/post/5a6a91276fb9a01cbd58ce32#heading-1)

------
## 效果图

登录页：
![Image text](https://github.com/yuanxin42/qq/blob/master/img/QQ图片20190712100207.png)


## Electron是什么?

> 这是一个由GitHub的工程师Cheng Zhao（又名zcbenz）发起的开源项目,Electron是一个实时框架，允许您使用HTML5，CSS和JavaScript创建桌面应用程序。

> Chromium和Node本身就是广受欢迎的应用程序平台，它们都被独立用于创建雄心勃勃的应用程序。 Electron将两个平台结合在一起，允许您使用JavaScript构建一个全新的应用程序类。您可以在浏览器中执行任何操作

## 优势：
   1.如果你有nodeJS开发经验，和web开发经验，你可以很容易的上手electron
   
   2.做客户端比做网页更值钱

![Image text](https://github.com/yuanxin42/qq/blob/master/img/QQ图片20190712094509.png)

## 图解：

electron由Node.js+Chromium+Native APIs构成。你可以理解成，它是一个得到了Node.js和基于不同平台的Native APIs加强的Chromium浏览器，可以用来开发跨平台的桌面级应用。

> Electron 运行 package.json 的 main 脚本的进程被称为主进程。 在主进程中运行的脚本通过创建web页面来展示用户界面。 一个 Electron 应用总是有且只有一个**主进程**。

> 由于 Electron 使用了 Chromium 来展示 web 页面，所以 Chromium 的多进程架构也被使用到。 每个 Electron 中的 web 页面运行在它自己的**渲染进程**中。在普通的浏览器中，web页面通常在沙盒环境中运行，并且无法访问操作系统的原生资源。 然而 Electron 的用户在 Node.js 的 API 支持下可以在页面中和操作系统进行一些底层交互。

它的开发主要涉及到两个进程的协作——Main（主）进程和Renderer（渲染）进程。**简单的理解两个进程的作用**：

> *  1.Main进程主要通过Node.js、Chromium和Native APIs来实现一些系统以及底层的操作，比如创建系统级别的菜单，操作剪贴板，创建APP的窗口等。同时，也可以在electron中使用node的api，是不是觉得很亲切，很舒服？

> *  2.Renderer进程主要通过Chromium来实现APP的图形界面——就是平时我们熟悉的前端开发的部分，不过得到了electron给予的加强，一些Node的模块（比如fs）和一些在Main进程里能用的东西（比如Clipboard）也能在Render进程里使用。

> *  3.Main进程和Renderer进程通过ipcMain和ipcRenderer来进行通信。通过事件监听和事件派发来实现两个进程通信，从而实现Main或者Renderer进程里不能实现的某些功能。

## electron通信的方式：

> * localstory

> * ipcMain---ipcRenderer 基友通信

> * webContents 渲染以及控制 web 页面，强行操作！

> * node写接口

[electron入门-简单传值](https://juejin.im/post/5cc5641af265da03a85ac9c7#heading-8)

[简单传值代码地址](https://github.com/yuanxin42/electronStudy/tree/master/1.%E8%B7%A8%E5%9F%9F%E9%80%9A%E4%BF%A1)



   
   





