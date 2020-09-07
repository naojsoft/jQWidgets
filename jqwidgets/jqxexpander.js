/*
jQWidgets v10.1.1 (2020-Sep)
Copyright (c) 2011-2020 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxExpander","",{});a.extend(a.jqx._jqxExpander.prototype,{defineInstance:function(){var b={width:"auto",height:"auto",expanded:true,expandAnimationDuration:259,collapseAnimationDuration:250,animationType:"slide",toggleMode:"click",showArrow:true,arrowPosition:"right",headerPosition:"top",disabled:false,initContent:null,rtl:false,easing:"easeInOutSine",aria:{"aria-disabled":{name:"disabled",type:"boolean"}},events:["expanding","expanded","collapsing","collapsed","resize"]};if(this===a.jqx._jqxExpander.prototype){return b}a.extend(true,this,b);return b},createInstance:function(){this._isTouchDevice=a.jqx.mobile.isTouchDevice();a.jqx.aria(this);this._cachedHTMLStructure=this.host.html();this._rendered=false;this.render();this._rendered=true},expand:function(){if(this.disabled===false&&this.expanded===false&&this._expandChecker==1){var b=this;this._expandChecker=0;this._raiseEvent("0");this._header.removeClass(this.toThemeProperty("jqx-fill-state-normal"));this._header.addClass(this.toThemeProperty("jqx-fill-state-pressed jqx-expander-header-expanded"));if(this.headerPosition=="top"){this._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-down jqx-icon-arrow-down-hover jqx-icon-arrow-up-hover jqx-icon-arrow-down-selected jqx-expander-arrow-top"));this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-up jqx-icon-arrow-up-selected jqx-expander-arrow-bottom jqx-expander-arrow-expanded"))}else{if(this.headerPosition=="bottom"){this._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-up jqx-icon-arrow-up-selected jqx-icon-arrow-down-hover jqx-icon-arrow-up-hover jqx-expander-arrow-bottom"));this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-down jqx-expander-arrow-top jqx-expander-arrow-expanded-top"))}}switch(this.animationType){case"slide":if(this.headerPosition=="top"){this._content.slideDown({duration:this.expandAnimationDuration,easing:this.easing,complete:function(){b.expanded=true;a.jqx.aria(b._header,"aria-expanded",true);a.jqx.aria(b._content,"aria-hidden",false);b._raiseEvent("1");if(b.initContent&&b._initialized===false){b.initContent();b._initialized=true}}})}else{if(this.headerPosition=="bottom"){this._contentElement.style.display="";this._contentElement.style.height="0px";if(a.jqx.browser.msie&&a.jqx.browser.version<8){this._contentElement.style.display="block"}if(this._cntntEmpty===true){this._content.animate({height:0},{duration:this.expandAnimationDuration,easing:this.easing,complete:function(){b.expanded=true;a.jqx.aria(b._header,"aria-expanded",true);a.jqx.aria(b._content,"aria-hidden",false);b._raiseEvent("1");if(b.initContent&&b._initialized===false){b.initContent();b._initialized=true}}})}else{this._content.animate({height:this._contentHeight},{duration:this.expandAnimationDuration,easing:this.easing,complete:function(){b.expanded=true;a.jqx.aria(b._header,"aria-expanded",true);a.jqx.aria(b._content,"aria-hidden",false);b._raiseEvent("1");if(b.initContent&&b._initialized===false){b.initContent();b._initialized=true}}})}}}break;case"fade":this._content.fadeIn({duration:this.expandAnimationDuration,easing:this.easing,complete:function(){b.expanded=true;a.jqx.aria(b._header,"aria-expanded",true);a.jqx.aria(b._content,"aria-hidden",false);b._raiseEvent("1");if(b.initContent&&b._initialized===false){b.initContent();b._initialized=true}}});break;case"none":this._contentElement.style.display="";this.expanded=true;a.jqx.aria(b._header,"aria-expanded",true);a.jqx.aria(b._content,"aria-hidden",false);this._raiseEvent("1");if(this.initContent&&this._initialized===false){this.initContent();this._initialized=true}break}}},collapse:function(){if(this.disabled===false&&this.expanded===true&&this._expandChecker===0){var b=this;this._expandChecker=1;this._raiseEvent("2");this._header.removeClass(this.toThemeProperty("jqx-fill-state-pressed jqx-expander-header-expanded"));this._header.addClass(this.toThemeProperty("jqx-fill-state-normal"));if(this.headerPosition=="top"){this._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-up jqx-icon-arrow-up-selected jqx-expander-arrow-bottom jqx-expander-arrow-expanded"));this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-down jqx-expander-arrow-top"));if(b._hovered){this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-down-hover"))}}else{if(this.headerPosition=="bottom"){this._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-down jqx-icon-arrow-down-selected jqx-expander-arrow-top jqx-expander-arrow-expanded-top"));this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-up jqx-expander-arrow-bottom"));if(b._hovered){this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-up-hover"))}}}switch(this.animationType){case"slide":if(this.headerPosition=="top"){this._content.slideUp({duration:this.collapseAnimationDuration,easing:this.easing,complete:function(){b.expanded=false;a.jqx.aria(b._header,"aria-expanded",false);a.jqx.aria(b._content,"aria-hidden",true);b._raiseEvent("3")}})}else{if(this.headerPosition=="bottom"){this._content.animate({height:0},{duration:this.expandAnimationDuration,easing:this.easing,complete:function(){b._contentElement.style.display="none";b.expanded=false;a.jqx.aria(b._header,"aria-expanded",false);a.jqx.aria(b._content,"aria-hidden",true);b._raiseEvent("3")}})}}break;case"fade":this._content.fadeOut({duration:this.collapseAnimationDuration,easing:this.easing,complete:function(){b.expanded=false;a.jqx.aria(b._header,"aria-expanded",false);a.jqx.aria(b._content,"aria-hidden",true);b._raiseEvent("3")}});break;case"none":b._contentElement.style.display="none";this.expanded=false;a.jqx.aria(b._header,"aria-expanded",false);a.jqx.aria(b._content,"aria-hidden",true);this._raiseEvent("3");break}}},setHeaderContent:function(b){this._headerText.innerHTML=b;this.invalidate()},getHeaderContent:function(){return this._headerText.innerHTML},setContent:function(b){this._content.html(b);this._checkContent();this.invalidate()},getContent:function(){return this._content.html()},enable:function(){this.disabled=false;this.refresh();a.jqx.aria(this,"aria-disabled",false)},disable:function(){this.disabled=true;this.refresh();a.jqx.aria(this,"aria-disabled",true)},invalidate:function(){if(a.jqx.isHidden(this.host)){return}this._setSize()},refresh:function(b){if(b===true){return}this._removeHandlers();if(this.showArrow===true){this._arrowElement.style.display=""}else{this._arrowElement.style.display="none"}this._setTheme();this._setSize();if(this.disabled===false){this._toggle()}this._keyBoard()},render:function(){var f=this;if(f._rendered){f.refresh();return}this.widgetID=this.element.id;var e=this.host.children();this._headerText=e[0];this._headerElement=document.createElement("div");this._header=a(this._headerElement);this._contentElement=e[1];this._content=a(this._contentElement);if(this._content.initAnimate){this._content.initAnimate()}if(this.headerPosition==="top"){f.element.insertBefore(f._headerElement,f._headerText)}else{f.element.appendChild(f._headerElement)}f._headerElement.appendChild(f._headerText);var d=this._headerText.className;this._headerElement.className=d;this._headerText.className="";if(!this.rtl){this._headerText.className+=" "+f.toThemeProperty("jqx-expander-header-content")}else{this._headerText.className+=" "+f.toThemeProperty("jqx-expander-header-content-rtl")}f._arrowElement=document.createElement("div");f._headerElement.appendChild(f._arrowElement);this._arrow=a(f._arrowElement);if(this.showArrow===true){f._arrowElement.style.display=""}else{f._arrowElement.style.display="none"}if(this._headerElement.getAttribute("tabindex")===null&&this._contentElement.getAttribute("tabindex")===null){if(f.headerPosition==="top"){this._headerElement.setAttribute("tabindex",1);this._contentElement.setAttribute("tabindex",2)}else{this._headerElement.setAttribute("tabindex",2);this._contentElement.setAttribute("tabindex",1)}}this._setTheme();var b="Invalid jqxExpander structure. Please add only two child div elements to your jqxExpander div that will represent the expander's header and content.";try{if(this._header.length===0||this._content.length===0||e.length<2||e.length>2){throw b}}catch(c){throw new Error(c)}this._setSize();if(this.expanded===true){if(this.headerPosition=="top"){this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-up jqx-icon-arrow-up-selected jqx-expander-arrow-bottom jqx-expander-arrow-expanded"))}else{if(this.headerPosition=="bottom"){this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-down jqx-icon-arrow-down-selected jqx-expander-arrow-top jqx-expander-arrow-expanded-top"))}}if(this.initContent){this.initContent()}this._initialized=true;this._expandChecker=0}else{if(this.expanded===false){this._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-down-selected jqx-icon-arrow-up-selected"));if(this.headerPosition=="top"){this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-down jqx-expander-arrow-top"))}else{if(this.headerPosition=="bottom"){this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-up jqx-expander-arrow-bottom"))}}this._initialized=false;this._expandChecker=1;this._contentElement.style.display="none"}}this._checkContent();if(this.disabled===false){this._toggle()}this._keyBoard();a.jqx.utilities.resize(this.host,function(){f.invalidate()})},destroy:function(){this.removeHandler(a(window),"resize.expander"+this.widgetID);this.host.remove();a(this.element).removeData("jqxExpander")},focus:function(){try{if(this.disabled===false){this._headerElement.focus()}}catch(b){}},propertiesChangedHandler:function(b,c,d){if(d.width&&d.height&&Object.keys(d).length==2){b._setSize()}},propertyChangedHandler:function(b,c,e,d){if(b.batchUpdate&&b.batchUpdate.width&&b.batchUpdate.height&&Object.keys(b.batchUpdate).length==2){return}if(c=="width"||c=="height"){b._setSize();return}if(c=="expanded"){if(d===true&&e===false){this.expanded=false;this.expand()}else{if(d===false&&e===true){this.expanded=true;this.collapse()}}}else{this.refresh()}},_raiseEvent:function(g,e){var c=this.events[g];var f=new a.Event(c);f.owner=this;f.args=e;var b;try{b=this.host.trigger(f)}catch(d){}return b},resize:function(c,b){this.width=c;this.height=b;this._setSize()},_setSize:function(){this.element.style.width=this._toPx(this.width);this.element.style.height=this._toPx(this.height);this._headerElement.style.height="auto";this._headerElement.style.minHeight=this._arrowElement.offsetHeight;var d=this.arrowPosition;if(this.rtl){switch(d){case"left":d="right";break;case"right":d="left";break}}if(d=="right"){this._headerText.style["float"]="left";this._headerText.style.marginLeft="0px";this._arrowElement.style["float"]="right";this._arrowElement.style.position="relative"}else{if(d=="left"){if(this.width=="auto"){this._headerText.style["float"]="left";this._headerText.style.marginLeft="17px";this._arrowElement.style["float"]="left";this._arrowElement.style.position="absolute"}else{this._headerText.style["float"]="right";this._headerText.style.marginLeft="0px";this._arrowElement.style["float"]="left";this._arrowElement.style.position="relative"}}}this._arrowElement.style.marginTop=(this._headerText.offsetHeight/2-this._arrowElement.offsetHeight/2)+"px";this._contentElement.style.height="auto";var c=Math.max(0,this._content.height());if(this.height=="auto"){this._contentHeight=c}else{var b=Math.round(this.element.offsetHeight)-Math.round(this._header.outerHeight())-1;if(b<0){b=0}if(!this._contentHeight){this._contentHeight=c}if(b!=this._contentHeight){this._contentElement.style.height=this._toPx(b);this._contentHeight=Math.round(this._content.outerHeight())}else{this._contentElement.style.height=this._toPx(this._contentHeight)}}},_toggle:function(){var b=this;if(this._isTouchDevice===false){this._header.removeClass(this.toThemeProperty("jqx-expander-header-disabled"));switch(this.toggleMode){case"click":this.addHandler(this._header,"click.expander"+this.widgetID,function(){b._animate()});break;case"dblclick":this.addHandler(this._header,"dblclick.expander"+this.widgetID,function(){b._animate()});break;case"none":this._header.addClass(this.toThemeProperty("jqx-expander-header-disabled"));break}}else{if(this.toggleMode!="none"){this.addHandler(this._header,a.jqx.mobile.getTouchEventName("touchstart")+"."+this.widgetID,function(){b._animate()})}else{return}}},_animate:function(){if(this.expanded===true){this.collapse();this._header.addClass(this.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover"));if(this.headerPosition=="top"){this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover"))}else{if(this.headerPosition=="bottom"){this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-bottom-hover jqx-expander-arrow-up-hover"))}}}else{this.expand();this._header.removeClass(this.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover"));if(this.headerPosition=="top"){this._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover"))}else{if(this.headerPosition=="bottom"){this._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-bottom-hover jqx-expander-arrow-up-hover"))}}}},_removeHandlers:function(){this.removeHandler(this._header,"click.expander"+this.widgetID);this.removeHandler(this._header,"dblclick.expander"+this.widgetID);this.removeHandler(this._header,"mouseenter.expander"+this.widgetID);this.removeHandler(this._header,"mouseleave.expander"+this.widgetID)},_setTheme:function(){var e=this,b="jqx-widget jqx-expander",d="jqx-widget-header jqx-expander-header",c="jqx-widget-content jqx-expander-content";if(this.rtl===true){b+=" jqx-rtl"}if(this.disabled===false){this._header.removeClass(this.toThemeProperty("jqx-expander-header-disabled"));this.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled"));if(this.expanded===true){d+=" jqx-fill-state-pressed jqx-expander-header-expanded"}else{d+=" jqx-fill-state-normal";this._header.removeClass(this.toThemeProperty("jqx-expander-header-expanded"))}this._hovered=false;if(!e._isTouchDevice){this.addHandler(this._header,"mouseenter.expander"+this.widgetID,function(){e._hovered=true;if(e._expandChecker==1){e._header.removeClass(e.toThemeProperty("jqx-fill-state-normal jqx-fill-state-pressed"));e._header.addClass(e.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover"));if(e.headerPosition=="top"){if(e.expanded){e._arrow.addClass(e.toThemeProperty("jqx-icon-arrow-up-hover"))}else{e._arrow.addClass(e.toThemeProperty("jqx-icon-arrow-down-hover"))}e._arrow.addClass(e.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover"))}else{if(e.headerPosition=="bottom"){if(e.expanded){e._arrow.addClass(e.toThemeProperty("jqx-icon-arrow-down-hover"))}e._arrow.addClass(e.toThemeProperty("jqx-expander-arrow-bottom-hover jqx-expander-arrow-up-hover"))}}}});this.addHandler(this._header,"mouseleave.expander"+this.widgetID,function(){e._hovered=false;e._header.removeClass(e.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover"));e._arrow.removeClass(e.toThemeProperty("jqx-icon-arrow-up-hover jqx-icon-arrow-down-hover"));if(e.headerPosition=="top"){e._arrow.removeClass(e.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover"))}else{if(e.headerPosition=="bottom"){e._arrow.removeClass(e.toThemeProperty("jqx-expander-arrow-bottom-hover jqx-expander-arrow-up-hover"))}}if(e._expandChecker==1){e._header.addClass(e.toThemeProperty("jqx-fill-state-normal"))}else{e._header.addClass(e.toThemeProperty("jqx-fill-state-pressed"))}})}}else{b+=" jqx-fill-state-disabled";d+=" jqx-expander-header-disabled"}if(this.headerPosition=="top"){c+=" jqx-expander-content-bottom"}else{if(this.headerPosition=="bottom"){c+=" jqx-expander-content-top"}}this.host.addClass(this.toThemeProperty(b));this._header.addClass(this.toThemeProperty(d));this._content.addClass(this.toThemeProperty(c));this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow"))},_checkContent:function(){this._cntntEmpty=/^\s*$/.test(this._contentElement.innerHTML);if(this._cntntEmpty===true){this._contentElement.style.height="0px";this._content.addClass(this.toThemeProperty("jqx-expander-content-empty"))}else{if(this.height==="auto"){this._contentElement.style.height="auto"}else{this._contentElement.style.height=this._contentHeight+"px"}this._content.removeClass(this.toThemeProperty("jqx-expander-content-empty"))}},_keyBoard:function(){var b=this;this._focus();this.addHandler(this.host,"keydown.expander"+this.widgetID,function(c){var d=false;if((b.focusedH===true||b.focusedC===true)&&b.disabled===false){switch(c.keyCode){case 13:case 32:if(b.toggleMode!="none"){if(b.focusedH===true){b._animate()}d=true}break;case 38:if(c.ctrlKey===true&&b.focusedC===true){b._headerElement.focus()}d=true;break;case 40:if(c.ctrlKey===true&&b.focusedH===true){b._contentElement.focus()}d=true;break}return true}if(d&&c.preventDefault){c.preventDefault()}return !d})},_focus:function(){var b=this;this.addHandler(this._header,"focus.expander"+this.widgetID,function(){b.focusedH=true;a.jqx.aria(b._header,"aria-selected",true);b._header.addClass(b.toThemeProperty("jqx-fill-state-focus"))});this.addHandler(this._header,"blur.expander"+this.widgetID,function(){b.focusedH=false;a.jqx.aria(b._header,"aria-selected",false);b._header.removeClass(b.toThemeProperty("jqx-fill-state-focus"))});this.addHandler(this._headerText,"focus.expander"+this.widgetID,function(){b._headerElement.focus()});this.addHandler(this._arrow,"focus.expander"+this.widgetID,function(){b._headerElement.focus()});this.addHandler(this._content,"focus.expander"+this.widgetID,function(){b.focusedC=true;b._content.addClass(b.toThemeProperty("jqx-fill-state-focus"))});this.addHandler(this._content,"blur.expander"+this.widgetID,function(){b.focusedC=false;b._content.removeClass(b.toThemeProperty("jqx-fill-state-focus"))})},_toPx:function(b){if(typeof b==="number"){return b+"px"}else{return b}}})})(jqxBaseFramework);

