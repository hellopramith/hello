﻿/**
* Callback to serverside script for statistics handling.
* It sends the current file,title,id and state on start and complete of an item.
*
* @author	Jeroen Wijering
* @version	1.5
**/


import com.jeroenwijering.players.*;


class com.jeroenwijering.players.CallbackView extends AbstractView { 


	/** Currently playing item **/
	private var currentItem:Number;
	/** Currently playing item **/
	private var varsObject:LoadVars;
	/** Boolean for if a start call has already been sent for the current item. **/
	private var playSent:Boolean = false;
	/** Small interval so both a complete+play event won't be issued within 1/10 second  **/
	private var playSentInt:Number;
	/** Timestamp of the start of the movie **/
	private var startStamp:Number;


	/** Constructor **/
	function CallbackView(ctr:AbstractController,car:Object,far:Array) {
		super(ctr,car,far);
		varsObject = new LoadVars();
	};


	/** Send a callback on state change **/
	private function setState(pr1:Number) {
		if(pr1 == 3) {
			var dur = Math.round(new Date().valueOf()/1000 - startStamp);
			sendVars("stop",dur);
			playSent = false;
		} else if (pr1 == 2 && playSent == false) {
			playSentInt = setInterval(this,"sendVars",500,"start",0);
			playSent = true;
			startStamp = new Date().valueOf()/1000;
		}
	};


	/** save the currently playing item **/
	private function setItem(pr1:Number) {
		if(playSent == true && currentItem != undefined)  {
			var dur = Math.round(new Date().valueOf()/1000 - startStamp);
			sendVars("stop",dur);
			playSent = false;
		}
		currentItem = pr1; 
	};


	/** sending the current file,title,id,state,timestamp to an external callback location **/
	private function sendVars(stt:String,dur:Number) {
		clearInterval(playSentInt);
		varsObject.file = fileArray[currentItem]["file"];
		varsObject.title = fileArray[currentItem]["title"];
		varsObject.id = fileArray[currentItem]["id"];
		varsObject.state = stt;
		varsObject.duration = dur;
		varsObject.sendAndLoad(configArray["callback"],varsObject,"POST");
	};


}