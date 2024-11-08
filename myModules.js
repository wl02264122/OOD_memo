// 使用方法
// <script type="module"></script>
// import{deepCopy} from '/myModules.js';
//  ______
// |深拷貝|
//  ‾‾‾‾‾‾
export function deepCopy(newObject, oldObject){
    for (let i in oldObject) {
        let item = oldObject[i];
        if (item instanceof Array) {
            newObject[i] = [];
            deepCopy(newObject[i], item);
        } else if (item instanceof Object) {
            newObject[i] = {};
            deepCopy(newObject[i], item)
        } else {
            newObject[i] = item;
        }
    }
}