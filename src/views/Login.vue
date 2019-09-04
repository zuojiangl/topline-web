<template>
  <div>
    <!-- 导航头 -->

   <van-nav-bar title="登录"></van-nav-bar>
    <!-- 输入框 -->
    <van-cell-group>
      <van-field v-model="user.mobile" required clearable left-icon="phone-o" placeholder="请输入手机号"></van-field>
      <van-field v-model="user.code" required clearable left-icon="lock" placeholder="请输入验证码">
        <van-button slot="button" type="primary" size="small">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="login-btn">
      <van-button class="van-btn" type="info">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn {
  padding: 20px;
  .van-btn {
    width: 100%;
  }
}
</style>
