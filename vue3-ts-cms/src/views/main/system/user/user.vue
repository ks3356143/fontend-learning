<template>
    <div class="user">
        <div class="search">
            <page-search :searchFormConfig="searchFormConfig"></page-search>
        </div>
        <div class="content">
            <chen-table :listData="userList" :propList="propList"></chen-table>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import pageSearch from "@/components/page-search"
import chenTable from "@/base-ui/table"
import { searchFormConfig } from "@/views/main/system/user/config/searchConfig"
import { useStore } from "vuex"
export default defineComponent({
    name: "user",
    components: { pageSearch, chenTable },
    setup() {
        // 请求用户列表
        const store = useStore()
        store.dispatch("system/getPageList", {
            pageUrl: "/api/user/list",
            queryInfo: {
                offset: 0,
                size: 10
            }
        })
        const userList = computed(() => store.state.system.userList)
        // 分页器使用
        const userCount = computed(() => store.state.system.userCount)
        // 针对table写一个配置文件
        const propList = [
            { prop: "name", label: "用户名", minWidth: "100" },
            { prop: "realname", label: "真实姓名", minWidth: "100" },
            { prop: "cellphone", label: "电话", minWidth: "120" },
            { prop: "enable", label: "状态", minWidth: "100" },
            { prop: "department", label: "部门", minWidth: "100" },
            { prop: "createAt", label: "创建时间", minWidth: "100" },
            { prop: "updateAt", label: "更新时间", minWidth: "100" }
        ]
        return { searchFormConfig, userList, propList }
    }
})
</script>

<style scoped>
:global(.el-button) {
    border-radius: 0;
}
.content {
    padding: 5px 20px;
    border-top: 8px solid #f5f5f5;
}
</style>
