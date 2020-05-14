/**
 * @github https://github.com/zenoslin/highlight.js
 * @forked from https://github.com/highlightjs/highlight.js
 */
import hljs from '../highlight/lib/core';
import javascript from '../highlight/lib/languages/javascript';
import '../highlight/styles/googlecode.css';

// 注册hightlight.js的语言
hljs.registerLanguage('javascript', javascript);
// 将hightlight.js挂载在window上
window.hljs = hljs;
