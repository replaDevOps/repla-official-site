import { Breadcrumb } from '../../components'
import { Card, Flex, Typography } from 'antd'
import { termsconditionsData } from '../../Data'

const { Title, Text } = Typography
const TermConditions = () => {
  return (
    <div className='m-top-80'>
      <Breadcrumb title='Terms & Conditions' pageName='Terms & Conditions' breadcrumb={[{to:'/',name:'REPLA Technologies Pvt Ltd'}]}/>
      <div className='pad-common'>
        <div className="container">
          <Card className='bg-transparent py-3 border0'>
              <Flex vertical gap={'large'} className='mb-3'>
                  <Title level={4} className='text-white'>
                      {
                          termsconditionsData?.title
                      }
                  </Title>
                  <Text className='text-gray'>
                      {
                          termsconditionsData?.desc
                      }
                  </Text>
              </Flex>
              {
                  termsconditionsData?.listdoc?.map((listdata,index)=>
                      <Flex vertical gap={'large'} className='mb-3' key={index}>
                          <Title level={4} className='text-white'>
                              {
                                  listdata?.title
                              }
                          </Title>
                          <ol className='text-gray ol-cs'>
                              {
                                  listdata?.list?.map((list,index)=>
                                      <li key={index}>
                                          <Text className='text-gray'>
                                              {
                                                  list?.text
                                              }
                                          </Text>
                                      </li>
                                  )
                              }
                          </ol>
                      </Flex>
                  )
              }
          </Card>
        </div>
      </div>
    </div>
  ) 
}

export {TermConditions}