 

 function storeDAta(a){
   var storeInputBox=document.getElementById("inuBox");
   var oldValue=storeInputBox.value;
   var GetOldValLength=oldValue.length;
   var getLastCharacter=oldValue[GetOldValLength-1];
   var operator=["+","-","/","*","%"];

   if(operator.includes(a)){
        if(operator.includes(getLastCharacter)){
            var removeLast=oldValue.slice(0,-1);
            storeInputBox.value=removeLast+a;
        }
        else{
        	storeInputBox.value=oldValue+a;
        }
   }
   else{
   	 storeInputBox.value=oldValue+a;
   }

 }



 function calCulaData(){
 	 var storeInputBox=document.getElementById("inuBox");
 	 var oldValUe=eval(storeInputBox.value);
 	 storeInputBox.value=oldValUe;
 }



 function clearDAta(){
 	document.getElementById("inuBox").value=''
 }

 function delet1Char(){ 
 	 var storeInputBox=document.getElementById("inuBox");

 	if(storeInputBox===''){
        return;
 	}
 	storeInputBox.value=storeInputBox.value.slice(0,-1)
 }