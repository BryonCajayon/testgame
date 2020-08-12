import actionsFunction from "./generated/1ActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import 1Api from "../../api/1Api";
 
 actionsFunction.load1List = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return 1Api
     .get1List()
     .then(list => {
       dispatch(actionsFunction.load1Success(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
