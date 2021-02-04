<template>
    <div>
        1111112222444
        <div v-cloak>
          {{ message }}
        </div>
        <ul class="ul">
          <li @click="onShowDataFn">选择出生日期</li>
          <li @click="onShowCityFn">选择居住省市</li>
          <li @click="onShowCardFn">选择银行卡</li>
          <li @click="onShowHightFn">选择身高</li>
        </ul>
        <van-popup v-model="show"  position="bottom" class="show">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择出生日期"
            cancel-button-text=' '
            @confirm='confirmFn'
            :min-date="minDate"
            :max-date="maxDate"
            :formatter="formatter"
          />
        </van-popup>
        <!-- <van-area title="标题" :area-list="areaList" value="110101" /> -->
        <van-popup v-model="showCity"  position="bottom" class="show">
          <van-area
          title="选择居住省市"
          cancel-button-text=' '
          :area-list="areaList"
          :columns-num="2"
          @confirm='confirmFn'
          @cancel='cancelFn'
          />
        </van-popup>
        <van-popup v-model="showCard"  position="bottom">
          11111
        </van-popup>
        <van-popup v-model="showHeight"  position="bottom" class="show">
          <van-picker
          title="选择身高和体重"
          cancel-button-text=' '
          show-toolbar
          :columns="columns"
          @confirm="confirmFn"
          @cancel="onCancel"
          @change="onChange"
        />
        </van-popup>
    </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import {
  Popup,
  TreeSelect,
  Area,
  Picker,
  DatetimePicker
} from 'vant'
import 'vant/lib/index.css'
import areaList from '@/assets/js/area'
import { msToDate } from '@/assets/js/common'

Vue.use(TreeSelect)
Vue.use(Area);
Vue.use(DatetimePicker);
Vue.use(Popup);
Vue.use(Picker)
const columns = [
  // 第一列
  {
    values: ['周一', '周二', '周三', '周四', '周五'],
    defaultIndex: 0,
  },
  // 第二列
  {
    values: ['上午', '下午', '晚上'],
    defaultIndex: 0,
  },
]

export default {
  name: 'About',
  data() {
    return {
      areaList,
      columns,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      show: false,
      showCity: false,
      showCard: false,
      showHeight: false,
      currentDate: new Date(),
      activeId: 1,
      activeIndex: 0,
      currentRoute: '',
      message: 'ddddd'
    }
  },
  mounted() {
    // console.log(process);
    // console.log(process.env);
  },
  methods: {
    formatter(type, val) {
      if (type === 'year') {
        return `${val}年`;
      }
      if (type === 'month') {
        return `${val}月`;
      }
      if (type === 'day') {
        return `${val}日`;
      }
      return val;
    },
    // 出生日期
    onShowDataFn() {
      this.show = true;
    },
    // 出生省市
    onShowCityFn() {
      this.showCity = true;
    },
    // 银行卡
    onShowCardFn() {
      this.showCard = true
    },
    // 身高体重
    onShowHightFn() {
      this.showHeight = true
    },
    confirmFn(e) {
      console.log('确定', e);
      console.log(e.getFullYear())
      console.log(msToDate(e));
    },
    cancelFn() {
      console.log('取消')
    },
    jump(url) {
      this.$router.push(`/about?view=${url}`)
      this.currentRoute = url
    },
    seeFn(item) {
      window.open(item.link);
    },
    newWindowFn(item) {
      window.open(item.lable)
    }
  }
};
</script>

<style scoped lang="scss">
  [v-cloak] {
  display: none;
}
div {
  font-size:px2rem(30px)
}
.ul {
  display: flex;
  width:px2rem(750px);
  font-size: px2rem(15px);
  flex-wrap: wrap;
  li {
    width:50%;
  }
}
.show .van-picker__cancel {
  overflow: hidden;
}
.show .van-picker__confirm {
  color:#fff;
  background:#FFAA00;
  border-radius: px2rem(10px);
  width:px2rem(112px);
  height:px2rem(50px);
  margin-right:px2rem(30px);
}
</style>
