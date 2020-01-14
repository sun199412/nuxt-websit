<template>
  <div class="download">
    <div class="title">SDK下载</div>
    <p>本页面提供Java、PHP、Python、Node.js的SDK下载。</p>
    <p>SDK包内有部分使用说明，各接口的详细使用说明请浏览各API详情页。</p>
    <p class="text">如美唐未提供您使用的语言SDK，您可以根据API文档开发接口。</p>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="lang" label="语言"></el-table-column>
      <el-table-column prop="name" label="下载链接">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">点击下载</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          lang: "Java"
        },
        {
          lang: "PHP"
        },
        {
          lang: "Python"
        },
        {
          lang: "Node.js"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$activeColor: #fc6b00;
$titleColor: #1C1E2B;
.download {
  width: 911px;
  .title {
    font-size: 30px;
    color: $activeColor;
  }
  p {
    font-size: 18px;
    color: #666;
    margin: 27px 0;
  }
  .text{
    margin-bottom: 79px;
  }
}
/deep/ tr {
  color: $titleColor;
  font-size: 18px;
}
/deep/ .el-button--text {
  color: $activeColor;
  font-size: 18px;
}
</style>