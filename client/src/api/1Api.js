import 1ApiGenerated from "./generated/1ApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class 1Api extends 1ApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get 1 List
  static get1List() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/1s")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default 1Api;