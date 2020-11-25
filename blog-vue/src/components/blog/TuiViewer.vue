<template>
  <viewer :options="options" :initialValue="viewerText" height="500px"></viewer>
</template>

<script>
import {Viewer} from '@toast-ui/vue-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/i18n/zh-cn';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import hljs from './highlight';

export default {
  name: "TuiViewer",
  props: {
    content: String,
    value: String
  },
  components: {
    viewer: Viewer
  },
  data() {
    return {
      options: {
        plugins: [[codeSyntaxHighlight, {hljs}]],
        usageStatistics: false,
        language: 'zh-CN'
      },
      viewerText: '### JMX简介\n' +
          '\n' +
          '在Java程序中，我们常常需要对JVM和系统进行检测，在以前，开发人员必须通过一些底层的 JVM API，比如 JVMPI 和 JVMTI 等，才能监测 Java 程序运行过程中的一系列情况，但是这种需要大量的 C 程序和 JNI 调用，开发效率十分低下，为了解决这个问题，Sun 公司也在其 Java SE 5 版本中，正式提出了 Java 管理扩展（Java Management Extensions，JMX）用来管理检测 Java 程序，同时 JMX 也在 J2EE 1.4 中被发布。\n' +
          '\n' +
          '### MBean、MBeanServer\n' +
          'MBean是Managed Bean的简称。在JMX中MBean代表一个被管理的资源实例，通过MBean中暴露的方法和属性，外界可以获取被管理的资源的状态和操纵MBean的行为。\n' +
          '\n' +
          '\n' +
          '\n' +
          'MBean在一个MBeanServer中。MBeanServer管理这些MBean，并且代理外界对它们的访问。并且MBeanServer提供了一种注册机制，外界可以通过名字来得到相应的MBean实例。\n' +
          '\n' +
          '\n' +
          '\n' +
          '\n' +
          '\n' +
          '创建MBean时，必须遵循一种特定的设计模式。模型MBean类必须实现一个具有以下名称的接口：“模型类名称”加MBean。\n' +
          '### 代码实例\n' +
          '```java\n' +
          'public interface TestMBean {\n' +
          '    public void close();\n' +
          '\n' +
          '    public void start();\n' +
          '\n' +
          '    public void change(String name);\n' +
          '}\n' +
          '\n' +
          '\n' +
          'public class Test implements TestMBean {\n' +
          '    @Override\n' +
          '    public void close() {\n' +
          '        System.out.println(\\"关闭\\");\n' +
          '    }\n' +
          '\n' +
          '    @Override\n' +
          '    public void start() {\n' +
          '        System.out.println(\\"打开\\");\n' +
          '    }\n' +
          '\n' +
          '    @Override\n' +
          '    public void change(String name) {\n' +
          '        System.out.println(\\"改变-------》\\"+name);\n' +
          '    }\n' +
          '}\n' +
          '\n' +
          '```\n' +
          '首先我们需要将MBean实现注册到MBean服务器，注册MBean之后，为了能够对其进行测试，需要添加一个死循环以防止应用程序终止，然后才能通过JConsole访问MBean。\n' +
          '\n' +
          'ObjectName表示一个MBean的对象名称。\n' +
          '```java\n' +
          '\n' +
          'public class Main {\n' +
          '    public static void main(String[] args) {\n' +
          '        try {\n' +
          '            ObjectName objectName = new ObjectName(\\"com.baeldung.tutorial:type=basic,name=game\\");\n' +
          '            MBeanServer server = ManagementFactory.getPlatformMBeanServer();\n' +
          '            server.registerMBean(new Test(), objectName);\n' +
          '        } catch (MalformedObjectNameException | InstanceAlreadyExistsException |\n' +
          '                MBeanRegistrationException | NotCompliantMBeanException e) {\n' +
          '            // handle exceptions\n' +
          '        }\n' +
          '\n' +
          '        for(;;){\n' +
          '            try {\n' +
          '                Thread.sleep(1000);\n' +
          '            } catch (InterruptedException e) {\n' +
          '                e.printStackTrace();\n' +
          '            }\n' +
          '        }\n' +
          '    }\n' +
          '}\n' +
          '\n' +
          '```\n' +
          '\n' +
          '要启动JConsole，可以打开一个终端窗口并运行jconsole命令，这个程序在JDK_HOME/bin下。\n' +
          '\n' +
          'JConsole允许创建本地连接以及与远程进程的连接，我们可以在本地进程列表中看到我们的程序名称。只需选择应用程序并单击“连接”按钮，连接后转到MBean选项卡，我们就可以动态更改的值。\n' +
          '\n' +
          '![在这里插入图片描述](https://img-blog.csdnimg.cn/20200807161231902.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/20200807161247503.png)\n' +
          '\n' +
          '### 客户端示例\n' +
          '虽然JConsole提供了图形化界面操作，但是有些地方就不太合适使用，比如我们需要定期调用MBean的某些功能，每10分钟检查一次状态。在这种情况下，我们需要自己编写一个连接到JMX MBean服务器并调用MBean操作的操作。\n' +
          '\n' +
          '以下代码启动MBean服务器，端口为9696，并禁用了SSL和身份验证。\n' +
          '\n' +
          '```java\n' +
          'public class Main {\n' +
          '    private static int PORT=9696;\n' +
          '\n' +
          '    public static void main(String[] args) {\n' +
          '        try {\n' +
          '\n' +
          '            ObjectName objectName = new ObjectName(\\"com.hxl.jmx:type=basic,name=hxl\\");\n' +
          '            MBeanServer server = ManagementFactory.getPlatformMBeanServer();\n' +
          '            server.registerMBean(new Test(), objectName);\n' +
          '            LocateRegistry.createRegistry(PORT);\n' +
          '\n' +
          '            JMXServiceURL url = new JMXServiceURL\n' +
          '                    (\\"service:jmx:rmi:///jndi/rmi://localhost:\\"+PORT+\\"/jmxrmi\\");\n' +
          '            JMXConnectorServer jcs = JMXConnectorServerFactory.newJMXConnectorServer(url, null, server);\n' +
          '\n' +
          '\n' +
          '            jcs.start();\n' +
          '        } catch (Exception e) {\n' +
          '        }\n' +
          '        for(;;){\n' +
          '            try {\n' +
          '                Thread.sleep(1000);\n' +
          '            } catch (InterruptedException e) {\n' +
          '                e.printStackTrace();\n' +
          '            }\n' +
          '        }\n' +
          '    }\n' +
          '}\n' +
          '\n' +
          '```\n' +
          '上面这段还可以通过启动参数来控制，不需要编写代码，但如果同时存在的话，两个端口貌似是都可以使用。\n' +
          '```java\n' +
          '-Dcom.sun.management.jmxremote.port=1234\n' +
          '-Dcom.sun.management.jmxremote.authenticate=false\n' +
          '-Dcom.sun.management.jmxremote.ssl=false\n' +
          '```\n' +
          '下面是客户端，大概三步。\n' +
          '\n' +
          '1. 创建JMXServiceURL，给他传递RMI主机和端口，所有的JMX URL都必须以“service:jmx”开头，否则会抛MalformedURLException。\n' +
          '\n' +
          '\n' +
          '2. 通过JMXConnectorFactory获取一个JMXConnector实\n' +
          '\n' +
          '\n' +
          '3. 通过MBeanServerInvocationHandler返回TestMBean代理\n' +
          '\n' +
          '```java\n' +
          'public class ClientTest {\n' +
          '    private static final String HOST=\\"127.0.0.1\\";\n' +
          '    private static int PORT=9696;\n' +
          '\n' +
          '    public static void main(String[] args) {\n' +
          '\n' +
          '        try {\n' +
          '            JMXServiceURL url =\n' +
          '                    new JMXServiceURL(\\"service:jmx:rmi:///jndi/rmi://\\" + HOST + \\":\\" + PORT + \\"/jmxrmi\\");\n' +
          '\n' +
          '\t\t\t//之后，我们必须使用JMXConnector工厂类来获取实例。\n' +
          '            JMXConnector jmxConnector = JMXConnectorFactory.connect(url);\n' +
          '\n' +
          '\n' +
          '            MBeanServerConnection mbeanServerConnection = jmxConnector.getMBeanServerConnection();\n' +
          '            ObjectName mbeanName = new ObjectName(\\"com.hxl.jmx:type=basic,name=hxl\\");\n' +
          '\n' +
          '\t\t\t//获取代理，如果获得代理成功，就可以调用MBean公开的任何操作。\n' +
          '            TestMBean mbeanProxy =\n' +
          '                    (TestMBean) MBeanServerInvocationHandler.newProxyInstance(\n' +
          '                            mbeanServerConnection, mbeanName, TestMBean.class, true);\n' +
          '            mbeanProxy.start();\n' +
          '            mbeanProxy.change(\\"test\\");\n' +
          '        } catch (MalformedURLException e) {\n' +
          '            e.printStackTrace();\n' +
          '        } catch (IOException e) {\n' +
          '            e.printStackTrace();\n' +
          '        } catch (MalformedObjectNameException e) {\n' +
          '            e.printStackTrace();\n' +
          '        }\n' +
          '    }\n' +
          '}\n' +
          '\n' +
          '```\n' +
          '运行之后控制台会输出如下：\n' +
          '\n' +
          '![在这里插入图片描述](https://img-blog.csdnimg.cn/20200807172500772.png)\n' +
          '\n' +
          '\n' +
          '### Tomcat JMX\n' +
          '\n' +
          '首先需要在catalina.sh中配置开启JMX，Windows为catalina.bat，以下在Linux中演示，在catalina.sh中加入以下参数即可，端口可以随意更改，但是注意需要在一行。\n' +
          '```java\n' +
          'CATALINA_OPTS=\\"-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.authenticate=false\\"\n' +
          '```\n' +
          '\n' +
          '![在这里插入图片描述](https://img-blog.csdnimg.cn/20200807205548480.png)\n' +
          '\n' +
          '通过`./catalina.sh run`运行Tomcat，在JConsole中选中远程连接，输入127.0.0.1:9999进行连接。\n' +
          '\n' +
          '![在这里插入图片描述](https://img-blog.csdnimg.cn/20200807205816234.png)\n' +
          '\n' +
          '以下演示停止、启动某个项目。\n' +
          '\n' +
          '选中最右侧的MBean选项卡，接着展开WebModule。\n' +
          '\n' +
          '![在这里插入图片描述](https://img-blog.csdnimg.cn/20200807210000465.png?)\n' +
          '\n' +
          '选中某个要停止的项目后，点击\\"操作\\"-----stop()，即可停止项目。\n' +
          '\n' +
          '![在这里插入图片描述](https://img-blog.csdnimg.cn/2020080721012057.png)\n' +
          '\n' +
          '停止后无法在访问，相反，点击start()可以重新启动。\n' +
          '\n' +
          '![在这里插入图片描述](https://img-blog.csdnimg.cn/20200807210217342.png)\n' +
          '\n' +
          '基于这个，我们可以自己做一套Tomcat管理软件。", \n' +
          '        "writeDate": "2020-08-07 08:24:42", \n' +
          '        "classifyId": 1, \n' +
          '        "watchCount": 212, \n' +
          '        "blogDescribe": "", \n' +
          '        "tags": "", \n' +
          '        "describe": ""'
    };
  },
  // methods: {
  //   initialize() {
  //     const Viewer = toastui.Editor;
  //     const viewer = new Viewer({
  //       el: document.querySelector('#viewer'),
  //       initialValue: codeContent,
  //       plugins: [codeSyntaxHighlight]
  //     });
  //   }
  // }
}
</script>

<style scoped>

</style>
