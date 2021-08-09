// let app = new Vue({
//     el: '#app',
//     data: {
//         memo: '',
//         memos: [],
//     },
//     methods: {
//         add: function (id) {
//             if (this.add.length === 0) {
//                 return;
//             }
//             this.memos.push(this.add)
//         },
//         delete: function () {
//             for (var i in this.memos) {
//                 if (this.memos[i].splice(i, 1));
//                 break;
//             }
//         },
//     }
// })



const EDIT_MODE = {
            UPDATE: "update",
            ADD: "add",
        };

        let data = {
            memoList: [],
            newMemo: '',
            state: EDIT_MODE.ADD
        }

        let vm = new Vue({
            el: "#app",
            data: data,
            methods: {
                addMemo: function () {
                    if (this.newMemo.length === 0) {
                        alert('값을 입력해주세요.')
                        return;
                    }
                    this.memoList.push(this.newMemo)
                },
                deleteMemo: function (memo) {
                    let index = this.memoList.indexOf(memo)
                    this.memoList.splice(index, 1)
                },
                setEditMode: function (index, memo) {
                    this.newMemo = memo;
                    this.state = EDIT_MODE.UPDATE
                    this.memoIndex = index
                },
                clearEditMode: function () {
                    this.state = EDIT_MODE.ADD;
                    this.newMemo = ''
                },
                updateMemo: function (memo) {
                    if (this.state == EDIT_MODE.UPDATE) {
                        this.state = EDIT_MODE.ADD;
                        this.memoList[this.memoIndex] = this.newMemo;
                    }
                }
            }
        });