<script>
	import LoginVue from './Login.vue';
	import NavTopVue from './Nav-Top.vue';
	import HomeTopVue from './Home-Top.vue';
	import HomeBodyVue from './Home-body.vue';
	import loanMainVue from './loan-main.vue';
	import UserInfoVue from './UserInfo.vue';
	import RegVue from './Reg.vue';
	export default{
		name: "home",
		components:{
			LoginVue,
			NavTopVue,
			HomeTopVue,
			HomeBodyVue,
			loanMainVue,
			UserInfoVue,
			RegVue,
		},
		data(){
			return{
				logOrReg: false,
			}
		},
		methods:{
			changeshow(){
				this.logOrReg = !this.logOrReg;
			}
		}
	}
</script>
<template>
	<NavTopVue/>
	<!-- <HomeTopVue/> -->
	<!-- <HomeBodyVue/> -->
	<!-- <loanMainVue/>
	<UserInfoVue/> -->
	<!-- <LoginVue v-show="!logOrReg" :changeshow="changeshow"/>
	<RegVue v-show="logOrReg" :changeshow="changeshow"/> -->
</template>
<style lang="scss" scoped>

</style>