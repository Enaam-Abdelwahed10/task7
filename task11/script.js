let text = "هذا نص طويل تم انشاؤه لاختبار وظيفة اخفاء في المنتصف حيث نتحقق من طول النص واذا كان يتجاوز حد معين نسحب اول عقد واخر عقد من الحروف ونقوم بتعويض ما بنهما بنقاط بنفس العدد المجدد تماما ";
const maxLength = 100;
const edgeLength = 20;
function formatText(str){
    if (str.length >maxLength){
        let startPart = str.slice(0,edgeLength);
        let endPart = str.slice(-edgeLength);
        let middleCount = str.length - (edgeLength*2);
        let dots = ".".repeat(middleCount);
        return startPart + dots +endPart;
    }
    return str;
}
console.log(formatText(text));


