import{o as t,c as e,j as o}from"./index-757c75b0.js";const n=o(`<p>2021年1月8日10:51:43</p><h2>记一次web横屏转竖屏</h2><blockquote><p>css 修改</p></blockquote><pre><code>    // 横屏切换竖屏直接调换宽高笔
    html.vertical {
        height: 100vw;
        width: 100vh;
        overflow: hidden;
    }
</code></pre><blockquote><p>js 修改</p></blockquote><pre><code>    const html = document.documentElement
    const { clientWidht, clientHeight } = html
    // 旋转之后有留白 留白为宽高差的一半
    const dis = (clientWidth - clientHeight) / 2
    html.style.transform = \`
        translateX(\${dis}px) // 高度100vw将试图推往左
        translateY(-\${dis}px) // 宽度100vh将试图推往下
        rotate(270deg) // 旋转角度
    \`
    html.classList.add(&#39;vertical&#39;)
</code></pre><blockquote><p>思维无限</p></blockquote><blockquote><p>冬季少见的阳光刺进纱窗，暖洋洋。</p></blockquote>`,8),c=[n],l={name:"horizontal-vertical"},d=Object.assign(l,{props:{id:String},setup(s){return(i,r)=>(t(),e("div",null,c))}});export{d as default};
