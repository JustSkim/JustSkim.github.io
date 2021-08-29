---
title: PYQT5介绍

categories:

- Programming languages and projects

- Python3

- PYQT5

tags: 
- python3
- gui

---

## PYQT5
### 介绍
PyQt5 是Digia的一套Qt5应用框架与python的结合，同时支持2.x和3.x。
Qt库由Riverbank Computing开发，是最强大的GUI库之一 ，
官方网站：https://riverbankcomputing.com/
PyQt5是由一系列Python模块组成。超过620个类，6000函数和方法。能在诸如Unix、Windows和Mac OS等主流操作系统上运行。PyQt5有两种证书，GPL和商业证书。

### PYQT和QT
PyQt的介绍，以及其与Qt的不同，可见[官网此页](https://www.riverbankcomputing.com/static/Docs/PyQt5/introduction.html)

Qt是一组c++库和开发工具，包括图形用户界面，网络，线程，正则表达式，SQL数据库，SVG, OpenGL, XML，用户和应用程序设置，定位和定位服务，短程通信(NFC和蓝牙)，web浏览，3D动画，图表、3D数据可视化以及与应用商店的交互。PyQt5作为一组Python模块实现了超过1000个这样的类。

PyQt5是一组来自Qt公司的用于Qt应用程序框架v5的Python绑定，由PyQt5本身和许多与Qt的附加库相对应的附加组件组成。每一个都提供了一个源代码发行版(sdist)和用于Windows、Linux和macOS的二进制轮。
PyQt5支持Windows、Linux、UNIX、Android、macOS和iOS平台，需要Python v3.5或更高版本。(PyQt5还应该使用遗留的configure.py构建脚本在Python v2.7和Python v3的早期版本上构建，但这是不支持的。)



## PYQT的类别

Pyqt的类别分为以下几个模块：
+ QtCore:包含了核心的非GUI功能。此模块用于处理时间、文件和目录、各种数据类型、流、URL、MIME类型、线程或进程。
+ QtGui包含类窗口系统集成、事件处理、二维图形、基本成像、字体和文本。
+ QtWidgets模块包含创造经典桌面风格的用户界面提供了一套UI元素的类。
+ QtMultimedia包含的类来处理多媒体内容和API来访问相机和收音机的功能。
+ Qtbluetooth模块包含类的扫描设备和连接并与他们互动。描述模块包含了网络编程的类。这些类便于TCP和IP和UDP客户端和服务器的编码，使网络编程更容易和更便携。
+ Qtpositioning包含类的利用各种可能的来源，确定位置，包括卫星、Wi-Fi、或一个文本文件。
+ Enginio模块实现了客户端库访问Qt云服务托管的应用程序运行时。
+ Qtwebsockets模块包含实现WebSocket协议类。
+ QtWebKit包含一个基于Webkit2图书馆Web浏览器实现类。
+ QtWebkitwidgets包含的类的基础webkit1一用于qtwidgets应用Web浏览器的实现。
+ QtXml包含与XML文件的类。这个模块为SAX和DOM API提供了实现。
+ QtSvg模块提供了显示SVG文件内容的类。可伸缩矢量图形（SVG）是一种描述二维图形和图形应用的语言。
+ QtSql模块提供操作数据库的类。
+ QtTest包含的功能，使pyqt5应用程序的单元测试


## Pyqt5与Pyside2

这里有一篇英文[文章](https://www.pythonguis.com/faq/pyqt5-vs-pyside2/)讲述了这两个package之间的区别。简单地说，Pyqt的使用历史比较长，目前中文方面的资料也比较多，Pyside是后续由原先参与Pyqt项目的公司推出的，二者在使用协议方面由不同。
在文档方面，Pyqt5与Pyside2大部分函数的构造都相同，详情可见以下网址：
[PyQt5官方文档](https://www.riverbankcomputing.com/static/Docs/PyQt5/index.html#)
[Pyside2官方文档](https://doc.qt.io/qtforpython-5/)

## 安装与配置

```bash
pip install pyqt5
#使用pip下载该package

pip install pyqt5-tools
#由于Qt Designer已经在Python3.5版本从PyQt5转移到了tools，因此我们还需要安装pyqt5-tools
```



## 验证是否成功安装

qt designer是PyQt程序UI界面的实现工具，使用Qt Designer可以拖拽、点击完成GUI界面设计，并且设计完成的.ui程序可以转换成.py文件供python程序调用。Qt Designer的设计符合MVC的架构，其实现了视图和逻辑的分离，从而实现了开发的便捷。Qt Designer中的操作方式十分灵活，其通过拖拽的方式放置控件可以随时查看控件效果。Qt Designer生成的.ui文件（实质上是XML格式的文件）也可以通过`pyuic5`工具转换成.py文件。

同时按下`win`+`s`键，在`cornata` 中输入`designer`，可以定位到`qt designer`程序的地址，成功启动该程序，则说明`PyQt5`已经被安装。

另一种方法：在控制台中输入`pyuic5`，若返回信息为：`Error: one input ui-file must be specified`，说明 `PyQt5`已经被成功安装。

 

