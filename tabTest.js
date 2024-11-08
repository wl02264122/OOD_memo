

class Tab {
    constructor(id) {
        this.main = document.querySelector(id);
        this.item = document.querySelector('.item');
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.delete = this.main.querySelectorAll('.delete');
        this.add = this.main.querySelector('.add-btn');
        this.init();
    }
    init() {
        this.main.addEventListener('click', (event) => {
            const target = event.target;
            // toggle
            if (target.className === 'switch') {
                this.toggleTab(target);
            }
            // // remove
            if (target.className === '.delete') {
                this.removeTab(target);
            }
            // // add
            if (target.className === 'add-btn') {
                this.addTab(target);
            }
        })
    }
    toggleTab(target) {
        for (let i = 0; i < this.lis.length; i++) {
            const li = this.lis[i];
            const section = this.sections[i];
            if(section.className === 'info-span sec-active'){
                section.classList.remove('sec-active');
            }
            if(li.className === 'switch li-active'){
                li.classList.remove('li-active');
            }
        }
        section.classList.toggle('sec-active');
        target.classList.toggle('li-active');
    }
    removeTab(target) {
        
    }
    addTab() {

    }
    editTab() {

    }
}
const tab = new Tab('#tab');
