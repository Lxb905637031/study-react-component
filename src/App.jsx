// import AnthonyCatacoliLongWeekend from './assets/source/AnthonyCatacoliLongWeekend.mp3'
// import CodyMartinLoavesFishBackgroundVocals from './assets/source/CodyMartinLoavesFishBackgroundVocals.mp3'
// import MidnightDaydreamSparkleSugar from './assets/source/MidnightDaydreamSparkleSugar.mp3'
// import WayfairBaldur from './assets/source/WayfairBaldur.mp3'

// import { useState } from 'react'

import {
  // Switch
  // Transfer
  // Collapse
  // Calendar
  Skeleton
} from './components'

function App() {

  // const [checked, setChecked] = useState(false)

  // const toggleChecked = () => {
  //   setChecked(!checked)
  // }

  // const data = [
  //   {
  //     label: '选项1',
  //     disabled: false,
  //     value: false
  //   },
  //   {
  //     label: '选项2',
  //     disabled: false,
  //     value: false
  //   },
  //   {
  //     label: '选项3',
  //     disabled: true,
  //     value: false
  //   },
  //   {
  //     label: '选项4',
  //     disabled: false,
  //     value: false
  //   },
  //   {
  //     label: '选项5',
  //     disabled: false,
  //     value: false
  //   },
  //   {
  //     label: '选项6',
  //     disabled: true,
  //     value: false
  //   }
  // ]

  // const collapseList = [
  //   {
  //     title: '标题1',
  //     name: '1',
  //     content: '代码是写出来给人看的，附带能在机器上运行',
  //     disabled: false
  //   },
  //   {
  //     title: '标题2',
  //     name: '2',
  //     content: '技术无非就是那些开发它的人的共同灵魂',
  //     disabled: false
  //   },
  //   {
  //     title: '标题3',
  //     name: '3',
  //     content: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准',
  //     disabled: true
  //   },
  //   {
  //     title: '标题4',
  //     name: '4',
  //     content: '不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会',
  //     disabled: false
  //   },
  //   {
  //     title: '标题5',
  //     name: '5',
  //     content: '米袋虽空——樱花开哉',
  //     disabled: false
  //   }
  // ]

  // const songList = [
  //   {
  //     name: 'AnthonyCatacoliLongWeekend',
  //     songSrc: AnthonyCatacoliLongWeekend
  //   },
  //   {
  //     name: 'CodyMartinLoavesFishBackgroundVocals',
  //     songSrc: CodyMartinLoavesFishBackgroundVocals
  //   },
  //   {
  //     name: 'MidnightDaydreamSparkleSugar',
  //     songSrc: MidnightDaydreamSparkleSugar
  //   },
  //   {
  //     name: 'WayfairBaldur',
  //     songSrc: WayfairBaldur
  //   }
  // ]

  return (
    <div 
      className="App" 
    >
      {/* <Slider
      /> */}
      {/* <Switch
        checked={ checked }
        disabled={ false }
        toggleChecked={ toggleChecked }
      /> */}
      {/* <Transfer
        data={data}
      /> */}
      {/* <Collapse
        data={ collapseList }
        active={['1', '4']}
      /> */}
      {/* <Calendar /> */}
      <Skeleton>
        <img src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fca436192-5a8d-468d-aebc-17635fbbe8aa%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682228599&t=80e8366e89a5ac9f3f972fd7ae7398c1' />
      </Skeleton>
    </div>
  )
}

export default App
