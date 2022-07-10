var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


generateLorem = function(text){
return lorem.substring(0,text.length);
}

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

if (window._loremImpsum != undefined){
    console.log("clear loremIpsum interval");
    clearInterval(window._loremImpsum);
}

console.log("set loremIpsum interval");
window._loremImpsum = setInterval(function(){
       var headers = document.getElementsByTagName("*");
       for (var i = 0; i < headers.length; i++){
           if (headers[i].nodeName.includes("H1") || headers[i].nodeName.includes("H2") ||  headers[i].nodeName.includes("H3") || headers[i].nodeName.includes("P") || headers[i].nodeName.includes("DIV")){
           for (var ii = 0; ii < headers[i].childNodes.length; ii++){              
                
                
                if (headers[i].childNodes[ii].nodeName == "#text"){
                   
                   if (headers[i]._originalTextContent == undefined) {
                        headers[i]._originalTextContent = headers[i].textContent;
                        headers[i].textContent = generateLorem(headers[i].textContent);
                   }
                 
                    headers[i].addEventListener("mouseover", function( event ) {
                        this.textContent = this._originalTextContent;
                    });

               }
             }
           }
       }
},500);