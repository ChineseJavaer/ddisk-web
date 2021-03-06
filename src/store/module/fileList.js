import {getPathTreeMap} from "@/request/file";

export default {
    state: {
        operaColumnExpand: sessionStorage.getItem("operaColumnExpand"), //  操作列是否展开
        selectedColumnList: sessionStorage.getItem("selectedColumnList"), //  列显隐
        fileModel: sessionStorage.getItem("fileModel"), //  文件展示模式，0列表模式，1网格模式 2时间线模式
        pathTreeMap: Map
    },
    mutations: {
        changeOperaColumnExpand(state, data) {
            sessionStorage.setItem("operaColumnExpand", data);
            state.operaColumnExpand = data;
        },
        changeSelectedColumnList(state, data) {
            sessionStorage.setItem("selectedColumnList", data.toString());
            state.selectedColumnList = data.toString();
        },
        changeFileModel(state, data) {
            sessionStorage.setItem("fileModel", data);
            state.fileModel = data;
        },
        setPathTreeMap(state, data) {
            state.pathTreeMap = data
        }
    },
    actions: {
        fetchPathTreeMap(context) {
            getPathTreeMap().then(res =>
                context.commit("setPathTreeMap", res)
            )
        }
    }
}
