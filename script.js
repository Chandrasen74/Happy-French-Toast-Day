/*
 * Copyright (c) 2026 Chandrasen. All rights reserved.
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use is prohibited.
 */

var elAnim = [
	{el: ".contain-toast", cl: "makeToast"},	
	{el: ".toast", cl: "darkToast"},
	{el: ".toast-bottom", cl: "darkToast"},
	{el: ".crust", cl: "darkCrust"},
	{el: ".crust-bottom", cl: "darkCrust"},
	{el: ".knob", cl: "moveKnob"},
	{el: ".toaster", cl: "hotToaster"},
	{el: ".contain-smoke", cl: "smokeAppear"}	
]

$(function(){
	
/* Run animation */
	$("#run").click(function() {
			for(var i = 0; i<elAnim.length; i++) {
				$(elAnim[i].el).addClass(elAnim[i].cl);
			}		
	});
		
/* Restore settings */
	$("#reset").click(function() {
			for(var j = 0; j<elAnim.length; j++) {
				$(elAnim[j].el).removeClass(elAnim[j].cl);
			}	
	});
	
});