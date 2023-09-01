# 关于二进制文件的处理

在实际开发中，你会发现很多二进制文件本身是不具有跨平台的属性的

而为什么我们在不同的os环境下，安装它们可以使用呢？

这是因为在我们安装它们之后，它们根据我们os的类型，或去请求对应平台的 binary (如 swc)

或者现场在我们机器上直接进行编译成我们平台的代码 node-gyp

所以这就导致一个问题，假如你直接用 win/macos 开发

你安装的二进制包，大概率无法在 aws serverless 环境下运行

因为它的环境是 Amazon Linux 2 <https://docs.aws.amazon.com/zh_cn/lambda/latest/dg/lambda-runtimes.html>

所以，我们应该在挑选与线上 Lambda 运行时，相似的容器中，进行开发，上传代码和层 (layer)

## 解决方案

### 两种选择

- 在 docker 容器中开发，拉下 AWS Lambda 运行时容器，在里面开发并上传层函数和代码包
- 由环境相似的 CI 容器，进行上传和部署，示例见 `.github/workflows/layer.yml` (上传层函数的CI)

## demo 介绍

在这个 demo 中，我使用了2种不同的 layer

一种普通的 js layer

一种是二进制 layer，`puppeteer` 和 `swc`

### layers 目录

layers 目录就存放着所有将要被打包上传的层

其中这里没有用 `pnpm` 而使用了 `npm/yarn`，为什么?

这是因为我们需要把 `node_modules` 里所有的依赖给打包上传上去，使用 `pnpm` 的话，由于里面的引用都是链接，会出现文件缺失。

而且可以在 `layers` 里面通过创建多个目录以及 `package.json` 来吧主函数里的 `dependencies` 进行分割。

### inline code (node-resolve)

之前我一直是使用 `rollup` 来进行第三方包 `code` 的 `inline` 功能的

现在这个 `case` 里，我直接使用了 `tsup` 的打包特性，即：

在 `devDependencies` 里的运行时依赖是默认 `inline` 的

而在 `dependencies` 里的运行时依赖是默认 `external` 的

通过这种特性，只需要很简单的基于契约的配置，就可以 达成我们服务端打包的效果。
