import { Button } from "../Button";

export class Small extends Button {
  constructor(){
    super();
  }

  public static onPress(){
        console.log('playing smoll not')
        Button.playNote();
  };

}

export default Small;