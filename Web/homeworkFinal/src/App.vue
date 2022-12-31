<script>
  import HomeVue from './components/Home.vue';
  export default{
    name: 'app',
    components:{
      HomeVue
    },
    setup() {
      let data = JSON.parse(localStorage.getItem('englishItem'));
      let historyData = JSON.parse(localStorage.getItem('history'));
      if(!data){
        data = [
            {
              chinese: '中国',
              english: 'China',
              note: '[China] 古代华夏族建国于黄河流域一带,以为居天下之中,故称中国。后成为我国的专称。全称中华人民共和国。面积9600000平方公里,人口12亿(1994),首都北京',
              collection: true,
              id: 1
            },{
              chinese: '英语',
              english: 'English',
              note: '[English] 英国和美国以及大多数英属殖民地和自治领的语言',
              collection: false,
              id: 2
            },{
              chinese: '手机',
              english: 'phone',
              note: '[phone] 电话的口承、耳承和相应的话筒、听筒都装在单个把手上',
              collection: false,
              id: 3
            },{
              chinese: '卡片',
              english: 'card',
              note: '[card] 用来记录各种资料以便参考、查检的纸片',
              collection: true,
              id: 4
            },{
              chinese: '收藏',
              english: 'collection',
              note: ' [collect;store up]∶收集保藏',
              collection: true,
              id: 5
            },{
              chinese: '取消',
              english: 'cancel',
              note: '[cancel;reject;call off;do away with]使原有的制度、规章、资格、权利等失去效力，取消不合理的规章制度',
              collection: true,
              id: 6
            },{
              chinese: '零食',
              english: 'snacks',
              note: '[snack;between-meal nibbles] 正常饭食以外的零星的食品',
              collection: true,
              id: 7
            },{
              chinese: '地理',
              english: 'Geography',
              note: '[geography] 见地理学',
              collection: false,
              id: 8
            },{
              chinese: '数学',
              english: 'mathematics',
              note: '[mathematics]∶研究现实世界的空间形式和数量关系的科学。包括算术、代数、几何、三角、微积分等',
              collection: false,
              id:  9
            },{
              chinese: '语文',
              english: 'language',
              note: '[language and literature]∶语文和文学的简称',
              collection: false,
              id: 10
            },{
              chinese: '物理',
              english: 'Physics',
              note: '[physics]∶物理学',
              collection: false,
              id: 11
            },{
              chinese: '化学',
              english: 'Chemistry',
              note: '[chemistry] 研究物质的组成、结构和性质及其转化的学科',
              collection: false,
              id: 12
            },{
              chinese: '政治',
              english: 'Politics',
              note: '[politics;political affairs] 政府、政党、集团或个人在国家事务方面的活动。治理国家施行的措施政治家',
              collection: false,
              id: 13
            },{
              chinese: '历史',
              english: 'history',
              note: ' [history] 记载和解释作为一系列人类活动进程的历史事件的一门学科',
              collection: false,
              id: 14
            },{
              chinese: '技术',
              english: 'technology',
              note: '[technology;art;skill;technique] 在劳动生产方面的经验、知识和技巧,也泛指其他操作方面的技巧',
              collection: false,
              id: 15
            }
          ]
      }
      if(!historyData){
        historyData = {
          historyNum: 6,
          historyCorNum: 3,
        }        
      }
      localStorage.setItem('history',JSON.stringify(historyData));
      localStorage.setItem('englishItem',JSON.stringify(data));
    },
  }
</script>

<template>
  <HomeVue/>
</template>

<style>

</style>
