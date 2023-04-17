import{o as e,c as s,l as p}from"./index-91c1214f.js";const o=p(`<p>犯错让你更聪明————德国寓言</p><p> 当我们在构建web项目时， 必不可少的会使用webpack 强大而繁琐（望而生畏）。目前使用版本 <span class="special">2.x</span> 。 </p><blockquote><p> 望而生畏：一见之下就产生了畏惧心理。形容人神态威严或事务艰难令人畏惧。 </p></blockquote><p>工具很强大。在前端大潮流下屹立不倒，体现其价值可见一斑。</p><p> 最近在项目进行中，发现之前配置的 <span class="special">webpack.config.js</span> 没有将外部（ <span class="special">另外一个项目</span> ） 引入的js文件进行babel编译,导致在不支持es6的语法浏览器报错。（毋庸置疑，使用Chrome开发，是一个极其错误的决定。） </p><pre><code>{
    &quot;test&quot;: {},
    &quot;exclude&quot;: &quot;/node_modules/&quot;,
    &quot;use&quot;: [
        &quot;bable-loader&quot;
    ]
}
</code></pre><p><span class="special"> 不知道为何这样简单的配置不能将外部项目的文件进行编译。 </span></p><p> 通过测试配置（可能不完善），如下配置可以进行babel编译，不知为啥。希望有更好的建议 </p><pre><code>{
  test: {},
  exclude: &#39;/node_modules/&#39;,
  loader: [&#39;bable-loader&#39;],
  query: {
    presets: [&#39;es2015&#39;] // 最新preset版本 babel-preset-env
  }
}
</code></pre><p> 当我们同高不可攀的各种尖项技能狭路相逢，不要试图询问，因为，犯错不是罪，是让我们茁壮成长的信息。 </p>`,10),a=[o],n={name:"webpack-some"},u=Object.assign(n,{props:{id:String},setup(t){return(c,l)=>(e(),s("div",null,a))}});export{u as default};
