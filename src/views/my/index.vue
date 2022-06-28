<template>
  <div>
    <!-- 登陆前，登录后 -->
    <div class="header header-login">
      <div class="avatar">
        <div class="left">
          <van-image
            width="1.76rem"
            height="1.76rem"
            round
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <span>黑马头条号</span>
        </div>
        <div class="button">编辑资料</div>
      </div>
      <ul class="list">
        <li>
          <p>8</p>
          <p>头条</p>
        </li>
        <li>
          <p>66</p>
          <p>关注</p>
        </li>
        <li>
          <p>68</p>
          <p>粉丝</p>
        </li>
        <li>
          <p>88</p>
          <p>获赞</p>
        </li>
      </ul>
    </div>
    <div class="header header-notlogin">
      <div class="inner">
        <img src="@/assets/mobile.png" alt="" />
        <p>登录 / 注册</p>
      </div>
    </div>
    <!-- 收藏 历史 -->
    <van-grid :column-num="2">
      <van-grid-item icon="photo-o" text="收藏">
        <template #icon>
          <i class="toutiao toutiao-shoucang"></i>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="历史">
        <template slot="icon">
          <i class="toutiao toutiao-lishi"></i>
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 单元格  -->
    <van-cell-group>
      <van-cell title="消息通知" is-link />
      <van-cell title="小智同学" is-link />
    </van-cell-group>
    <!-- 退出登录按钮 -->
    <van-button block type="default">退出登录</van-button>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
// 公共头部
.header {
  width: 750px;
  height: 401px;
  background: rgba(51, 150, 250, 0.7) url("@/assets/banner.png") no-repeat;
  background-size: cover;
}
// 没有登录的头部
.header-notlogin {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 132px;
    height: 132px;
    margin-bottom: 15px;
  }
  p {
    width: 145px;
    height: 28px;
    font-size: 28px;
    color: #ffffff;
  }
}
// 登录了的头部
.header-login {
  padding-top: 116px;
  .avatar {
    padding-left: 32px;
    padding-right: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 55px;
    .button {
      width: 116px;
      height: 33px;
      line-height: 33px;
      text-align: center;
      background-color: #ffffff;
      border-radius: 16px;
      font-size: 20px;
      color: #666666;
    }
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 30px;
        color: #ffffff;
        margin-left: 22px;
      }
    }
  }
  .list {
    display: flex;
    li {
      flex: 1;
      text-align: center;
      p {
        color: #fff;
        font-weight: 400;
        &:nth-child(1) {
          font-size: 36px;
        }
        &:nth-child(2) {
          font-size: 23px;
        }
      }
    }
  }
}
// 收藏 历史
.toutiao {
  font-size: 45px;
}
.van-grid-item {
  &:nth-child(1) {
    color: #eb5253;
  }
  &:nth-child(2) {
    color: #ff9d1d;
  }
}
/deep/.van-grid-item__text {
  font-size: 28px;
  color: #333;
}
// 单元格
.van-cell-group {
  margin: 9px 0;
}
// 退出登录按钮
.van-button {
  color: #d86262;
  font-size: 30px;
}
</style>
