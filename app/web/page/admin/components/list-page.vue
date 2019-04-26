<template>
  <Card>
    <Row>
      <Col>
        <Button @click="onCreate">新增</Button>
        <Button @click="fetchData">刷新</Button>
      </Col>
    </Row>
    <Table :columns="columnData" :data="tableData"></Table>
    <Page :total="page.total" size="small" show-total @on-change="handleChangePage"/>
  </Card>
</template>

<script type='babel'>
export default {
  name: "ListPage",
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    actions: {
      type: Array,
      default() {
        return [];
      }
    },
    onFetchData: Function,
    onCreate: Function,
    onUpdate: Function,
    onRemove: Function
  },
  data() {
    return {
      columnData: [
        ...this.$props.columns,
        {
          title: "操作",
          key: "handle",
          render: (h, params) => {
            return h("div", [
              ...this.$props.actions,
              h(
                "Button",
                {
                  on: {
                    click: () => {
                      this.onUpdate(params.row.id);
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  on: {
                    click: () => {
                      this.$Modal.confirm({
                        title: "提示",
                        content: "确定删除？",
                        onOk: async () => {
                          const { status } = await this.onRemove(params.row.id);
                          if (status === 200) {
                            this.fetchData();
                          } else {
                            this.$Message.error(`删除数据失败!`);
                          }
                        }
                      });
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      tableData: [],
      page: {
        paheSize: 20,
        pageNum: 1,
        total: 0
      }
    };
  },
  methods: {
    async fetchData() {
      const { status, data } = await this.onFetchData(this.page);
      if (status === 200) {
        this.tableData = data;
      } else {
        this.$Message.error(`获取数据失败, ${data.message}!`);
      }
    },
    handleChangePage(pageNum) {
      this.page.pageNum = pageNum;
      this.fetchData();
    }
  },
  async mounted() {
    this.fetchData();
  }
};
</script>
