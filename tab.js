
// var that;   // 避免汙染
class Tab {
    constructor(id) {
        // that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.add-btn');
        // li的父級
        this.ul = this.main.querySelector('.item');
        // section的父級
        this.info = this.main.querySelector('.info-box');
        this.init();
    }
    updateNode() {
        this.lis = this.main.querySelectorAll('.switch');
        this.sections = this.main.querySelectorAll('.info-span');
        this.remove = this.main.querySelectorAll('.delete')
        this.spans = this.main.querySelectorAll('.item .switch span:first-child')
    }
    // 初始化
    init() {
        this.updateNode();
        this.add.onclick = this.addTab.bind(this.add, this); // 新增按鈕
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;  // 獲取索引
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this); // this指向改為被點擊的按鈕本身，傳回參數為Tab構造函數
            this.remove[i].onclick = this.removeTab.bind(this.remove[i], this);
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    clear() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].classList.remove('li-active');
            this.sections[i].classList.remove('sec-active');
        }
    }
    toggleTab(that) {
        that.clear(); // 排他
        this.classList.add('li-active'); // 新增
        that.sections[this.index].classList.add('sec-active'); // 根據偽陣列新增
    }
    addTab(that) {
        that.clear(); // 排他
        let random = Math.random();
        let li = '<li class="switch li-active"><span>新增按鈕</span><button class="delete">x</button></li>';
        let section = '<section class="info-span sec-active">新內容' + random + '</section>';
        that.ul.insertAdjacentHTML('beforeend', li);
        that.info.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    removeTab(that, event) {
        event.stopPropagation();
        let index = this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        if (document.querySelector('.li-active')) {
            return; // 避免"最後一個"active被刪除出問題
        } else {
            index--;
            that.lis[index] && that.lis[index].click();
            that.init();
        }
        if (document.querySelector('.li-active') != true) {
            index++;    // 避免"第一個"active被刪除出問題
            that.lis[index] && that.lis[index].click();
            that.init();
        }
    }
    editTab(event) {
        const text = this.innerHTML;
        this.innerHTML = '<input type"text">'
        let input = this.children[0];
        input.value = text;
        input.select(); // 預設全選
        input.ondblclick = function (event) { event.stopPropagation() };
        input.onblur = function () {  // 離開input觸發
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function (event) {
            if (event.key === "Enter") {
                this.onblur();
            }
        }
    }
}
const tab = new Tab('#tab');