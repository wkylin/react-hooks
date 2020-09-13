/*
 * @Author: wkylin.w
 * @Date: 2020-08-08 18:48:04
 * @Last Modified by: wkylin.w
 * @Last Modified time: 2020-09-13 17:22:32
 */

//  Call Child Method from Parent

import React, { useRef, forwardRef, useImperativeHandle } from 'react'

const ForwardRefFn = (props, ref) => {
  useImperativeHandle(ref, () => ({
    hello() {
      console.log('hello Child')
    },
  }))

  return <h1>Hi</h1>
}
const Child = forwardRef(ForwardRefFn)

const ForwardRefParent = () => {
  const childRef = useRef()
  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.hello()}>Click</button>
    </div>
  )
}

export default ForwardRefParent

//const { Component } = React;
// class Parent extends Component {
//   constructor(props) {
//     super(props);
//     this.child = React.createRef();
//   }
//   onClick = () => {
//     this.child.current.hello();
//   };
//   render() {
//     return (
//       <div>
//         <Child ref={this.child} />
//         <button onClick={this.onClick}>Click</button>
//       </div>
//     );
//   }
// }
// class Child extends Component {
//   hello() {
//     console.log('hello child');
//   }
//   render() {
//     return <h1>Hello</h1>;
//   }
// }

// useRef: 用于获取元素的原生DOM或者获取自定义组件所暴露出来的ref方法(父组件可以通过ref获取子组件，并调用相对应子组件中的方法)
// useImperativeHandle:在函数式组件中，用于定义暴露给父组件的ref方法。
// React.forwardRef: 将ref父类的ref作为参数传入函数式组件中，本身props只带有children这个参数，这样可以让子类转发父类的ref,当父类把ref挂在到子组件上时，子组件外部通过forwardRef包裹，可以直接将父组件创建的ref挂在到子组件的某个dom元素上
