# serverless-aws-cn-guide

Serverless Framework 亚马逊云(AWS)中国地区部署指南

## 序言

本仓库主要存放 `Serverless Framework` 的实践，主要包括文档和代码

当然在云服务商的选择上，虽然名义上说是 `亚马逊云(AWS)`，但里面有很多的思想是通用的，可以适用于阿里云和腾讯云。

## 文章目录

<!-- > - [ ] TODO
> - [x] Finish -->

- [x] [0.概览与快速开始](./chapter/0.overview.md)

- [x] [1.typescript 支持与本地调试](./chapter/1.nodejs-project.md)

- [x] [2.依赖项的处理与层的创建与注册](./chapter/2.layer-and-deps.md)

- [x] [3.lambda nodejs 函数降低冷启动时间的最佳实践](./chapter/3.nodejs-bundle.md)

- [x] [4.更灵活的 serverless framework 配置文件](./chapter/4.config.md)

- [ ] [5.与传统 nodejs web 框架的结合](./chapter/5.web-framework.md)

- [ ] [6.monorepo 下的 serverless 函数管理](./chapter/6.monorepo.md)

## 相关的专栏

[知乎 - Serverless之我见](https://www.zhihu.com/column/c_1340357072555393024)

## 代码目录

这个项目是一个 `pnpm` + `turbo` 的 `monorepo`，其中

- `apps` 存放所有的函数
- `packages` 存放所有的库

## 完整示例及文章仓库地址

<https://github.com/sonofmagic/serverless-aws-cn-guide>
