class Mode {

    // Modes. Ionian in Major is 3 Octaves, Aeolian in Minor. The rest are 2 octaves.
		IONIAN		= {name: "Ionian", 	majorPos: 1, minorPos: 3, logic};
		DORIAN		= {name: "Dorian", 	majorPos: 2, minorPos: 4};
		LYDIAN		= {name: "Lydian", 	majorPos: 4, minorPos: 6};
		MIXOLYDIAN	= {name: "Mixolydian", majorPos: 5, minorPos: 7};
        AEOLIAN		= {name: "Aeolian", 	majorPos: 6, minorPos: 1};
        
        IONIAN.logic =	[
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
			/* 22 else */	["one2", "one3"] ];
}