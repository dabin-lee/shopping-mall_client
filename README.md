# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

vite-plugin-next-react-router
next.js처럼 폴더구조를 편하게 사용할 수 있는 라우팅 처리

개발환경
npm, vite, node,
vite를 사용하는 이유?
webpack은 bundling를 함
vite는 변경된 해당 파일만을 업로드

배포 Rollup을 사용
똑같이 번들링을 하지만, vite는 코드스플리팅, 청킹, 트리쉐이킹 모두 다 알아서 해줌





<!-- 
cart: 상품 목록/ 수량 
input요소 등
 -->