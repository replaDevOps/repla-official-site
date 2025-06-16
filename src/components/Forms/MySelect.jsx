import {Form, Select, Typography} from 'antd';
import './index.css'
export const MySelect = ({withoutForm,name,label,mode,disabled,required,message,value,options, ...props}) => {
  return (
    withoutForm?
      <Select 
        maxTagCount= 'responsive'
        className='select'
        value={value || ''} 
        mode={mode || ''} 
        disabled={disabled || false} 
        {...props}
      >
          {
              options?.map(opt=><Select.Option value={opt?.id} key={opt?.id}>{opt?.name}</Select.Option>)
          }
      </Select>
      :
      <Form.Item
          name={name}
          label={<Typography.Text  className="label fs-13 fw-500">{label}</Typography.Text>}
          rules={[
              {
              required,
              message,
              },
          ]}
          className='select'
          >
              <Select 
                value={value || ''} 
                 className='select fs-13'
                mode={mode || ''} 
                disabled={disabled || false} 
                maxTagCount= 'responsive'
                {...props}
                >
                  {
                      options?.map(opt=><Select.Option value={opt?.name} key={opt?.id}>{opt?.name}</Select.Option>)
                  }
              </Select>
      </Form.Item>  
  )
}