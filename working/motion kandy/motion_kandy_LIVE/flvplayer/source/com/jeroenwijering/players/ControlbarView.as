﻿/**
* Controlbar user interface management of the players MCV pattern.
*
* @author	Jeroen Wijering
* @version	1.6
**/


import com.jeroenwijering.players.*;
import com.jeroenwijering.utils.StringMagic;


class com.jeroenwijering.players.ControlbarView extends AbstractView { 


	/** full width of the scrubbars **/
	private var barWidths:Number;
	/** duration of the currently playing item **/
	private var itemLength:Number;
	/** progress of the  currently playing item **/
	private var itemProgress:Number = 0
	/** do not rescale loadbar on rebuffering **/
	private var wasLoaded:Boolean = false;
	/** do not rescale loadbar on rebuffering **/
	private var showFSButton:Boolean = false;


	/** Constructor **/
	function ControlbarView(ctr:AbstractController,car:Object,far:Array) { 
		super(ctr,car,far);
		Stage.addListener(this);
		checkFS();
		setColorsClicks();
		setDimensions();
	};


	/** Automatically add fullscreen button if Flash9 fullscreen is possible **/
	private function checkFS() {
		if(configArray["fullscreenmode"] == "true" || configArray["fsreturnpage"] != "undefined") {
			showFSButton = true;
			return;
		}
		var fnd = false;
		for(var i in fileArray) {
			if(fileArray[i]["file"].indexOf(".mp3") == -1) { 
				var fnd = true;
				break;
			}
		}
		if(Stage["displayState"] == "normal" && fnd == true && configArray["showfsbutton"] != "false") { showFSButton = true; }
	};


	/** Sets up colors and clicks of all controlbar items. **/
	private function setColorsClicks() {
		var ref = this;
		var tgt = configArray["playerclip"].controlbar;
		tgt.col = new Color(tgt.back);
		tgt.col.setRGB(configArray["backcolor"]);
		// play and pause buttons
		tgt.playpause.col1 = new Color(tgt.playpause.ply);
		tgt.playpause.col1.setRGB(configArray["frontcolor"]);
		tgt.playpause.col2 = new Color(tgt.playpause.pas);
		tgt.playpause.col2.setRGB(configArray["frontcolor"]);
		tgt.playpause.onRollOver = function() { 
			this.col1.setRGB(ref.configArray["lightcolor"]);
			this.col2.setRGB(ref.configArray["lightcolor"]);
		};
		tgt.playpause.onRollOut = function() { 
			this.col1.setRGB(ref.configArray["frontcolor"]);
			this.col2.setRGB(ref.configArray["frontcolor"]);
		};
		tgt.playpause.onPress = function() { ref.sendEvent("playpause"); };
		// previous and next buttons
		if(fileArray.length == 1) {
			tgt.prev._visible = tgt.next._visible = false;
		} else { 
			tgt.prev._visible = tgt.next._visible = true;
			tgt.prev.col = new Color(tgt.prev.icn);
			tgt.prev.col.setRGB(configArray["frontcolor"]);
			tgt.prev.onRollOver = function() { this.col.setRGB(ref.configArray["lightcolor"]); };
			tgt.prev.onRollOut = function() { this.col.setRGB(ref.configArray["frontcolor"]); };
			tgt.prev.onPress = function() { ref.sendEvent("prev"); };
			tgt.next.col = new Color(tgt.next.icn);
			tgt.next.col.setRGB(configArray["frontcolor"]);
			tgt.next.onRollOver = function() { this.col.setRGB(ref.configArray["lightcolor"]); };
			tgt.next.onRollOut = function() { this.col.setRGB(ref.configArray["frontcolor"]); };
			tgt.next.onPress = function() { ref.sendEvent("next"); };
		}
		// scrub button (including digits)
		tgt.scrub.elpTxt.textColor = tgt.scrub.remTxt.textColor = configArray["frontcolor"];
		tgt.scrub.col = new Color(tgt.scrub.icn);
		tgt.scrub.col.setRGB(configArray["frontcolor"]);
		tgt.scrub.col2 = new Color(tgt.scrub.bar);
		tgt.scrub.col2.setRGB(configArray["frontcolor"]);
		tgt.scrub.col3 = new Color(tgt.scrub.bck);
		tgt.scrub.col3.setRGB(configArray["frontcolor"]);
		tgt.scrub.bck.onRollOver = function() { this._parent.col.setRGB(ref.configArray["lightcolor"]); };
		tgt.scrub.bck.onRollOut = function() { this._parent.col.setRGB(ref.configArray["frontcolor"]); };
		tgt.scrub.bck.onPress = function() {
			this.onEnterFrame = function() {
				var xm = this._parent._xmouse;
				if(xm < this._parent.bck._width + this._parent.bck._x && xm > this._parent.bck._x) {
					this._parent.icn._x = this._parent._xmouse - 1;
				}
			}
		};
		tgt.scrub.bck.onRelease = tgt.scrub.bck.onReleaseOutside = function() {
			var sec = (this._parent._xmouse-this._parent.bar._x)/ref.barWidths*ref.itemLength;
			ref.sendEvent("scrub",Math.round(sec));
			delete this.onEnterFrame;
		};
		// fullscreen button
		if(showFSButton == true) {
			tgt.fs.col1 = new Color(tgt.fs.ns);
			tgt.fs.col2 = new Color(tgt.fs.fs);
			tgt.fs.col.setRGB(ref.configArray["frontcolor"]);
			tgt.fs.col2.setRGB(ref.configArray["frontcolor"]);
			tgt.fs.onRollOver = function() { 
				this.col1.setRGB(ref.configArray["lightcolor"]); 
				this.col2.setRGB(ref.configArray["lightcolor"]);
			};
			tgt.fs.onRollOut = function() { 
				this.col1.setRGB(ref.configArray["frontcolor"]);
				this.col2.setRGB(ref.configArray["frontcolor"]);
			};
			tgt.fs.onPress = function() { ref.toggleFS(); };
		} else {
			tgt.fs._visible = false;
		}
		// and volume button
		tgt.vol.col = new Color(tgt.vol.bar);
		tgt.vol.col.setRGB(configArray["frontcolor"]);
		tgt.vol.col2 = new Color(tgt.vol.icn);
		tgt.vol.col2.setRGB(configArray["frontcolor"]);
		tgt.vol.col3 = new Color(tgt.vol.bck);
		tgt.vol.col3.setRGB(configArray["frontcolor"]);
		tgt.vol.onRollOver = function() { 
			this.col.setRGB(ref.configArray["lightcolor"]);
			this.col2.setRGB(ref.configArray["lightcolor"]);
		};
		tgt.vol.onRollOut = function() { 
			this.col.setRGB(ref.configArray["frontcolor"]);
			this.col2.setRGB(ref.configArray["frontcolor"]);
		};
		tgt.vol.onPress = function() { 
			this.onEnterFrame = function() { this.msk._width = this._xmouse-12; }; 
		};
		tgt.vol.onRelease = tgt.vol.onReleaseOutside = function() { 
			ref.sendEvent("volume",(this._xmouse-12)*5);
			delete this.onEnterFrame; 
		};
		// turn off tabbing to prevent accessibility glitches
		tgt.scrub.bck.tabEnabled = tgt.vol.tabEnabled = tgt.playpause.tabEnabled = false;
	};


	/** Sets up dimensions of all controlbar items. **/
	private function setDimensions() {
		var tgt = configArray["playerclip"].controlbar;
		// back
		if(configArray["fullscreenmode"] == "true") {
			tgt._y = Stage.height-40;
			tgt._x = Math.round(Stage.width/2-200);
			var cbw = 400;
			tgt.back._alpha = 33;
		} else {	
			tgt._x = 0;
			tgt._y = configArray["displayheight"];
			var cbw = configArray["width"];
			tgt.back._alpha = 100;
		}
		tgt.back._width = cbw;
		// scrub button (including digits)
		if(fileArray.length == 1) {
			tgt.scrub.shd._width = cbw-72;
			tgt.scrub._x = 17;
		} else {
			tgt.scrub.shd._width = cbw-106;
			tgt.scrub._x = 51;
		}
		showFSButton == true ? null: tgt.scrub.shd._width += 18;
		if(configArray["showdigits"] == "false") {
			tgt.scrub.elpTxt._visible = tgt.scrub.remTxt._visible = false;
			tgt.scrub.bar._x = tgt.scrub.bck._x = tgt.scrub.icn._x = 5;
			barWidths = tgt.scrub.bck._width = tgt.scrub.shd._width - 10;
		} else {
			barWidths = tgt.scrub.bck._width = tgt.scrub.shd._width - 84;
			tgt.scrub.remTxt._x = tgt.scrub.shd._width - 39;
		}
		// fullscreen button button
		if(showFSButton == true) {
			tgt.fs._x = cbw - 55;
			if (configArray["fullscreenmode"] == "true") { 
				tgt.fs.fs._visible = false;
				tgt.fs.ns._visible = true;
			} else { 
				tgt.fs.ns._visible = false;
				tgt.fs.fs._visible = true;
			}
		}
		// and volume button
		cbw > 20 ? tgt.vol._x = cbw - 37: null;
	};


	/** Show and hide the play/pause button and show activity icon **/
	private function setState(stt:Number) {
		switch(stt) {
			case 0:
				configArray["playerclip"].controlbar.playpause.ply._visible = true;
				configArray["playerclip"].controlbar.playpause.pas._visible = false;
				break;
			case 1:
				configArray["playerclip"].controlbar.playpause.pas._visible = true;
				configArray["playerclip"].controlbar.playpause.ply._visible = false;
				break;
			case 2:
				configArray["playerclip"].controlbar.playpause.pas._visible = true;
				configArray["playerclip"].controlbar.playpause.ply._visible = false;
				break;
		}
	};


	/** Print current time to controlBar **/
	private function setTime(elp:Number,rem:Number) {
		itemLength = elp + rem;
		itemProgress = Math.round(rem/itemLength*100);
		var tgt = configArray["playerclip"].controlbar.scrub;
		tgt.bar._width = Math.floor(elp/(elp+rem)*barWidths)-2;
		elp == 0 ? tgt.bar._width = 0: null;
		tgt.icn._x = tgt.bar._width + tgt.bar._x + 1;
		tgt.elpTxt.text = StringMagic.addLeading(elp/60)+":"+StringMagic.addLeading(elp%60);
		tgt.bck._width == barWidths ? tgt.remTxt.text = StringMagic.addLeading(rem/60)+":"+StringMagic.addLeading(rem%60): null;
	};


	/** New item is loaded **/ 
	private function setItem(prm:Number) { wasLoaded = false; };

	/** Print current buffer amount to controlbar **/
	private function setLoad(pct:Number) {
		if(wasLoaded == false) {
			configArray["playerclip"].controlbar.scrub.bck._width = Math.round(barWidths*pct/100);
		}
		configArray["playerclip"].controlbar.scrub.remTxt.text = Math.round(pct)+" %";
		pct == 100 ? wasLoaded = true: null;
	};


	/** Reflect current volume in volumebar **/
	private function setVolume(pr1:Number) {
		configArray["playerclip"].controlbar.vol.msk._width = Math.round(pr1/5);
	};


	/** FullScreen toggle **/
	private function toggleFS() {
		configArray["fullscreenmode"] == "true" ? configArray["fullscreenmode"] = "false": configArray["fullscreenmode"] = "true";
		if(Stage["displayState"] == "normal") { 
			Stage["displayState"] = "fullScreen";
		} else if (Stage["displayState"] == "fullScreen") {
			Stage["displayState"] = "normal";
		} else {
			sendEvent("fullscreen");
		}
	};


	/** Catches stage resizing **/
	public function onResize() { setDimensions(); };


	/** Catches fullscreen escape  **/
	public function onFullScreen(fs:Boolean) { 
		if(fs == false) {
			configArray["fullscreenmode"] = "false"; 
			setDimensions(); 
		}
	};


}