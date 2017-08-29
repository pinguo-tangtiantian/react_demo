
module.exports = {
    setHtmlFontSize: function(){
        var w = window.screen.width;
        var size = w/7.5;

        document.getElementsByTagName("html")[0].style.fontSize = size + "px";
    },
    sortByAttr: function(attr){
        return function(a, b) {
            var attrArr = attr.split(".");
            var value1, value2;
            if (typeof(a[attrArr[0]]) == "object") {
                value1 = a[attrArr[0]][attrArr[1]];
                value2 = b[attrArr[0]][attrArr[1]];
            } else {
                value1 = a[attr];
                value2 = b[attr];
            }
    
            if (value1 > value2) {
                return -1;
            } else if (value1 < value2) {
                return 1;
            }
            return 0;
        };
    }
}