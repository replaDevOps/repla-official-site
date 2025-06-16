import { Form, Input, Typography } from 'antd';
export const MyInput = ({withoutForm, name, label, tooltip, type, size, disabled, required, message, value, placeholder, textArea, validator, oTp, ...props }) => {
    return (
        <>
            {
                withoutForm ?
                    textArea ?
                        <Input.TextArea
                            placeholder={placeholder || ''}
                            value={value || ''}
                            {...props}
                        /> :
                    type==='password' ?
                        <Input.Password
                            placeholder={placeholder || ''}
                            value={value || ''}
                            size={size || 'middle'}
                            disabled={disabled || false}
                            {...props}
                            />:
                        <Input
                            type={type || 'text'}
                            placeholder={placeholder || ''}
                            value={value || ''}
                            size={size || 'middle'}
                            disabled={disabled || false}
                            {...props}
                        />
                :
                <Form.Item
                    name={name}
                    label={<Typography.Text className='fs-13 fw-500 text-white'>{label}</Typography.Text>}
                    tooltip={tooltip || null}
                    className='custom-input fs-13'
                    rules={validator ? [
                        {
                            required: required,
                            message: message,
                        },
                        validator
                    ] : [
                        {
                            required: required,
                            message: message,
                        },
                    ]}
                >
                    {
                        textArea ?
                            <Input.TextArea
                            className='transparent-input fs-13 text-white'
                                placeholder={placeholder || ''}
                                value={value || ''}
                                {...props}
                                disabled={disabled || false}
                            /> :
                            oTp ?
                                <Input.OTP 
                                    className='transparent-input fs-13 text-white'
                                    placeholder={placeholder || ''}
                                    value={value || ''}
                                    {...props}
                                    disabled={disabled || false}
                                /> :
                        type==='password' ?
                            <Input.Password
                            className='transparent-input fs-13 text-white'
                                placeholder={placeholder || ''}
                                value={value || ''}
                                size={size || 'middle'}
                                disabled={disabled || false}
                                {...props}
                                />:
                            <Input
                            className='transparent-input fs-13 text-white'
                                type={type || 'text'}
                                placeholder={placeholder || ''}
                                value={value || ''}
                                size={size || 'middle'}
                                disabled={disabled || false}
                                {...props}
                            />
                    }
                </Form.Item>

            }
        </>
    )
}