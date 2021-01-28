import {Small} from './specials/Small';
import {Key} from './music/Key.js';
import {Note} from './music/Note.js';
import {Mode} from './music/Mode.js';
import { Button } from './Button';

class ButtonManager{

    /** Used to store Intervals.loadout */
	static i:Map<String, String>;
	/** Volume Modifier for Secondary Timbre, used to divide original volume. */
	//static public _volumeMod:Float = 1.5;

	// Snowflake spawning probabilities
	private static flakes:Array<Class<Button>> 	= [Small, Octave, Harmony, Chord, Vamp, Transpose];
	//public static var weights:Array<Float> 				= [88.5 , 3.5	, 3.5	 , 2	, 2	  , 0.5		 ];

	/** Determines which snowflakes to spawn.  */
	public static function manage():Void {
		
		var flakeID:Class<Snowflake> = flakes[FlxG.random.weightedPick(weights)];
		var flake:Snowflake = PlayState.snow.recycle(flakeID, null, true, true);
		var typeName:String = Type.getClassName(flakeID);
		typeName = StringTools.replace(typeName, "snowflakes.", "");
		flake.spawn(typeName);
	}
}