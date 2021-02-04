// const msToDate = (time) => {
//   const Y = time.getFullYear();
//   const M = (val => (val >= 10 ? val : `0${val}`))(time.getMonth() + 1);
//   const D = (val => ((val >= 10) ? val : `0${val}`))(time.getDate());
//   const H = (val => ((val >= 10) ? val : `0${val}`))(time.getHours());
//   const Mi = (val => ((val >= 10) ? val : `0${val}`))(time.getMinutes());
//   const S = (val => ((val >= 10) ? val : `0${val}`))(time.getSeconds());
//   const result1 = `${Y}-${M}-${D}`
//   const result2 = `${result1} ${H}:${Mi}:${S}`
//   return {
//     hasTime: result2, // ---> 2017-09-19 08:00:00
//     withoutTime: result1
//   }
// }
class msToDate {
  constructor(t) {
    const time = t || new Date()
    this.Y = time.getFullYear();
    this.M = (val => (val >= 10 ? val : `0${val}`))(time.getMonth() + 1);
    this.D = (val => ((val >= 10) ? val : `0${val}`))(time.getDate());
    this.H = (val => ((val >= 10) ? val : `0${val}`))(time.getHours());
    this.Mi = (val => ((val >= 10) ? val : `0${val}`))(time.getMinutes());
    this.S = (val => ((val >= 10) ? val : `0${val}`))(time.getSeconds());
  }

  format(type) {
    const self = this
    if (type === 'YYYY-MM-DD') {
      return `${self.Y}-${self.M}-${self.D}`
    }
    return `${self.Y}-${self.M}-${self.D}`
  }
}
export {
  msToDate
}
