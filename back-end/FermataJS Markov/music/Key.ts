import { Intervals } from "./Intervals";

export class Key{
    
    static C_MAJOR: Array<string> = [ "C Major",  "C2", "D2", "E2", "F2", "G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5"];
    static C_MINOR: Array<string> = [ "C Minor",  "C2", "D2", "D#2", "F2", "G2", "G#2", "A#2", "C3", "D3", "D#3", "F3", "G3", "G#3", "A#3", "C4", "D4", "D#4", "F4", "G4", "G#4", "A#4", "C5", "D5", "D#5", "F5", "G5", "G#5", "A#5"];

    public static DATABASE: Array<any> = [Key.C_MAJOR, Key.C_MINOR];
    public static index: number = Math.floor(Math.random()* Key.DATABASE.length);
    public static current: string = Key.DATABASE[Key.index];
	public static justChanged: Boolean;

	


    public static change(){

        let newIndex: number = Math.random() * Key.DATABASE.length - 1;
		
		while (newIndex == Key.index)
			newIndex = Math.random() * Key.DATABASE.length - 1;
		
		Key.index = newIndex;
		Key.current = Key.DATABASE[Key.index];//Key.index
		Intervals.updated = false;
		Intervals.populate();

		Key.justChanged = true;
	}

	public static cycle() {
		Key.change();
	}
}


