import{o as e,c as o,j as r}from"./index-eec71458.js";const t=r(`<p>串行端口是一种双向通信接口，允许逐字节发送和接收数据。</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API&quot;" target="_blank"><strong>Web Serial API:</strong></a> 为网站读写串行设备提供了一种方法。这些设备可以通过串口连接，也可以是模拟串口的USB或蓝牙设备。 </p><p> 系统串行端口读写 API 通过全局  <strong><code>navigator.serial</code></strong>  属性公开。 </p><blockquote><p> Web Serial API 只能在安全上下文中运行(HTTPS)， <a href="https://developer.mozilla.org/en-US/docs/Web/API/Serial#browser_compatibility" target="_blank"> 兼容性 </a></p></blockquote><h2>连接串行端口</h2><p> Web Serial API 提供 <strong><a href="https://developer.mozilla.org/en-US/docs/Web/API/Serial/requestPort" target="_blank"> requestPort(options) </a></strong> 方法查询可用的串行连接端口。 </p><p> requestPort 方法返回一个 <strong>Promise</strong> ，该实例解析为 <a href="https://developer.mozilla.org/en-US/docs/Web/API/SerialPort" target="_blank"> SerialPort </a> 表示用户选择的设备，如果没有选择设备则拒绝。 </p><blockquote><p>此方法必须在用户激活时调用, 即需要手动 Click</p></blockquote><pre><code>// 一个对象列表，包含用于搜索附加设备的供应商和产品id
const filters = [
  {
    usbVendorId: 0x00,  // 标识USB设备供应商的无符号短整数。
    usbProductId: 0x00, // 标识USB设备的无符号短整数。
  }
]
const port = await navigator.serial.requestPort({ filters });
</code></pre><blockquote><p> filters 中的无符号短整数可在 <strong><code>device-log</code></strong> 中查询 </p></blockquote><p></p><blockquote> device-log 地址: <code>chrome://device-log/</code></blockquote><p><strong>SerialPort</strong> 接口的 <a href="https://developer.mozilla.org/en-US/docs/Web/API/SerialPort/open" target="_blank"> open() </a> 方法返回一个Promise，该Promise在端口打开时解析。缺省情况下，端口为8位数据位、1位停止位且不进行奇偶校验。“波特率”为必填参数。 </p><blockquote><p>波特率需要按照串行设备配置统一，否则可能不能接收数据</p></blockquote><pre><code>const options = {
  baudRate: 9600, // 一个正的、非零的值，表示串口通信应该建立的波特率
  dataBits: 8, // 7或8的整数值，表示每帧的数据位数。默认值为8
  stopBits: 1, // 1或2的整数值，表示帧结束时的停止位数。默认值为1。
  parity: &#39;none&#39;, // 奇偶校验模式为“none”、“偶”或“奇”。默认值为none。
  bufferSize: 255, // 一个无符号长整数，指示要建立的读和写缓冲区的大小。如果未通过，默认值为255。
  flowControl: &#39;none&#39;, // 流控制类型，“none”或“hardware”。默认值为none。
}
await port.open(options);
// 连接成功
</code></pre><h2>读取数据</h2><p>从串口接收数据的应用程序通常会使用这样的嵌套循环方式。</p><pre><code>// 因为数据返回的是 Uint8Array， 所以需要解析一次
const textDecoder = new TextDecoderStream();
const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
const reader = textDecoder.readable.getReader();


while (port.readable) {
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        break;
      }
      // 处理数据
   }
  } catch (error) {
    // 处理报错
  } finally {
    reader.releaseLock();
  }
}
</code></pre><blockquote><p> 数据逐字节发送，因此需要拼接一下。最终以&#39;\\r\\n&#39;结尾，可以通过此条件判断为单次读取数据完成 </p></blockquote><h2>总结</h2><p> 通过以上内容我们解了了 Web Serial API 读取数据的使用方法，想了解写入 <code>(writeable)</code> 可参考下面链接。 </p><p>如有表述不准确的地方，请大家指正。</p><h2>参考</h2><ol><li><a href="https://web.dev/serial" target="_blank">web-dev-serial</a></li><li><a href="https://wicg.github.io/serial" target="_blank">wicg-serial</a></li></ol>`,24),n=[t],a={name:"web-serial-api"},c=Object.assign(a,{props:{id:String},setup(l){return(i,s)=>(e(),o("div",null,n))}});export{c as default};