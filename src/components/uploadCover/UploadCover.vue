<template>
    <div class="uploadCover">
        <div class="clearfix">
            <div class="coverImgBox pos-r f-l" :style="{width: width +'px', height: height + 'px'}">
                <a class="pos-a left nextBtn" @click='nextImg'>
                    <i class="el-icon-arrow-left"></i>
                </a>

                <a class="pos-a right nextBtn" @click='prevImg'>
                    <i class="el-icon-arrow-right"></i>
                </a>
                <div>
                    <img id="coverImages" v-for="(img,index) in imgList" v-if='shufflingId==index' :src="img" :alt="img" :style="{width: width +'px', height: height + 'px'}">
                </div>
            </div>
            <div class="f-l pos-r btnBox" :style="{height: height + 'px'}">
                <!-- <el-upload class="coverImgUpload pos-a" :action="uploadUrl" :show-file-list="false" :before-upload="beforeUpload" :on-success="handleUploaCoverdSuccess">
                    <el-button size="small" type="primary" v-loading.fullscreen.lock="fullscreenLoading">上传图片</el-button>
                </el-upload> -->
                <el-upload
                  class="coverImgUpload pos-a"
                  action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
                  :before-upload="beforeUpload" :on-success="handleUploaCoverdSuccess">
                  <el-button size="small" type="primary" v-loading.fullscreen.lock="fullscreenLoading">点击上传</el-button>
                </el-upload>
            </div>
        </div>
        <span class="prompt" v-show="remark">{{remarkC}}</span>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { coverImage } from '@/api/components/uploadCover/index';
    export default {
        name: 'mobo-upload-cover',
        props: {
            remark: {     //是否显示备注
                type: Boolean,
                default: function () {
                    return true
                }
            }, 
            remarkC: {     //备注内容
                type: String,
                default: function () {
                    return '我是提示信息';
                }
            },
            //封面宽度
            width: {
                type: [Number, String],
                default: function () {
                    return 200
                }
            },
            //封面高度
            height: {
                type: [Number, String],
                default: function () {
                    return 100
                }
            }
        },
        data () {
            return {
                imgList: [
                    'static/coverImg/default_1.jpg',
                    'static/coverImg/default_2.jpg',
                    'static/coverImg/default_3.jpg',
                    'static/coverImg/default_4.jpg',
                    'static/coverImg/default_5.jpg',
                    'static/coverImg/default_6.jpg'
                ],  //封面图片列表
                image: '',    //封面图片地址
                shufflingId: '0',  //当前封面封面标志
                uploadUrl: 'https://jsonplaceholder.typicode.com/posts/',//process.env.BASE_API + '/uploadify/upload',  //上传图片路径
                fullscreenLoading: false  //加载中遮罩
                //options: {}
            }
        },
        created() {
            //加载90张封面图片
            //this.coverImage();
        },
        methods: {
            //图片地址前缀
            imgPath() {
                this.domain = process.env.BASE_PATH;
                return this.domain;
            },
            //警告信息
            warning(message) {
                this.$message({
                    message: message,
                    type: 'warning'
                });
            },
            coverImage() {
                //封面图片
                coverImage.image().then(response => {
                    this.imgList = response.data.data;
                    this.image = this.imgList[0];
                });
            },
            // 上传前对文件的大小和类型的判断
            beforeUpload(file) {
                this.fullscreenLoading = true;
                const extension = file.name.split('.').pop() === 'bmp'
                const extension2 = file.name.split('.').pop() === 'jpg'
                const extension3 = file.name.split('.').pop() === 'jpeg'
                const extension4 = file.name.split('.').pop() === 'png'
                const extension5 = file.name.split('.').pop() === 'gif'
                const isLt2M = file.size / 1024 / 1024 < 2
                if (!extension && !extension2 && !extension3 && !extension4 && !extension5) {
                    this.warning("this.$i18n.t('questionnaire.qnaCreate.uploadFormat')");
                    this.fullscreenLoading = false;
                    return false;
                }
                if (!isLt2M) {
                    this.warning("this.$i18n.t('questionnaire.qnaCreate.uploadSize')");
                    this.fullscreenLoading = false;
                    return false;
                }
            },
            //上传封面图片
            handleUploaCoverdSuccess(response, file) {
                this.imgList.unshift(file.url);
                //this.imgList.unshift(this.imgPath() + response.url.substring(3, response.url.length));
                this.shufflingId = 0;
                this.image = this.imgList[this.shufflingId];
                this.fullscreenLoading = false;
            },
            prevImg: function () {
                if (this.shufflingId > 0 && this.shufflingId < this.imgList.length) {
                    this.shufflingId = parseInt(this.shufflingId) - 1;
                } else this.shufflingId = parseInt(this.imgList.length) - 1;
                this.image = this.imgList[this.shufflingId]
            },
            nextImg: function () {
                if (this.shufflingId >= 0 && this.shufflingId < this.imgList.length - 1) {
                    this.shufflingId = parseInt(this.shufflingId) + 1;
                } else this.shufflingId = 0;
                this.image = this.imgList[this.shufflingId]
            }

        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    .uploadCover {
        .prompt {
            font-size: 12px;
            color: #999999;
            display: block;
        }
        .coverImgBox {
            width: 200px;
            height: 100px;
            border: 1px #ccc solid;
            overflow: hidden;
            float: left;
        }

        .coverImgBox img {
            width: 200px;
            height: 100px;
        }
        .coverImgBox .nextBtn {
            background: rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            top: 50%;
            margin-top: -20px;
            color: #fff;
            text-align: center;
            line-height: 40px;
            cursor: pointer;
        }
        .coverImgUpload{
            margin-left: 20px;
            bottom: 0;
        }
    }
</style>