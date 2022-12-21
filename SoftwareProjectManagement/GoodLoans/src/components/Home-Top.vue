<script>
	export default{
		name:"home-top"
	}
</script>
<template>
	<div>
		<div style="text-align: center;" width="50%">
			<img width="50%" style="margin: 5px"  src="../images/banner01.jpg" class="d-block w-100" alt="...">
		</div>
		 <!-- 投资理财 -->
		<div class="el_feature container">
			<ul class="row">
				<li>
					<img src="../images/feature01.png" alt="">
					<div>
						<h3>投资理财</h3>
						<p>稳定投资、高收益、短期限，易融贷先行赔付，保障投资人权益。</p>
					</div>
				</li>
				<li>
					<img src="../images/feature02.png" alt="">
					<div>
						<h3>投资理财</h3>
						<p>稳定投资、高收益、短期限，易融贷先行赔付，保障投资人权益。</p>
					</div>
				</li>
				<li>
					<img src="../images/feature03.png" alt="">
					<div>
						<h3>投资理财</h3>
						<p>稳定投资、高收益、短期限，易融贷先行赔付，保障投资人权益。</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss">
// 投资理财
.el_feature {
    padding: 20px 0;

    ul {
        // display: flex;
		text-align: center;
        li {
            display: inline-flex;
			width: 380px;
			margin: 0 5px 0 5px;
            img {
                // width: 70px;
                height: 100%;
                margin-right: 10px;
            }

            div {
                // display: flex;
                // flex-direction: column;

                h3 {
					margin: 0;
                    font-size: 18px;
                    color: #333333;
                    font-weight: bold;
                    margin-bottom: 10px;
					float: left;
                }

                p {
					width: 230px;
					margin: 0;
                    font-size: 14px;
                    color: #999999;
					float: left;
					text-align: left;
                }
            }
        }
    }
}

</style>