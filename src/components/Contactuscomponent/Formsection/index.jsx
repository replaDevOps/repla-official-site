
import { Row, Col, Flex, Card, Form, Typography, Image, Button } from 'antd'
import { motion } from 'framer-motion';
import { MyInput } from '../../Forms';
import './index.css'

const { Title, Text } = Typography;
const Formsection = () => {
    return (
        <section className='pad-common'>
            <div className="container">
                <Row gutter={[16, 16]}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                        viewport={{once: false}}
                        >
                        <Flex vertical gap={25}>
                            <Flex vertical gap={20}>
                                <Title level={1} className='head-font fw-700 text-white m-0'>Continue your journey</Title>
                                <Text className='text-white fw-400 para-font fs-18'>
                                    To <span className='text-brand'>explore</span>, <span className='text-brand'>learn</span>, and <span className='text-brand'>succeed</span> with us!
                                </Text>
                            </Flex>
                            <Flex className='w-100' gap={10} align='center'>
                                <span className='contact-badge'>
                                    <Image src='assets/icons/call.png' width={25} />
                                </span>
                                <Flex vertical gap={0}>
                                    <Title level={5} className='m-0 text-white'>Call Us</Title>
                                    <Title level={4} className='m-0 text-white'>+92 335 0970604 (HR)</Title>
                                </Flex>
                            </Flex>
                            <Flex className='w-100' gap={10} align='center'>
                                <span className='contact-badge'>
                                    <Image src='assets/icons/email.png' width={25} />
                                </span>
                                <Flex vertical gap={0}>
                                    <Title level={5} className='m-0 text-white'>Email Us</Title>
                                    <Title level={4} className='m-0 text-white'>hr.replatech@gmail.com</Title>
                                </Flex>
                            </Flex>
                            <Flex className='w-100' gap={10} align='center'>
                                <span className='contact-badge'>
                                    <Image src='assets/icons/location.png' width={25} />
                                </span>
                                <Flex vertical gap={0}>
                                    <Title level={5} className='m-0 text-white'>Head Office</Title>
                                    <Title level={4} className='m-0 text-white'>Riyadh - Taif Road, RIYADH, 'Asir SA, Riyadh, Saudi Arabia</Title>
                                </Flex>
                            </Flex>
                        </Flex>
                        </motion.div>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
                        viewport={{once: false}}
                        >
                        <Card className='h-100 contact-card shadow-c'>
                            <Form
                                layout='vertical'
                            >
                                <Row gutter={[16, 16]}>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                        <MyInput 
                                            label='First name'
                                            name='firstName'
                                            placeholder='Enter first name'
                                        />
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                        <MyInput 
                                            label='Last name'
                                            name='lastName'
                                            placeholder='Enter last name'
                                        />
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                                        <MyInput 
                                            label='Subject'
                                            name='subject'
                                            placeholder='Enter subject'
                                        />
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                                        <MyInput 
                                            textArea
                                            label='Message'
                                            name='note'
                                            placeholder='Enter your message here....'
                                            rows={4}
                                        />
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                                        <Flex justify='end'>
                                            <Button type='primary' className="metaverse-btn" >
                                                <span className="metaverse-btn-text">Submit</span>
                                                <span className="metaverse-btn-glow"></span>
                                            </Button>
                                        </Flex>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export { Formsection } 