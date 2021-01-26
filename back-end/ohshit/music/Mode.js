class Mode {

    // Modes. Ionian in Major is 3 Octaves, Aeolian in Minor. The rest are 2 octaves.
	static IONIAN		= {
		name: "Ionian", 	
		majorPos: 1, 
		minorPos: 3, 
		logic:	[
		/* 00 one1 */	["two1", "thr1", "fiv1", "two2", "thr2"],
		/* 01 two1 */	["fiv1", "sev1"],
		/* 02 thr1 */	["fiv1", "sev1", "one1"],
		/* 03 for1 */	["thr1", "fiv1", "one2"],
		/* 04 fiv1 */	["one1", "thr1", "for1", "six1", "sev1", "one2", "two2", "thr2"],
		/* 05 six1 */	["one1", "fiv1", "sev1", "one2", "thr2", "for2"],
		/* 06 sev1 */	["fiv1", "one2", "thr2"],
		/* 07 one2 */	["one1", "thr1", "two2", "thr2", "fiv2", "thr3", "sev2", "sev1", "six1"],
		/* 08 two2 */	["one2", "thr2", "fiv2", "sev2"],
		/* 09 thr2 */	["two2", "for2", "fiv2", "sev2", "one3", "one2", "six1", "fiv1"],
		/* 10 for2 */	["thr2", "fiv2", "one3", "six1"],
		/* 11 fiv2 */	["one2", "thr2", "for2", "six2", "sev2", "thr3", "sev2", "sev3", "two3"],
		/* 12 six2 */	["one2", "fiv2", "sev2", "one3"],
		/* 13 sev2 */	["fiv2", "one3"],
		/* 14 one3 */	["one2", "two3", "thr3", "fiv3", "thr2", "for2", "sev2", "six2"],
		/* 15 two3 */	["one3", "thr3", "fiv3", "sev3"],
		/* 16 thr3 */	["fiv2", "two3", "for3", "fiv3", "sev3", "one3"],
		/* 17 for3 */	["thr3", "fiv3", "one4"],
		/* 18 fiv3 */	["one3", "thr3", "for3", "six3", "sev3", "one4"],
		/* 19 six3 */	["one3", "fiv3", "sev3", "one4"],
		/* 20 sev3 */	["fiv3", "one4"],
		/* 21 one4 */	["one2", "thr3", "for3", "fiv3", "sev3", "one3"],
		/* 22 else */	["one2", "one3"] 
				],
		chords: [	["one1", "thr1", "fiv1"], ["one1", "thr1", "sev1"], ["one1", "fiv1", "one2"], ["one1", "fiv1", "thr2"],
					["one1", "fiv1", "fiv2"], ["one1", "thr2", "sev2"], ["thr1", "one2", "fiv2"], ["thr1", "fiv1", "one2"],
					["fiv1", "one2", "thr2"], ["one2", "two2", "sev2"], ["one1", "two2", "sev2"], ["one1", "fiv1", "thr2", "sev2"] ]
	};
	static DORIAN		= {
		name: "Dorian", 	
		majorPos: 2, 
		minorPos: 4, 
		logic:[
					["thr1", "fiv1", "sev1", "one2", "two2", "thr2", "for2", "fiv2"],
	/* 01 two1 */	["fiv1", "six1", "sev1"],
	/* 02 thr1 */	["one1", "for1", "fiv1", "six1", "sev1", "one2", "thr2", "two2", "fiv2"],
	/* 03 for1 */	["fiv1", "six1", "sev1", "one2", "thr2"],
	/* 04 fiv1 */	["thr1", "six1", "sev1", "one2", "two2", "thr2", "for2", "fiv2", "sev2"],
	/* 05 six1 */	["one1", "for1", "fiv1", "sev1", "one2", "for2", "fiv2"],
	/* 06 sev1 */	["thr1", "fiv1", "six1", "one2", "two2", "thr2", "fiv2", "sev2"],
	/* 07 one2 */	["one1", "thr1", "for1", "fiv1", "sev1", "two2", "thr2", "fiv2", "sev2", "one3", "two3", "thr3", "fiv3"],
	/* 08 two2 */	["fiv1", "one2", "thr2", "fiv2", "sev2", "two3"],
	/* 09 thr2 */	["thr1", "fiv1", "six1", "sev1", "one2", "two2", "for2", "fiv2", "six2", "sev2", "one3", "thr3"],
	/* 10 for2 */	["thr2", "fiv2", "six2", "sev2", "two3", "six1"],
	/* 11 fiv2 */	["thr1", "fiv1", "six1", "sev1", "one2", "two2", "thr2", "for2", "six2", "sev2", "one3", "two3", "thr3"],
	/* 12 six2 */	["for1", "six1", "for2", "fiv2", "sev2", "one3", "thr3", "for3", "six3"],
	/* 13 sev2 */	["sev1", "thr2", "fiv2", "six2", "one3", "two3", "thr3", "fiv3", "sev3"],
	/* 14 one3 */	["one1", "fiv1", "six1", "one2", "thr2", "fiv2", "six2", "sev2", "two3", "thr3", "fiv3", "one4"],
	/* 15 two3 */	["two2", "fiv2", "one3", "thr3", "fiv3", "sev3"],
	/* 16 thr3 */	["thr2", "fiv2", "six2", "sev2", "one3", "two3", "for3", "fiv3", "six3", "sev3", "one4"],
	/* 17 for3 */	["six2", "thr3", "fiv3", "six3", "sev3"],
	/* 18 fiv3 */	["thr2", "fiv2", "six2", "sev2", "one3", "two3", "thr3", "for3", "six3", "sev3", "one4"],
	/* 19 six3 */	["for2", "six2", "for3", "fiv3", "sev3", "one4"],
	/* 20 sev3 */	["sev2", "thr3", "fiv3", "six3", "one4"],
	/* 21 one4 */	["six2", "one3", "thr3", "for3", "fiv3", "six3", "sev3"],
	/* 22 else */	["one1", "one2", "one3"] 
		],
		chords: [	
			["one1", "thr1", "fiv1"], ["one1", "thr1", "sev1"], ["one1", "fiv1", "one2"], ["one1", "fiv1", "thr2"],
			["one1", "fiv1", "fiv2"], ["one1", "thr2", "sev2"], ["thr1", "one2", "fiv2"], ["thr1", "fiv1", "one2"],
			["fiv1", "one2", "thr2"], ["one1", "fiv1", "thr2", "sev2"] 
		]
	};

	static LYDIAN		= {
		name: "Lydian", 	
		majorPos: 4, 
		minorPos: 6, 
		logic: [
			/* 00 one1 */	["two1", "thr1", "fiv1", "two2", "thr2"],
			/* 01 two1 */	["fiv1", "sev1"],
			/* 02 thr1 */	["for1", "fiv1", "sev1", "one1"],
			/* 03 for1 */	["thr1", "fiv1", "two2"],
			/* 04 fiv1 */	["one1", "thr1", "for1", "six1", "sev1", "one2", "two2", "thr2"],
			/* 05 six1 */	["one1", "for1", "fiv1", "sev1", "one2", "thr2"],
			/* 06 sev1 */	["fiv1", "one2", "thr2"],
			/* 07 one2 */	["one1", "thr1", "for1", "two2", "thr2", "fiv2", "thr3", "sev2", "sev1", "six1"],
			/* 08 two2 */	["one2", "thr2", "fiv2", "sev2"],
			/* 09 thr2 */	["two2", "for2", "fiv2", "sev2", "one2", "one3", "thr1", "six1", "fiv1"],
			/* 10 for2 */	["thr2", "fiv2", "two3", "six1"],
			/* 11 fiv2 */	["one2", "thr3", "thr2", "six2", "sev2", "two3"],
			/* 12 six2 */	["one2", "fiv2", "sev2", "one3"],
			/* 13 sev2 */	["fiv2", "one3"],
			/* 14 one3 */	["one2", "two3", "thr3", "fiv3", "thr2", "for2", "sev2", "six2"],
			/* 15 two3 */	["one3", "thr3", "fiv3", "sev3"],
			/* 16 thr3 */	["fiv2", "two3", "for3", "fiv3", "sev3", "one3"],
			/* 17 for3 */	["thr3", "fiv3", "six2"],
			/* 18 fiv3 */	["one3", "thr3", "for3", "six3", "sev3", "one4"],
			/* 19 six3 */	["one3", "fiv3", "sev3", "one4"],
			/* 20 sev3 */	["fiv3", "one4"],
			/* 21 one4 */	["one2", "thr3", "for3", "fiv3", "sev3", "one3"],
			/* 22 else */	["one2", "one3"] 
			],
			chords: [		["one1", "thr1", "fiv1"], ["one1", "thr1", "sev1"], ["one1", "fiv1", "one2"], ["one1", "fiv1", "thr2"],
							["one1", "fiv1", "fiv2"], ["one1", "thr2", "sev2"], ["thr1", "one2", "fiv2"], ["thr1", "fiv1", "one2"],
							["fiv1", "one2", "thr2"],
							["one1", "fiv1", "thr2", "sev2"], ["one1", "six1", "sev1", "thr2"] ]};

	static MIXOLYDIAN	= {
			name: "Mixolydian", 
			majorPos: 5, 
			minorPos: 7, 
			logic: [
			/* 00 one1 */	["two1", "thr1", "fiv1", "sev1", "two2", "thr2"],
			/* 01 two1 */	["fiv1", "sev1"],
			/* 02 thr1 */	["for1", "fiv1", "sev1", "one1"],
			/* 03 for1 */	["thr1", "fiv1", "sev1", "two2"],
			/* 04 fiv1 */	["one1", "thr1", "for1", "six1", "sev1", "one2", "two2", "thr2", "for2"],
			/* 05 six1 */	["one1", "fiv1", "sev1", "one2", "thr2"],
			/* 06 sev1 */	["fiv1", "one2", "two2", "thr2"],
			/* 07 one2 */	["one1", "thr1", "for1", "two2", "thr2", "fiv2", "thr3", "sev2", "sev1", "six1"],
			/* 08 two2 */	["one2", "thr2", "fiv2", "sev2"],
			/* 09 thr2 */	["two2", "for2", "fiv2", "sev2", "one2", "one3", "thr1", "six1", "fiv1", "sev1"],
			/* 10 for2 */	["thr2", "fiv2", "two3", "six1", "sev1", "sev2"],
			/* 11 fiv2 */	["one2", "thr3", "six2", "thr2", "sev2", "two3"],
			/* 12 six2 */	["one2", "fiv2", "sev2", "one3", "thr3"],
			/* 13 sev2 */	["fiv2", "one3", "two2", "two3", "thr3", "sev3", "sev1"],
			/* 14 one3 */	["one2", "two3", "thr3", "fiv3", "thr2", "for2", "sev2", "six2"],
			/* 15 two3 */	["one3", "thr3", "fiv3", "sev3"],
			/* 16 thr3 */	["thr2", "fiv2", "six2", "sev2", "two3", "for3", "fiv3", "sev3", "one3"],
			/* 17 for3 */	["thr3", "fiv3", "sev3", "six2", "sev2"],
			/* 18 fiv3 */	["one3", "thr3", "for3", "six3", "sev3", "one4"],
			/* 19 six3 */	["one3", "fiv3", "sev3"],
			/* 20 sev3 */	["two3", "sev2", "fiv3", "one4"],
			/* 21 one4 */	["one2", "thr3", "fiv3", "one3"],
			/* 22 else */	["one2", "one3"] 
			],
			chords: [		["one1", "thr1", "sev1"], ["one1", "thr2", "sev2"], ["one1", "fiv1", "sev1"], ["one1", "thr2", "sev2"],
							["thr1", "sev1", "fiv2"], ["fiv1", "sev1", "thr2"], ["one1", "fiv1", "thr2", "sev2"],
							["thr1", "fiv1", "sev1", "two2"] ]};


    static AEOLIAN		= {
			name: "Aeolian", 	
			majorPos: 6, 
			minorPos: 1, 
			logic: [
			/* 00 one1 */	["thr1", "fiv1", "six1", "sev1", "one2", "two2", "thr2", "for2", "fiv2"],
			/* 01 two1 */	["fiv1", "sev1"],
			/* 02 thr1 */	["one1", "for1", "fiv1", "six1", "sev1", "one2", "fiv2"],
			/* 03 for1 */	["fiv1", "six1", "sev1", "one2", "thr2"],
			/* 04 fiv1 */	["thr1", "six1", "sev1", "one2", "two2", "thr2", "for2", "fiv2"],
			/* 05 six1 */	["one1", "fiv1", "sev1", "one2", "thr2", "fiv2"],
			/* 06 sev1 */	["fiv1", "six1", "one2", "two2", "thr2"],
			/* 07 one2 */	["one1", "thr1", "for1", "fiv1", "six1", "sev1", "two2", "thr2", "for2", "fiv2", "six2", "sev2", "one3", "two3", "thr3", "for3", "fiv3"],
			/* 08 two2 */	["fiv1", "sev1", "one2", "thr2", "fiv2", "sev2", "two3"],
			/* 09 thr2 */	["fiv1", "six1", "sev1", "one2", "fiv2", "six2", "sev2", "one3"],
			/* 10 for2 */	["thr2", "fiv2", "six2", "sev2", "two3", "six1"],
			/* 11 fiv2 */	["thr1", "fiv1", "six1", "sev1", "one2", "two2", "thr2", "for2", "six2", "sev2", "one3", "two3"],
			/* 12 six2 */	["for1", "fiv2", "sev2", "one3", "thr3"],
			/* 13 sev2 */	["fiv2", "six2", "one3", "two3", "thr3"],
			/* 14 one3 */	["one1", "for1", "fiv1", "six1", "one2", "thr2", "fiv2", "six2", "sev2", "two3", "thr3", "for3", "fiv3", "six3", "one4"],
			/* 15 two3 */	["two2", "fiv2", "sev2", "one3", "thr3", "fiv3", "sev3"],
			/* 16 thr3 */	["fiv2", "six2", "sev2", "one3", "two3", "for3", "fiv3", "six3", "sev3", "one4"],
			/* 17 for3 */	["six2", "thr3", "fiv3", "six3", "sev3"],
			/* 18 fiv3 */	["thr2", "fiv2", "six2", "sev2", "one3", "two3", "thr3", "for3", "six3", "sev3", "one4"],
			/* 19 six3 */	["for2", "for3", "fiv3", "sev3", "one4"],
			/* 20 sev3 */	["sev2", "fiv3", "six3", "one4"],
			/* 21 one4 */	["six2", "one3", "thr3", "for3", "fiv3", "six3", "sev3"],
			/* 22 else */	["one1", "one2", "one3"] 
			],
			chords: [		["one1", "thr1", "fiv1"], ["one1", "thr1", "sev1"], ["one1", "fiv1", "one2"], ["one1", "fiv1", "thr2"],
							["one1", "fiv1", "fiv2"], ["one1", "thr2", "sev2"], ["thr1", "one2", "fiv2"], ["thr1", "fiv1", "one2"],
							["fiv1", "one2", "thr2"], ["one1", "fiv1", "thr2", "sev2"] 
					]
				};

				
	static DATABASE = [IONIAN, DORIAN, LYDIAN, MIXOLYDIAN, AEOLIAN];
	static index = 0;
	static current;
	static previous;


	change(modeIndex = -1){
		if (modeIndex == -1){
		
			let newIndex = Math.floor(Math.random(0, DATABASE.length - 1));

			// Halve Probability of Mixolydian
			if (newIndex == 3) newIndex = Math.floor(Math.random(0, DATABASE.length - 1));
			while (newIndex == index){
				newIndex = Math.floor(Math.random(0, DATABASE.length - 1));
				index = newIndex;
			}
		} else {
			index = modeIndex;
			init();
		}
	}

	init(){
		previous = current;
		current = DATABASE[index];
		Intervals.updated = false;
		Intervals.populate();
	}
}