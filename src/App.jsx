import React from 'react'
import { Provider } from "react-redux";
import {store} from "./shared";
import { RouterF } from "./RouterF"
import { ConfigProvider } from 'antd'

function App() {
  return (
  
     <Provider store={store}>
          <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#BC302F',
          colorError: '#BC302F',
        }
      }}
    >
      <RouterF />
    </ConfigProvider>
      </Provider>
  )
}

export default App
