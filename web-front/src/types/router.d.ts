interface IRouter {
  path: string
  // element 是一个<><>的组件
  element: JSX.Element
  children?: IRouter[]
  hasMenu: boolean
}

export { IRouter }
