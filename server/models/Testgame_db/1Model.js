import 1ModelGenerated from "./generated/1ModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = 1ModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await 1ModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...1ModelGenerated,
  ...customModel
};
