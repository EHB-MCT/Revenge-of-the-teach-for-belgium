import { Button } from "../Button";

export class Small extends Button {
  constructor(){
    super();
  }

  public static onPress(){
        //DRUK HIER MET ARDUINO EVENT OFZO

        Button.playNote();
  };

}

export default Small;