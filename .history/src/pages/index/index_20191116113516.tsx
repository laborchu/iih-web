import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'


export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '甲亢测评'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='check-body'>
        <View className='check-header'>
          <View className='at-icon at-icon-image'></View>

        </View>
        <View className='disclaimer-body'>
          <View className='disclaimer-title'>使用及免责申明</View>
          <View className='disclaimer-text'>
            <View>1、本软件用于测定是否存在甲亢面容，面容需正面、自然，避免头发、帽子、眼镜等遮挡，避免做出不自然的表情，影响则定结果。</View>
            <View>2、面容与疾病的关联是临床经验性判断，无法作为诊断的标准。</View>
            <View>3、测定结果阳性不可作为疾病的诊断、治疗依据，仍以专科医生诊断为准。</View>
            <View>4、测定结果阴性不可作为疾病的排除依裾，如有其他不适症状，仍以专科医生诊断为准。</View>
            <View>5、测定结果存在高度怀疑的，建设至医院进一步检查，明确诊断，及时治疗。</View>
            <View>6、欢迎对使用结果给出反馈，使用过程中的个人隐私将被保护。</View>
          </View>
        </View>
      </View>
    )
  }
}
