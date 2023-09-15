<!-- 
@Description: markdown预览页面
@param  {type} params
-->
<template>
    <div class='page page-md-preview'>
        <div class="article-catelog-content">
            <div class="catelog-label">目录</div>
            <MdCatalog editorId="id" scrollElement="#articleContent" @onClick="onClick" />
        </div>
        <div class="article-content" id="articleContent" ref="articleContentRef">
            <div class="content-box" ref="contentBoxRef">
                <div class="content-title">{{ articleTitle }}</div>
                <MdPreview ref="mdViewRef" editorId="id" :mdHeadingId="mdHeadingStr" v-model="viewContent" @onGetCatalog="onGetCatalog" scrollElementOffsetTop="0" />
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
    import { MdPreview, MdCatalog } from 'md-editor-v3';
    import 'md-editor-v3/lib/style.css';
    import {ref, reactive, } from 'vue';

    const id = 'look-view';
    let articleTitle = ref('我是测试title');
    let viewContent = ref('# 我是文章一级标题\n这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍\n## 我是文章二级标题\n这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍\n### 我是文章三级标题\n这里是三级介绍这里是三级介绍这里是三级介绍这里是三级介绍这里是三级介绍这里是三级介绍这里是三级介绍这里是三级介绍这里是三级介绍这里是三级介绍这里是三级介绍\n# 一级标题02\n这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍\n# 一级标题03\n这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍\n# 一级标题04\n这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍\n# 一级标题05\n这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍\n# 一级标题06\n这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍这里是02介绍\n');
    let articleContentRef = ref<any>(null);
    let mdViewRef = ref<any>(null);

    let mdHeadingStr = (_text, _level, _index) =>{
        // console.log(30, _text, _level, _index);
        let formatText = _text.replace(/\s+/g, '');
        return `heading_${formatText}`
    };
    // tips：querySelector 不支持空格和数字筛选元素
    function onClick(e, t) {
        // console.log(31, e, t,);
        // console.log(36, mdViewRef.value, mdViewRef.value.$el);
        // 如果点击目录后，自带的定位不好使，可以用下面的方法
        // let formatText = t.text.replace(/\s+/g, '');
        // let clickItemObj = mdViewRef.value.$el.querySelector(`#heading_${formatText}`);
        // // console.log(3838, clickItemObj)
        // if(clickItemObj) {
        //     let scrollHeight = clickItemObj.offsetTop + 80;
        //     // // 一句话，滚动到指定位置很丝滑
        //     articleContentRef.value.scrollTo({ top: scrollHeight, behavior: 'smooth' });
        // }
    }
    function onGetCatalog() {}

</script>

<style lang='scss'>
    .page-md-preview {
        display: flex;
        height: 100%;
        overflow: hidden;
        padding: 20px 0 20px 50px;
        .article-catelog-content {
            width: 300px;
            padding: 10px;
            position: sticky;
            top: 4px;
            max-height: calc(100vh - 64px);
            .catelog-label {
                // text-align: center;
                font-size: 16px;
                color: #606266;
                padding: 10px 20px 16px;
                border-bottom: 1px solid #dcdfe6;
            }
        }
        .article-content {
            width: calc(100% - 300px);
            padding: 20px;
            overflow: hidden;
            overflow-y: auto;
            .content-box {
                border: 1px solid rgba(216,216,216,.5);
                box-shadow: 0 2px 12px #0000001a;
                border-radius: 8px;
                // background: #fff;
                .content-title {
                    font-size: 34px;
                    line-height: 36px;
                    text-align: center;
                    padding: 20px 20px 0;
                    color: #303133;
                    // font-family: -apple-system,BlinkMacSystemFont,Segoe UI Variable,Segoe UI,system-ui,ui-sans-serif,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
                    font-weight: 700;
                }
            }
        }
    }
</style>