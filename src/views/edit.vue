<!-- 
@Description: markdown编辑页面
@param  {type} params
-->
<template>
    <div class='page page-md-editor'>
        <div class="label-content">
            <div class="info-content title-content">
                <div class="label">标题：</div>
                <input type="text" v-model="title" placeholder="请输入文章标题">
            </div>
            <div class="submit-btn" @click="handleSubmit">发布文章</div>
        </div>
        <div class="article-content">
            <MdEditor v-model="content" ref="mdEditorRef" :toolbars="basicData.toolbarList" 
                @onUploadImg="onUploadImg" @onSave="onSave" @onGetCatalog="onGetCatalog"></MdEditor>
        </div>
    </div>
</template>

<script lang='ts' setup>
    import { MdEditor } from 'md-editor-v3';
    import 'md-editor-v3/lib/style.css';
    import type { ExposeParam } from 'md-editor-v3';

    import { ref, reactive, } from 'vue';

    let title = ref('');
    let content = ref('# Hello editor');
    let basicData = reactive({
        toolbarList: <any>[
            'bold',
            'underline',
            'italic',
            '-',
            'title',
            'strikeThrough',
            'sub',
            'sup',
            'quote',
            'unorderedList',
            'orderedList',
            'task',
            '-',
            'codeRow',
            'code',
            'link',
            'image',
            'table',
            'mermaid',
            'katex',
            '-',
            'revoke',
            'next',
            // 'save',
            '=',
            'pageFullscreen',
            'fullscreen',
            'preview',
            'htmlPreview',
            'catalog',
            'github'
        ]
    })
    
    let mdEditorRef = ref<ExposeParam>();

    function onSave(v:any, h:any) {
        h.then((html:any) => {
            console.log(71, html);
            // 这里可以做保存markdown的操作
        })
    }
    function handleSubmit() {
        mdEditorRef.value?.triggerSave();
    }
    function onGetCatalog(list:any) {
        // console.log(59, list);
    }
    // 图片上传
    async function onUploadImg(files:any, callback:any) {
        let res = await Promise.all(files.map((fileitem:any) => {
            return new Promise((resolve, reject) => {
                let form = new FormData();
                form.append('file', fileitem);
                let params = {
                    url: `localhost:8080/api/file/upload`,
                    method: 'post',
                    data: form,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                requestApi.request(params).then((resobj:any) => {
                    console.log(103, resobj);
                    resolve(resobj);
                }).catch(err => {
                    reject(err);
                })
            })
        }))
        console.log(86, res);
        callback(res.map((item) => item.data));
    }
</script>

<style lang='scss'>
    .page-md-editor {
        padding: 50px 30px;
        .label-content {
            position: relative;
            margin-bottom: 20px;

            .info-content {
                display: flex;
                align-items: center;

                input {
                    border: none;
                    outline: none;
                    width: 500px;
                    line-height: 30px;
                    background: #fff;
                    border: 1px solid #DCDFE6;
                    border-radius: 4px;
                    padding-left: 10px;
                }
            }
            .submit-btn {
                position: absolute;
                bottom: 0px;
                right: 0px;
                width: 90px;
                height: 34px;
                background: #409eff;
                color: #fff;
                text-align: center;
                line-height: 34px;
                border-radius: 4px;
                font-size: 12px;
                cursor: pointer;
            }
        }
    }
</style>