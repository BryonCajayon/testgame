import 1ControllerGenerated from "./generated/1ControllerGenerated";

// Properties
import Properties from "../../properties";

// Database
import 1Model from "../../models/Testgame_db/1Model";

// Security
import { authorize } from "../../security/SecurityManager";

// Errors
import Errors from "../../classes/Errors";
import ErrorManager from "../../classes/ErrorManager";

const customControllers = {
  
  /**
   * Override here your custom routes
   * EXAMPLE:
   *
    
   init: router => {
     const baseUrl = `${Properties.api}/1`;
     
     // custom route
     router.get(baseUrl + "/:id", customControllers.get);
     
     // Init super
     1ControllerGenerated.init(router);
    },

  */

  /**
   * Override here your custom controllers
   * EXAMPLE:
   *
   
    get: async (req, res) => {
      try {
        console.log("This is my custom controller");
        const result = await 1Model.get(req.params.id);
        res.json(result);
      } catch (err) {
        const safeErr = ErrorManager.getSafeError(err);
        res.status(safeErr.status).json(safeErr);
      }
    }

   */
   
};

export default {
  ...1ControllerGenerated,
  ...customControllers
};

