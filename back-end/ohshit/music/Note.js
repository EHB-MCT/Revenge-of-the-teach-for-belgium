class Note{
    DATABASE = ["C1", "Cs1", "D1", "Ds1", "E1", "F1", "Fs1", "G1", "Gs1", "A1", "As1", "B1", "C2", "Cs2", "D2", "Ds2", "E2", "F2", "Fs2", "G2", "Gs2", "A2", "As2", "B2", "C3", "Cs3", "D3", "Ds3", "E3", "F3", "Fs3", "G3", "Gs3", "A3", "As3", "B3", "C4", "Cs4", "D4", "Ds4", "E4", "F4", "Fs4", "G4", "Gs4", "A4", "As4", "B4"];

	/** The very first note that's triggered. */
	static initial;
	/** The last Play Note played. */
	static lastRecorded;
	/** The second to last Play Note played. */
	static secondToLastRecorded;
	/** The last Note played, regardless of whether in Play/Replay Mode **/
	static lastAbsolute;
	/** The last Octave Note played. */
	static lastOctave;
	/** The last Harmony Note played. */
	static lastHarmony;
	
}