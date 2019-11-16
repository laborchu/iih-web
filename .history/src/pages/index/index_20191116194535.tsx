import { View } from '@tarojs/components';
import Taro, { Component, Config } from '@tarojs/taro';
import { AtCheckbox, AtModal, AtActivityIndicator } from 'taro-ui';
import './index.scss';

export default class Index extends Component<any, any> {

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
  constructor() {
    super(...arguments)
    this.state = {
      checkedList: ['accept'],
      showDialog: false,
      upload: false
    }
  }

  checkboxOption = [{
    value: 'accept',
    label: '我同意【使用及免责申明】',
  }]

  handleChange(value) {
    this.setState({
      checkedList: value
    })
  }

  handleConfirmDialog() {
    this.setState({
      showDialog: false
    })
  }

  chooseImage() {
    if (this.state.checkedList.length) {
      Taro.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album'],
        success(img: any) {
          let file = img.tempFiles[0];
          let ext = file.type.split('/')[1];
          this.setState({
            upload: true
          })
          Taro.uploadFile({
            url: 'http://192.168.31.90:3001/images',
            filePath: file.path,
            name: 'file',
            formData: {
              fileName: new Date().getTime() + "." + ext
            },
            complete: () => {
              this.setState({
                upload: false
              })
            }
          })
        }
      })

    } else {
      this.setState({
        showDialog: true
      })
    }
  }

  render() {
    return (
      <View className='check-body'>
        <View className='check-title'>甲亢检测</View>
        <View className='check-header'>
          <View className='check-image' onClick={this.chooseImage.bind(this)}>
            {
              this.state.upload ?
                <AtActivityIndicator size={64}></AtActivityIndicator> :
                <View className='at-icon at-icon-image'></View>
            }
            <View className='upload-label'>上传照片</View>
          </View>
        </View>
        <View className='disclaimer-body'>
          <AtCheckbox
            options={this.checkboxOption}
            selectedList={this.state.checkedList}
            onChange={this.handleChange.bind(this)}
          />
          <View className='disclaimer-text'>
            <View>1、本软件用于测定是否存在甲亢面容，面容需正面、自然，避免头发、帽子、眼镜等遮挡，避免做出不自然的表情，影响则定结果。</View>
            <View>2、面容与疾病的关联是临床经验性判断，无法作为诊断的标准。</View>
            <View>3、测定结果阳性不可作为疾病的诊断、治疗依据，仍以专科医生诊断为准。</View>
            <View>4、测定结果阴性不可作为疾病的排除依裾，如有其他不适症状，仍以专科医生诊断为准。</View>
            <View>5、测定结果存在高度怀疑的，建设至医院进一步检查，明确诊断，及时治疗。</View>
            <View>6、欢迎对使用结果给出反馈，使用过程中的个人隐私将被保护。</View>
          </View>
        </View>
        {this.state.showDialog && <AtModal
          isOpened
          title='提示'
          confirmText='确认'
          onConfirm={this.handleConfirmDialog.bind(this)}
          content='请先勾选同意【使用及免责申明】'
        />}
      </View>
    )
  }
}
