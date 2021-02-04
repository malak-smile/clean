<template>
<div>
  <div class="box">
    <div class="flex">
      <div class="div"></div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      aList: [
        { text: 'name', value: '张三' },
        { text: 'school', value: '四中' },
        { text: 'class', value: '一班' }
      ],
      bList: [
        { name: 'name', value: '李四' },
        { name: 'age', value: 26 },
        { name: 'sex', value: '男' },
        { name: 'class', value: '二班' }
      ]
    }
  },
  created() {
    this.fn2()
  },
  methods: {
    fn1() {
      const map = {}
      this.aList.forEach((a, b) => {
        map[a.text] = { index: b, deta: a }
      })
      this.bList.forEach((a) => {
        if (map[a.name] && map[a.name].value !== a.value) {
          this.aList[map[a.name].index].value = a.value
        } else {
          this.aList.push(a)
        }
      })
    },
    fn2() {
      const newB = this.bList.map((items) => {
        items.text = items.name
        delete items.name
        return items
      })
      const result = Object.values([...this.aList, ...newB]
        .reduce(
          (
            res,
            {
              text,
              ...rest
            }
          ) => {
            res[text] = {
              text,
              ...rest,
              ...(res[text] || {})
            }
            return res
          }, {}
        ))
      console.log(result)
    }
  }
}
</script>
<style type="text/css" lang='scss'>
.box {
  width:400px;
  height:400px;
  background: repeating-conic-gradient(#fff, #000, #fff 0.1deg);
}
.flex {
  display:flex;
  width:200px;
  height:200px;
  margin:0 auto;
  background:#ff0;
}
.div {
  margin: auto;
  width:100px;
  height:100px;
  background:#f0f;
}
</style>
