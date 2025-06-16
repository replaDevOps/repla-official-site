import React from 'react'
import { RouterF } from "./RouterF"
import { ConfigProvider } from 'antd'

function App() {
  return (
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
  )
}

export default App
