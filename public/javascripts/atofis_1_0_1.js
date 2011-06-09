/*!
 * AtOfis 1.0.1
 *
 * Copyright (c) 2010 Kuan Yaw, Liew (http://www.atofis.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.atofis.com/
 */

(function($){
	$.fn.accordion=function(options){
		
		  settings = $.extend({}, arguments.callee.defaults, options);
		  _create(this);
		
		  function _create(_self){
		    
		  	$(_self).addClass("xt");
			  $(_self).addClass("xt-accordion");
			  $(_self).parent().triggerHandler('resize'); 
			  $(_self).find("h3").height(19);
			  $(_self).find("h3").css("margin-top","0px");
			  $(_self).find("h3").css("margin-bottom","0px");
			  $(_self).find("h3").css("line-height","19px");
			  (_self).find("h3").next().css("margin-top","0px");
        $(_self).find("h3").next().css("margin-bottom","0px");
        $(_self).find("h3").next().css("padding","1px");

         
			  $(_self).css('z-index',"10000"); 
			  $(_self).addClass("xt-resizable");
			  
			  var headerheight=$(_self).find("h3:first").outerHeight();  
		  	$(_self).find("h3").addClass("xt-accordion-header");
		  	var countHeader=$(_self).find("h3").size()+1;
		  	$(_self).find("h3").next().addClass("xt-accordion-content");
		  	if(settings.height=='auto'){
		  	      $(_self).bind("resize",{elem:$(_self).find("h3").next()},auto_resize_content);
		  	      
	      	}else {
	      	  $(_self).find("h3").next().height(settings.height);
	      	}
			  $(_self).find("h3").bind("click",function(){_operation(this);});
			  $(_self).find("h3").next().hide();
			   var contentheight=0;
			  if(settings.showOnOpen==""){
			    $(_self).find("h3:first").next().show();
			     $(_self).find("h3:first a").addClass("open");
			     //contentheight=$(_self).find("h3:first").next().height();
			  } 
			  else{
			     $(_self).find("h3 a[href='"+settings.showOnOpen+"']").addClass("open");
			     $(_self).find("h3 a[href='"+settings.showOnOpen+"']").parent().next().show();
			     //contentheight=$(_self).find("h3 a[href='"+settings.showOnOpen+"']").parent().next().height();
			  }
       
			 /*var headerheight=$(_self).find("h3:last").height(); 
			 var lastindex=$(_self).find("h3:last").index();   
			 $(_self).height(((lastindex+1)*headerheight)+contentheight);*/
			       
		  }
      function auto_resize_content(event){
            var elem = event.data.elem;     
            var headerheight=$(elem).parent().find("h3:first").outerHeight(true);  
            var countHeader=$(elem).parent().find("h3").size()+1;
        	  $(elem).height($(elem).parent().innerHeight()-(headerheight*countHeader)+12);
       
        	 }
		  function _operation(_self){
		           if(!$(_self).find("a").hasClass("open")){        
                 $("h3 a").removeClass("open");
                 $("h3").next().slideUp();
                 $(_self).next().slideDown();
                 $(_self).find("a").addClass("open");
               }		  	       
		  }
	}
	$.fn.accordion.defaults = {
      showOnOpen:"",
      height:'auto',

	};
})(jQuery);/*!
 * AtOfis 1.0.1
 *
 * Copyright (c) 2010 Kuan Yaw Liew (http://www.atofis.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.atofis.com/
 */

(function($){
	$.fn.button=function(options){
		
	    settings = $.extend({}, arguments.callee.defaults, options);
		_create(this);
		  function _create(_obj){
		     $(_obj).each(function(){
		      var _self=$(this);
		       
		     if(!$(_self).hasClass("xt-normal-button")){
		  	  $(_self).addClass("xt");
			    $(_self).addClass("xt-normal-button");
			    $(_self).css("height",settings.height);
			    $(_self).css("width",settings.width);
			    if($.trim($(_self).attr("tooltip"))!=""){
              $(_self).tooltip({text:$(_self).attr("tooltip")});
            
          } 
			    
			    if($(_self).find("ul").is("ul")){
			       $(_self).wrap("<div></div>");
			       _self=$(_self).parent();
			       $(_self).addClass("xt");
             $(_self).addClass("xt-normal-button");
                 $(_self).css("height",settings.height);
          $(_self).css("width",settings.width);
			        $(_self).find("ul").wrap("<div class='xt xt-menu'></div>");

			       $(_self).css("display","inline-block");
			       $(_self).css("*display","inline");
			       $(_self).css("margin","0px");
			       $(_self).css("padding","0px");
			       
			       var mn = $(_self).find(".xt-menu");
			       var _btn = $(_self).find("button");

			       $(_btn).css("float","left");
			       $(_btn).css("margin","0px");
			       $(_btn).css("text-align","left");
			       $(mn).css("position","absolute");
					   $(mn).css("z-index","15000");
					     
			       $(mn).appendTo("body");
			                       
			       $(mn).hide();
			   
			    
			        $(_self).append("<span style='float:right;display:inline-block;width:10px;margin:0px;' class='xt xt-normal-button xt-button-seperator-arrow'>&nbsp;</span>");
			        $(mn).find('li').css("position","relative");
			        $(mn).find('li').css("margin","0px");
			        $(mn).find('li').css("padding","3px");
			        $(mn).find("ul").css("margin","0px");
			        $(mn).find("ul").css("padding","0px");
			        $(mn).find('li').css("list-style","none");
			        $(mn).find('li').css("z-index","15001");        
			        $(mn).css("padding","0px");
			        $(mn).find('li').addClass('xt-menu-item');		        
			        $(mn).find("li").css("list-style","none");
	
         
          
          $(_self).find("span").bind("click",{mn:mn,btn:_btn},open_menu);
        
          $(mn).find("li").bind("click",{mn:mn,btn:_btn,selected:true},close_menu);
          
          var ctop =$(_self).offset().top;
          var cleft =$(_self).offset().left;

          var btnWidth = $(_self).outerWidth();
          if($(mn).width()<btnWidth){
            $(mn).width(btnWidth);
          }
               _insertIcon(_btn);  
                  
          
			    } else {
			     
                _insertIcon(_self);
                
                
          }
  
			    }
		});
          
		  }      
      function _insertIcon(owner){
             var src=$(owner).attr("icon");
            if($.trim(src)!=''){
              $(owner).prepend('<span style="display:inline-block;width:15px;margin-right:2px;">&nbsp;</span>');
               $(owner).find('span').css("background","url("+src+") 50% 50% no-repeat")
        
          }
          return false;
      }

		  function open_menu(event){
		     var menu = event.data.mn;
		     var button = event.data.btn;
     
		     $(menu).css("top",$(button).parent().offset().top+$(button).parent().innerHeight()+"px");
         $(menu).css("left",$(button).parent().offset().left+"px");

		     $(menu).fadeIn();
		     
	        $(document).bind("click",{mn:menu,btn:button},close_menu);
         return false;
		  }  
		  
		  function close_menu(event){
		    var menu = event.data.mn;
		    var button = event.data.btn;
		    if(event.data.selected){
		       var icon = $(button).find("span");
		      $(button).text($(this).text());
		      $(button).prepend(icon);
		    }
		    $(document).unbind("click",close_menu);
		    $(menu).fadeOut();
		      return false;
		  }
		  
	}
    $.fn.button.defaults = {
      height:'auto',
      width:'auto'
  };
})(jQuery);
/*!
 * AtOfis 1.0.1
 *
 * Copyright (c) 2010 Kuan Yaw Liew (http://www.atofis.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.atofis.com/
 */


(function($){
  
  var thisdate = {}; 
  $.fn.calendar=function(options){
  	  if(options=="show"){
  	    $.calendar.show(this);
  	    return false;
  	  }
  	  if(options=="hide"){
  	    $.calendar.hide(this);
        return false;
      } 	
       settings = $.extend({},$.fn.calendar.defaults, options);
    
       if(settings.date=='')
          thisdate=$.calendar._today();  
       else thisdate= $.calendar._setDate(settings.date, settings.local);
       $.calendar._create(this);
  }
 
  $.calendar={
    me:{},
    _create: function(_self){
       $this=$(_self);
       $.calendar.me=$(_self);
       $this.width(settings.width);
       //$this.height(settings.height);
       $.data($this, "settings", settings); 
       $this.addClass("xt");
       $this.addClass("xt-calendar");
       $this.css("padding-left","10px");
       $this.css("padding-right","10px");
       $this.css("padding-top","3px");
       $this.css("padding-bottom","5px");
       $this.attr('local',settings.local);

       if(settings.type=='dropdown'){
         $this.appendTo("body");
         $this.css("z-index","15001");
         $this.css("position","absolute");
         $("body").bind("click",{me:$this},function(event){
            $(event.data.me).hide();
         });
         $("div").bind("scroll",{me:$this},function(event){
            $(event.data.me).hide();
         });
         $this.hide();
       }
       $title = $("<div></div>").appendTo($this);
       $title.addClass("title");
       $title.css("text-align","center");
       $week = $("<div></div>").appendTo($this);
       $week.css("text-align","center");
       $daycontainer = $("<div></div>").appendTo($this);
       $daycontainer.css("text-align","center");
       $daycontainer.css("margin-bottom","2px");
       $daycontainer.addClass("daycontainer");
       if(settings.showtodaybutton){
         $footer = $("<div></div>").appendTo($this);
         $footer.css("text-align","center");
         $("<button>Today</button>").appendTo($footer)
         .bind("click",{me:$this,type:settings.type,target:settings.target,local:settings.local},$.calendar.todayClick);
         
       } 


   
       
       for(var i=1;i<=7;i++){
          $("<div>"+$.calendar._getdayprefix(i)+"</div>").appendTo($week)
          .width(20)
          .height(17)
          .addClass("dayprefix")
          .css("display","inline-block");
       } 
       $.calendar._build();
        
    },
    _getMonthName:function(month){
       var mth;
       switch(parseInt(month)){
         case 1:
             mth="January";
             break;
         case 2:
             mth="February";
             break;
         case 3:
             mth="March";
             break;
        case 4:
             mth="April";
             break;
        case 5:
             mth="May";
             break;
        case 6:
             mth="Jun";
             break;
        case 7:
             mth="July";
             break;
        case 8:
             mth="August";
             break;
        case 9:
             mth="September";
             break;
        case 10:
             mth="October";
             break;
       case 11:
             mth="November";
             break;
       case 12:
             mth="December";
             break;
                                             
       }
       return mth;
    },
    _getdateDay:function(userdate){
       var current = new Date($.calendar._getMonthName(userdate.month)+" "+userdate.date+","+userdate.year);
       var day=current.getDay();
       if(day==0) day = 7;
       return day;
    },
    _getdayprefix:function(day){
       var  prefix;
       switch(day){
         case 1:
             prefix = "M";
             break;
         case 2:
             prefix = "T";
             break;
         case 3:
             prefix = "W";
             break;
          case 4:
             prefix = "T";
             break;
         case 5:
             prefix = "F";
             break;
         case 6:
             prefix = "S";
             break;
          case 7:
             prefix = "S";
             break;
       }
       return prefix;
    },
    _leapyear:function(year){
      if(year%4==0 &&  year%100!=0) return true;
      if(year%100==0 && year%400==0) return true;
      if(year%400==0) return true;
        return false;
    },
    _days:function(month,year){
      if(month==1) return 31;
      if(month==2){
        var leap = $.calendar._leapyear(year);
        if(leap) return 29; else return 28; 
      }
      if(month==3) return 31;
      if(month==4) return 30;
      if(month==5) return 31;
      if(month==6) return 30;
      if(month==7) return 31;  
      if(month==8) return 31;
      if(month==9) return 30;
      if(month==10) return 31;
      if(month==11) return 30;
      if(month==12) return 31;

    },
    _build:function(){

      var $daycontainer = $this.find(".daycontainer");
      var $title = $this.find(".title");
      $title.html("");
      $daycontainer.html("");
      var dayinMonth = $.calendar._days(thisdate.month,thisdate.year);
  
      var lastmonth;
      if(thisdate.month == 1) lastmonth=$.calendar._days(12,thisdate.year-1);
      else lastmonth=$.calendar._days(thisdate.month-1,thisdate.year);
     
      var firstDay=$.calendar._getdateDay({date:1,month:thisdate.month,year:thisdate.year});
      var getTodate=$.calendar._today().date;

      var startlastmonth=lastmonth-firstDay+1;
      var dt=startlastmonth;
      
      var classStatus="inactiveday";
      var setToday="";
      var $buttonprev =$("<button style='width:12px;height:12px'></button>").appendTo($title);
      $buttonprev.addClass("prev");
      $buttonprev.css("cursor","pointer");
      $buttonprev.css("float","left");
    
      $("<span>"+$.calendar._getMonthName(thisdate.month)+" "+thisdate.year+"</span>").appendTo($title);
      var $buttonnext =$("<button style='width:12px;height:12px'></button>").appendTo($title);
      $buttonnext.css("float","right");
      $buttonnext.css("cursor","pointer");
      $buttonnext.addClass("next");
      
      var prevmonth;
      var nextmonth;
      if(thisdate.month == 1) prevmonth={date:1,month:12,year:thisdate.year-1};
      else prevmonth={date:1,month:thisdate.month-1,year:thisdate.year};
      if(thisdate.month == 12) nextmonth={date:1,month:1,year:thisdate.year+1};
      else nextmonth={date:1,month:thisdate.month+1,year:thisdate.year};
  
      $buttonprev.bind("click",{me:$this,date:prevmonth},$.calendar.prevClick);
      $buttonnext.bind("click",{me:$this,date:nextmonth},$.calendar.nextClick);
      
      var today =$.calendar._today(); 
      $title.css("padding","2px");
      var days =lastmonth;  
      var isprevmonth=true;
      var iscurrentmonth=false;
      var isnextmonth=false;
      var yr=prevmonth.year;
      var mth=prevmonth.month;
      
      for(var row=1;row<=6;row++){
        for(var col=1;col<=7;col++){   
          if(dt==days){
            classStatus="inactiveday";
          if(iscurrentmonth)isnextmonth=true;
            iscurrentmonth=false;
            days=dayinMonth;
            yr=nextmonth.year;
            mth=nextmonth.month;        
            dt=0;
          } 
          if(firstDay==col && isprevmonth){
            iscurrentmonth=true;
            isprevmonth=false;
            mth=thisdate.month;
            yr=thisdate.year;
            classStatus="activeday";
          }
          dt+=1; 
          
          if(getTodate==dt && thisdate.month==today.month && thisdate.year==today.year && iscurrentmonth) setToday = "today";
          var $box=$("<div>"+dt+"</div>").appendTo($daycontainer)
          .width(20)
          .height(17)
          .addClass(classStatus)
          .css("cursor","pointer")
          .addClass("activeday")
          .addClass(setToday)
          .css("line-height","17px")
          .css("vertical-align","middle")
          .css("display","inline-block");
          
          $($.data($this, "settings").target).bind("change",{me:$this,target:$.data($this, "settings").target, local:$.data($this, "settings").local},$.calendar.targetChange);
          
          if($.data($this, "settings").type=="dropdown"){
            $box.bind("click",{me:$this,value:{date:dt,month:mth,year:yr},target:$.data($this, "settings").target, local:$.data($this, "settings").local},function(event){
               $(event.data.target).trigger("focus");
               $.calendar._setValue(event.data.target,event.data.value,event.data.local);
               $(event.data.target).trigger("change");              
               $.calendar.hide($(event.data.me));
           });
          } else {
             $box.bind("click",{me:$this,value:{date:dt,month:mth,year:yr},target:$.data($this, "settings").target, local:$.data($this, "settings").local},function(event){
                $(event.data.target).trigger("focus");
                $(event.data.target).trigger("change");    
                $.calendar._setValue(event.data.target,event.data.value,event.data.local);
            });
          }

           setToday="";
         }
         
         $("<br />").appendTo($daycontainer);
      }  

    },
    isdate:function(datestring, localize){
       var ok = /^\d{1,2}[\/]\d{1,2}[\/]\d{4}$/.test(datestring);
       
       if(ok){
          var userdate=$.calendar._setDate(datestring, localize);
          if(userdate.date > $.calendar._days(userdate.month,userdate.year)) return false;
          return !/Invalid|NaN/.test(new Date($.calendar._getMonthName(userdate.month)+" "+userdate.date+","+userdate.year));   
       } return false; 
        
    },
    _today:function(){
       var today = new Date();
       var year = today.getFullYear();
       var month = today.getMonth() + 1; // +1, we do NOT want zero-based month index
       var date = today.getDate();
       var day = today.getDay();
       return {date:date,month:month,year:year};
    },
    _setDate:function(userdate,local){
      
         var dt;
         var mth;
         var yr;
         
         var dd=userdate.split("/");
         var lc=local.split("/");        
          
         $.each(lc,function(i,val){
            switch(val){
              case "m":
                  mth = parseInt(dd[i]);
                  break;
              case "d":
                  dt = parseInt(dd[i]);
                  break;
              case "y":
                  yr = parseInt(dd[i]);
                  break;      
         }    
       });
      return {date:dt,month:mth,year:yr};
    },
    prevClick:function(event){
      thisdate=event.data.date;
      $this=event.data.me;
      $.calendar._build();
      return false;
    },
    nextClick: function(event){
      thisdate=event.data.date;
      $this=event.data.me;
      $.calendar._build();
      return false;
    },
    targetChange: function(event){
      $this=event.data.me;
      var userdate =$(this).val();
      var local =$this.attr('local');
      if(!$.calendar.isdate(userdate,local)) thisdate=$.calendar._today();
      else thisdate=$.calendar._setDate(userdate,local);
       
    },
    todayClick: function(event){
       var me = event.data.me;
       var type = event.data.type;
       var target = event.data.target;
       var today = $.calendar._today();
       var local = event.data.local;
       $.calendar._setValue(target,today,local);
       if(type=="dropdown"){
           $(target).trigger("change");
          $.calendar.hide(me);
       }
      
    },
    formatDate:function(date,format){
        var ft=settings.date.local("/");
         $.each(ft,function(i,val){
            switch(val){
              case "m":
                  month = date.month;
                  break;
              case "d":
                  day = date.day;
                  break;
              case "y":
                  year = date.year;
                  break;
                }
         });
        
    },
     _setValue:function(target,value,local){
        if(local=="undefined" || local=="") local="m/d/y";
        var lc=local.split("/");
        var localizedDate="";
        $.each(lc,function(i,v){
             switch(v){
               case 'd':
                  localizedDate += value.date;
                  break;
               case 'm':
                  localizedDate += value.month;
                  break;
               case 'y':
                  localizedDate += value.year;
                  break;
             }
             
             if(($(lc).size()-1) > i) localizedDate+="/";
        }); 
       $(target).each(function(){
        if($(this).is("label"))  $(this).text(localizedDate);
        if($(this).is("input"))  $(this).val(localizedDate);
        else $(this).html(localizedDate);        
       }); 

            
    },
    show:function(self){    
       $.calendar._build();
      $(self).fadeIn();
      
    },
    hide:function(self){
      $(self).fadeOut();
    },
  }    
  $.fn.calendar.defaults = {
      date:'',
      local:'m/d/y',
      format:'mm/dd/yyyy',    
      width:200,
      type:'fix',
      target:'',
      height:160,   
      showtodaybutton:false,
              
  };
})(jQuery);
/*!
 * AtOfis 1.0.1
 *
 * Copyright (c) 2010 Kuan Yaw Liew (http://www.atofis.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.atofis.com/
 */
 (function($){
    $.fn.dialog=function(options){
        
        if(options=="show"){
           $.dialog._show(this); 
           return false;
         }
         if(options=="close"){
           $.dialog._hide(this); 
           return false;
         }
        settings = $.extend({}, arguments.callee.defaults, options);
        $.dialog._create(this); 
    }
    $.dialog={
       _create:function(_self){       
          $(_self).addClass('xt');
          $(_self).addClass('xt-dialog');
          $(_self).css('padding','0px');
          $(_self).height(settings.height);
          $(_self).width(settings.width);
          if (settings.modal && !$(".xt-overlay").is("div")){
            var $modal = $("<div class='xt-overlay'></div>").appendTo("body");
            $modal.height($("body").height());
            $modal.width($("body").width());
            $modal.css('position','absolute');
            $modal.css('top','0');
            $modal.css('left','0');   
            $modal.css('z-index','15999');
            $modal.hide();     
          }
          var _content = $(_self).html();
          $(_self).html("");
          var $titlebar=$("<div class='titlebar'><div class='topleft'><div class='topright'><div class='top'></div></div></div></div>").appendTo(_self);
          $titlebar.height(31);
          $titlebar.width(settings.width);
          $titlebar.find('div').css('display','inline-block');
          //$titlebar.find('div').css('line-height','30px');
          $titlebar.find('div').css('vertical-align','top');
          $titlebar.find('div').css('margin','0px');
          $titlebar.find('.top').width(settings.width-13);
          $titlebar.find('div').height(31);
          $titlebar.find('.top').html(settings.title);
          $titlebar.find('.top').css('margin-left','7px');
          $titlebar.find('.top').css('margin-right','7px');
          $titlebar.find('.top').css('padding-top','8px');
          var $titlebutton = $("<button class='titlebutton'></button>").appendTo($titlebar.find('.top'));
          $titlebutton.css("float","right");
          $titlebutton.css("cursor","pointer");      
          $titlebutton.click(function(){
              $.dialog._hide(_self);
          });
          $titlebutton.width(12);
          $titlebutton.height(12);                   
          var $content = $("<div class='content'><div class='inner'>"+_content+"</div></div>").appendTo(_self);
          $content.find(".inner").css("padding","2px");
          $content.css("padding","0px");
          $content.height(settings.height-32);
          $content.width(settings.width-2);
          $content.find(".inner").width($content.innerWidth());
          $content.find(".inner").height($content.innerHeight());
          $(_self).appendTo('body');
          $(_self).css("position","absolute");
          $(_self).css("z-index","16000");
          var $buttoncontainer = $("<div></div>").appendTo($content.find(".inner"));
          $buttoncontainer.css("text-align","center");
          $.each(settings.buttons,function(name,fn){
               var $button = $("<button></button>").appendTo($buttoncontainer);
               $button.button();
               $button.height(21);
               $button.text(name); 
               $button.bind("click",fn);
          });

          $(_self).hide();
          $(_self).draggable({initTarget:$titlebar});
          
   
          return $(_self);              
        
       },
       _show:function(_self){
          $(".xt-overlay").width($(window).width());
          $(".xt-overlay").height($(window).height());  
          $(_self).css("top", ( $(window).height() - $(_self).outerHeight() ) / 2+$(window).scrollTop() + "px");
          $(_self).css("left", ( $(window).width() - $(_self).outerWidth() ) / 2+$(window).scrollLeft() + "px");
          
          $(".xt-overlay").show();
          $(_self).show();
       },
       _hide:function(_self){
         $(".xt-overlay").hide();
         $(_self).hide();
       },
     }
    $.fn.dialog.defaults = {
      width:300,
      height:150,
      modal:false,
      title:'',
      buttons:{}     
    };
 })(jQuery);
/*!
 * AtOfis 1.0.0
 *
 * Copyright (c) 2010 Kuan Yaw Liew (http://www.atofis.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.atofis.com/
 */
(function($){
  var $me;
  var $parent;
  var dockoption;
  var isresizing=false;
  var isresizing_elem=false;

  var parentAutoHeight=false;
  $.fn.dock=function(){  
     $parent = $(this);
     $.dock.dockNow();

  },

  $.dock={

     dockNow: function(){
       $.dock.resizeBody();

       $parent.find('> *').each(function(){
          $me = $(this);
          dockoption=$me.attr('dock');
         
          if(dockoption=='') return false;
          
          
          
          $me.attr('originWidth',$me.width());
          $me.attr('originHeight',$me.height());
               
           $me.css('position','absolute');     
           
           
           switch(dockoption){
              case 'none':
                 
                    if($me.css('position')=='absolute'){
           
                      $me.css('position','');
                      $me.css("z-index","14999");
                      $me.width($me.attr('originWidth'));
                      $me.height($me.attr('originHeight'));
                     $me.triggerHandler('resize');
                    }
                    break;
              case 'fill':
                    
                    $me.css("z-index","14999");
                    var sizes=$.dock.setDockingSize();
                    $me.css('top',sizes.top);
                    $me.css('left',sizes.left);
                    var marginsizet= $me.outerWidth(true)-$me.outerWidth();
                    var bordersizet= $me.outerWidth()-$me.innerWidth();
                    var marginsizel= $me.outerHeight(true)-$me.outerHeight();
                    var bordersizel= $me.outerHeight()-$me.innerHeight();
                    var paddingsizet= $parent.outerWidth()-$parent.innerWidth()+1;
                    var paddingsizel= $parent.outerHeight()-$parent.outerHeight()+1;
                    $me.width($parent.innerWidth()-marginsizet-sizes.left-sizes.right-bordersizet-paddingsizet);
                    $me.height($parent.innerHeight()-marginsizel-sizes.top-sizes.bottom-bordersizel-paddingsizel);
                    $me.triggerHandler('resize');
                  
                    
                    break;
              case 'top': 

                    var sizes=$.dock.setDockingSize();
                    $me.css('top',sizes.top);
                    $me.css('left',sizes.left);
                    var marginsize= $me.outerWidth(true)-$me.outerWidth();
                    var paddingsize= $parent.outerWidth()-$parent.innerWidth()+1;
                    var bordersize= $me.outerWidth()-$me.innerWidth();             
                    $me.css("z-index","14999");
                   
                    $me.width($parent.innerWidth()-marginsize-sizes.left-sizes.right-bordersize-paddingsize);
                     $me.triggerHandler('resize');
                    
                    break;
              case 'bottom':
     
                    var sizes=$.dock.setDockingSize();
                    $me.css('top',$parent.innerHeight()-$me.outerHeight(true)-sizes.bottom);
                    $me.css('left',sizes.left);
                    var bordersize= $me.outerWidth()-$me.innerWidth();
                    var marginsize= $me.outerWidth(true)-$me.outerWidth();  
                      var paddingsize= $parent.outerWidth()-$parent.innerWidth()+1;
                    $me.css("z-index","14999");
                    $me.width($parent.innerWidth()-marginsize-sizes.left-sizes.right-bordersize-paddingsize);
                    $me.triggerHandler('resize');
        
                    break;
              case 'left':
  
                    var sizes=$.dock.setDockingSize();
                    var marginsize= $me.outerHeight(true)-$me.outerHeight();  
                    var bordersize= $me.outerHeight()-$me.innerHeight();
                    var paddingsize= $parent.outerHeight()-$parent.innerHeight()+1;
                    $me.css("z-index","14999");
                    $me.css('left',sizes.left);
                    $me.css('top',sizes.top);
                    $me.height($parent.innerHeight()-sizes.bottom-sizes.top-bordersize-paddingsize);
                      $me.triggerHandler('resize');
                    break;
              case 'right':

                     var sizes=$.dock.setDockingSize();   
                     var marginsize= $me.outerHeight(true)-$me.outerHeight();
                     var bordersize= $me.outerHeight()-$me.innerHeight();
                     var paddingsize= $parent.outerHeight()-$parent.innerHeight()+1;
                     $me.css('top',sizes.top);                        
                     $me.css('left',$parent.innerWidth()-$me.outerWidth(true)-sizes.right);
                     $me.height($parent.innerHeight()-sizes.bottom-sizes.top-bordersize-paddingsize);
                     $me.triggerHandler('resize');
                     break;
           }
      

      }); 


             


            if(isresizing){
                   clearTimeout(isresizing);  
                   isresizing=false;
              }
    
                
     },
     setParentHeight: function(parent){
             if(parent) $parent = $(parent);
             var totalDockChildHeight = 0;
             $parent.children("*[dock='top']").each(function(){
                  totalDockChildHeight+=$(this).outerHeight(true);
             });
            $parent.children("*[dock='bottom']").each(function(){
                 totalDockChildHeight+=$(this).outerHeight(true);
             });
             $parent.height(totalDockChildHeight);
             return false;
             
     },
     me_resize:function(){
             $parent=$(this);
             if(isresizing){
                   clearTimeout(isresizing);  
                   isresizing=false;
              }
             isresizing=setTimeout($.dock.dockNow,10);   
      
     },
     resizeBody: function(){

      if($parent.is('body')){
        
         $parent.css('margin','0px');
         $parent.css('padding','0px');
         $parent.css('overflow','hidden');
         var scrollWidth = document.body.scrollWidth;
         var scrollHeight = document.body.scrollHeight;
         var scrollbarsize = $.dock.getScrollbarSize();
         var wWidth =$(window).width();
         var wHeight=$(window).height();
         if(wWidth==scrollWidth) wWidth = wWidth-1; 
         if(wHeight==scrollHeight) wHeight = wHeight-1;
         $parent.width(wWidth);
         $parent.height(wHeight);
       if(!isresizing){
         $(window).bind('resize',function(event){
               $parent=$('body');
               if(isresizing){
                   clearTimeout(isresizing);  
                   isresizing=false;
              }
             
              isresizing=setTimeout($.dock.dockNow,10);                
                    
         });}
   
         $parent.css('overflow','auto');
         parentAutoHeight=false;
     }else{
       
        if($parent.css('height')=='auto') parentAutoHeight = true;
        else parentAutoHeight = false;
     }

     },
     setDockingSize: function(){
         
         var topHeights =0;
         var bottomHeights =0;
         var leftWidths =0;
         var rightWidths =0;

         $me.prevAll("*[dock='top']").each(function(){      
               topHeights += $(this).outerHeight();
         });
         $me.prevAll("*[dock='bottom']").each(function(){
               bottomHeights += $(this).outerHeight();   
         });
         $me.prevAll("*[dock='left']").each(function(){
               leftWidths += $(this).outerWidth();   
         });
         $me.prevAll("*[dock='right']").each(function(){
               rightWidths += $(this).outerWidth();   
         });
         
         return {top:topHeights,bottom:bottomHeights,left:leftWidths,right:rightWidths};
     },
      getScrollbarSize: function(){
        var $inner = $('<p></p>').css({width:'100%',height:'100%'});
        var $outer = $('<div></div>')
          .css({
            position:'absolute',
            top: '0px',
            left: '0px',
            visibility: 'hidden',
            width: '200px',
            height: '150px',
            overflow: 'hidden'
          })
          .append($inner)
          .appendTo('body');
        
        var w1 = $inner.innerWidth();
        $outer.css('overflow','scroll');
        var w2 = $inner.innerWidth();
        if (w1 == w2) w2 = $outer.innerWidth();
        $outer.remove();
        return(w1 - w2);
    },
    docked: function(){
        
    }
  }
 
  
    
})(jQuery);/*!
 * AtOfis 1.0.1
 *
 * Copyright (c) 2010 Kuan Yaw Liew (http://www.atofis.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.atofis.com/
 */

(function($){
    var $self;
    var isMouseDown=false;
    var lastMouseX;
    var lastMouseY;
    var lastElemTop;
    var lastElemLeft;

    $.fn.draggable=function(options){
         $self = $(this);

         settings = $.extend({}, $.fn.draggable.defaults, options);
         $.draggable._set();        
    }
    $.draggable={
    
     _getCursorPos: function(e){
     var posx = 0;
     var posy = 0;

     if (!e) var e = window.event;

     if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
     }
      else if (e.clientX || e.clientY) {
       posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
       posy = e.clientY + document.body.scrollTop  + document.documentElement.scrollTop;
      }

      return { 'x': posx, 'y': posy };

      },
      _setPos: function(e){
           var pos = $.draggable._getCursorPos(e);
           
           var spanX = (pos.x - lastMouseX);
            var spanY = (pos.y - lastMouseY);

           $self.css("top",  (lastElemTop + spanY));
           $self.css("left", (lastElemLeft + spanX));

      },
       _set: function(){ 
         // retrieve positioning properties


           if(settings.initTarget!=''){
             $(settings.initTarget).css("cursor", "move");
            $(settings.initTarget).bind('mousedown',$.draggable._mousedown);
           } else {
             $(this).css("cursor", "move");
             $self.bind('mousedown',$.draggable._mousedown);
           }
           return false;
       },
       _mousedown: function(e){
              isMouseDown = true;
              lastElemTop  = this.offsetTop;
              lastElemLeft = this.offsetLeft;
               var pos    = $.draggable._getCursorPos(e);
              lastMouseX = pos.x;
              lastMouseY = pos.y;

              lastElemTop  = $(this).offset().top;
              lastElemLeft = $(this).offset().left;

               $self.bind('mousemove',$.draggable._mousemove);
               $(this).bind('mouseup',$.draggable._mouseup);  
             
   
       },
       _mouseup: function(){
         isMouseDown=false;
         $self.unbind('mousemove',$.draggable._mousemove);
         $(this).unbind('mouseup',$.draggable._mouseup);

       },
       _mousemove: function(e){
           if(isMouseDown){
           
             $.draggable._setPos(e);
           }
         
    
       },

    }
    $.fn.draggable.defaults = {
        initTarget:'',

    }
})(jQuery);/*!
 * AtOfis 1.0.1
 *
 * Copyright (c) 2010 Kuan Yaw Liew (http://www.atofis.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.atofis.com/
 */


(function($){
	$.fn.gridview=function(options){	
       settings = $.extend({}, $.fn.gridview.defaults, options);

       $.gridview.create(this,settings);
  }
  var $me; 
  var $gridwrapper;
  var gridsettings;
  var $columnWrapper; 
  var $gridcontent;
  $.gridview={
    create: function(_self,settings){
       $me = $(_self);
       $headerWrapper = $("<div></div>").appendTo($me);
       $headerWrapper.addClass('xt-gridview-header');
       $columnWrapper = $("<div></div>").appendTo($headerWrapper);
       $gridwrapper=$('<div></div>').appendTo($me);
 
       $me.css('overflow','hidden');


       $columnWrapper.css('overflow','hidden');
       $gridwrapper.css('overflow','auto');

  
       $gridcontent=$('<div></div>').appendTo($gridwrapper);
       
       gridsettings = settings;
       $me.addClass('xt xt-gridview');
       
       $me.width(settings.width);  
       $me.height(settings.height);
       $gridwrapper.width($me.innerWidth());
       
       $.gridview.makeColumn();
       $gridwrapper.height($me.innerHeight()-2-$columnWrapper.innerHeight());
       
       
      
       scrollbarWidth = $.gridview.getScrollbarSize();
       
       
       $columnWrapper.width($me.innerWidth()-scrollbarWidth);
     
       $gridwrapper.scroll(function(){
           $columnWrapper.scrollLeft($gridwrapper.scrollLeft());
       });
    },
    makeColumn:function(){
       
       var columnWidth = 0;
       
       var idx=0;
       var $column = $("<div></div>").appendTo($columnWrapper);
       //empty column
       
       $column.css('display','inline-block');
       $column.addClass('col'+idx);
       $column.css('cursor','pointer');
       $column.css('padding','1px');
       $column.css('vertical-align','middle');
       $column.addClass('xt-gridview-column');
       $column.css('overflow','hidden');
       $column.width(18);
       $column.height(gridsettings.headerHeight);
       idx = 1;
       $.each(gridsettings.header,function(i,n){
          var $column = $("<div></div>").appendTo($columnWrapper);
          $column.addClass('xt-gridview-column');
          $column.width(n.width);
          $column.height(gridsettings.headerHeight);
          $column.css('line-height',gridsettings.headerHeight+'px');
          $column.css('vertical-align','middle');
          $column.addClass('col'+idx);
          $column.html(i);
          $column.css('display','inline-block');
          $column.css('padding','1px');
          $column.css('margin','0px');
          $column.css('cursor','pointer');
          $column.css('overflow','hidden');
          if(n.align!='') $column.css('text-align',n.align);
          columnWidth+=n.width;
          idx+=1;
       });
       $gridcontent.width(columnWidth);
           

       $.gridview.loadData();
       
    },
    loadData:function(){
         
         $gridwrapper.addClass('xt-loading');
         $gridcontent.html("");
        $.ajax({ 
           type: gridsettings.calltype, 
           dataType:gridsettings.datatype,
           url: gridsettings.url, 
           data: gridsettings.data, 
           success: function(datas){ 
             $.gridview.insertData(datas);},
           error: function(){
             $gridwrapper.html('Data fetching error!');
             $gridwrapper.removeClass('xt-loading');            
         } 
       });
    },
    
    insertData: function(datas){
      
       
       var $data = $(datas).find(':first');
       var row_idx = 0;
       var col_idx = 0;
             
            $data.find("> *").each(function(){
                var $row =$('<div></div>').appendTo($gridcontent);
                 
                $row.addClass('xt-gridview-row');
                
                $row.addClass('row'+row_idx);
                $row.css('padding','0px');
                $row.css('m','0px');
                $row.height(gridsettings.rowHeight);
                $row.width($gridcontent.innerWidth());
                $row.bind('click',{grid:$gridcontent},$.gridview.rowClick);
                //first row empty cell
                var $cell =$('<div></div>').appendTo($row); 
                $cell.addClass('xt-gridview-row-cell');
                $cell.addClass('col'+col_idx);    
                $cell.css('margin','0px');
                $cell.css('display','inline-block');
                $cell.css('padding','1px');
                $cell.height(gridsettings.rowHeight);
                $cell.width(18);
                col_idx=1;
                $item = $(this)
             
               $.each(gridsettings.header,function(i,n){
                    $found=$item.find(n.bind);
   
                   if($found.size()>-1){
                    var $cell =$('<div></div>').appendTo($row);
                    $cell.html($found.text());
                    $cell.addClass('xt-gridview-cell');
                    $cell.addClass('col'+col_idx);
                    $cell.height(gridsettings.headerHeight);
                    $cell.css('line-height',gridsettings.rowHeight+'px');
                    $cell.css('vertical-align','middle');
                    $cell.css('margin','0px');    
                    $cell.css('padding','1px');
                    $cell.css('display','inline-block');
                    $row.bind('click',{grid:$gridcontent},$.gridview.cellClick);
                    if(n.align!='') $cell.css('text-align',n.align); 
                    $cell.height(gridsettings.rowHeight);
                    $cell.width(n.width);
                    col_idx+=1;  
                   }
                  });

           
               row_idx+=1;
               col_idx=0;
            });

             $gridwrapper.removeClass('xt-loading'); 
    },
    setColumWidth: function($col, maxColWidth, textLength){
          if(maxColWidth<=textLength){
            $col.width(textLength+2);
          }else $col.width(maxColWidth+2);
          return $col;
    },
   cellClick: function(event){
         var $grid= $(event.data.grid);
         $grid.find('.xt-gridview-row').removeClass('selected');
         $(this).addClass('selected');
         return false;      
    },
    rowClick: function(event){
         var $grid= $(event.data.grid);
         $grid.find('.xt-gridview-row').removeClass('selected');
         $(this).addClass('selected');
         return false;      
    },
    getScrollbarSize: function(){
        var $inner = $('<p></p>').css({width:'100%',height:'100%'});
        var $outer = $('<div></div>')
          .css({
            position:'absolute',
            top: '0px',
            left: '0px',
            visibility: 'hidden',
            width: '200px',
            height: '150px',
            overflow: 'hidden'
          })
          .append($inner)
          .appendTo('body');
        
        var w1 = $inner.innerWidth();
        $outer.css('overflow','scroll');
        var w2 = $inner.innerWidth();
        if (w1 == w2) w2 = $outer.innerWidth();
        $outer.remove();
        return(w1 - w2);
    }
    
  }    
  $.fn.gridview.defaults = {
      url:'',
      calltype:'post',
      data:'',    
      datatype:'xml',
      maxColWidth:50,
      headerHeight:19,
      rowHeight:18,
      header:{},
      width:300,
      height:100,    
      docking:'none',         
  };
})(jQuery);
/*!
 * AtOfis 1.0.1
 *
 * Copyright (c) 2010 Kuan Yaw Liew (http://www.atofis.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.atofis.com/
 */


(function($){
	$.fn.mdi=function(options){
		
		 
	    settings = $.extend({}, arguments.callee.defaults, options);
		  _create(this);
		  

		  function _create(_self){
        $(_self).css("overflow","hidden");
		    $(_self).height($(window).height());

		    $(_self).css("width","100%");
		         
		    $(_self).css("margin","0px");
		    $(_self).css("padding","0px");
	
		    $(_self).css("position","absolute");

		    //$(_self).css("background","#638ec9");
          $(_self).css("background","#bfdbff");
  		  }
		  
        
	}
	$.fn.mdi.defaults = {
      height:'auto',
      width:'auto',
      resizeable:true
	};
})(jQuery);/*!
 * AtOfis 1.0.1
 *
 * Copyright (c) 2010 Kuan Yaw Liew (http://www.atofis.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.atofis.com/
 */

//Sorry! Current version only support data in XML format.
(function($){
	$.fn.menubar=function(options){	
	    settings = $.extend({}, arguments.callee.defaults, options);
	   	_create(this);
		  function _create(_self){
		    	    
		    var _menu = $(_self);
		    $(_menu).addClass("xt");
        $(_menu).addClass("xt-menubar");
        $(_menu).height(15);
        $(_menu).css("padding","2px");
        $(_menu).css("margin","2px");
          /*if(settings.docking!='none')
          $(_menu).docking(settings.docking);*/
          
        
     switch (settings.datatype){
       case 'xml':

              _createMenubar(_menu,settings.data);
                break;

       case 'json':
             break;
              //_createMenubar(_menu,settings.data,data);
       
       case 'html':
            //_createMenubar(_menu,settings.data);
            break;
     }
     
    
     $(_menu).parent().triggerHandler('resize');

		  } 

	}
	  function _createMenubar(_menu,data){
	               var menus = $(data).find("menus");
                 $(menus).find("> *").each(function(){
                        var menuitem=$("<div id='"+$(this).attr("id")+"' style='display:inline' class='xt-menu-item'>"+$(this).attr("title")+"</div>").appendTo(_menu);
                        $(menuitem).css("padding","2px");
                     
                        $(menuitem).css("margin","1px");
                        if($(this).attr("disabled")) $(menuitem).addClass("disabled");
                       if($(this).attr("title")=="-"){
                         $(menuitem).addClass("seperator");
                         $(menuitem).html("");
                       } 
               
                      if($(this).contents().size()>0){
                        var submenu=$("<div id='submenu_"+$(this).attr("id")+"' style='width:130px;padding:0px;position:absolute;z-index:15001' class='xt xt-menu'></div>").appendTo("body");
                        $(menuitem).bind("click",{sub:submenu},open_submenu);
                        
                        $(submenu).css("top",$(menuitem).offset().top+$(menuitem).height()+5+"px");
                        $(submenu).css("left",$(menuitem).offset().left+"px");
                        _createSubMenu(submenu,$(this));
                        $(submenu).hide();
                     }else{
                        $(menuitem).bind("click",{url:$(this).attr('url'),target:$(this).attr('target')},menu_click);
                     }
                     
                 });
                 return false;
	    
	  }
	  function _createSubMenu(menu,data,nohoverclose){
	      $(data).find("> *").each(function(){
	         
	         
           var menuitem=$("<div class='xt-menu-item'>"+$(this).attr("title")+"</div>").appendTo(menu);
           $(menuitem).css("padding","2px");
           $(menuitem).css("margin","0px");
              $(menuitem).css("padding-left","16px");
           if($(this).attr("disabled")) $(menuitem).addClass("disabled");
          if($(this).attr("title")=="-"){
                         $(menuitem).addClass("seperator");
                         $(menuitem).html("");
                       } 
           
           if($(this).contents().size()>0){
               
             var submenu=$("<div style='width:130px;padding:0px;position:absolute;z-index:15001' class='xt xt-menu'></div>").appendTo("body");
             $(menuitem).addClass("arrow");
             $(menuitem).bind("mouseover",{sub:submenu,parentvisbile:true},open_submenu);
             $(menuitem).bind("click",{sub:submenu,parentvisbile:true},open_submenu);
             
             $(submenu).css("top",$(menuitem).parent().offset().top+"px");
             $(submenu).css("left",$(menuitem).parent().offset().left+$(menuitem).parent().outerWidth()+"px");
             $(submenu).hide();
             _createSubMenu(submenu,$(this),true);
              
           }else{
             if(!nohoverclose){
               $(menuitem).bind("mouseover",hover_close_submenu);
             }
             $(menuitem).bind("click",{url:$(this).attr('url'),target:$(this).attr('target')},menu_click);
           } 
           
           
           
        });
	  }
	  
	  function menu_click(event){
	    var url = event.data.url;
	    var target = event.data.target;

	    switch(target){
	      case '_self':
	           window.location=url;
	           break;
	      case '_blank':
	           window.open(url);
	           break;
	       default:
	           //ajax load
	           if(target!="") $(target).load(url);
	           break;    
	    }
	        
	    
	        
	   
	  
	
	   close_submenu(event); 
	        
	            
	   return false;     
	    
	  }
	  function open_submenu(event){
	       //Close other manual except myself or my parent
       if(!event.data.parentvisbile){
         var cidx=$(this).parent().attr('id');
         $(".xt-menu").each(function(){
            var idx=$(this).attr('id');
            if(idx!=cidx) $(this).fadeOut();
         });
	      }
	       $(document).bind("click",close_submenu);
         var submenu = event.data.sub;
         $(submenu).fadeIn();
        
         return false;
      }  
     function hover_close_submenu(event){

         var cidx=$(this).parent().attr('id');
         $(".xt-menu").each(function(){
            var idx=$(this).attr('id');
            if(idx!=cidx) $(this).fadeOut();
         });
          return false;
      }
      
      function close_submenu(event){
        $(document).unbind("click",close_submenu);
        $(".xt-menu").fadeOut();
          return false;
      }
  $.fn.menubar.defaults = {
      width:'auto',
      docking:'none',
      data:{},datatype:'html'
      
  };
})(jQuery);
/*!
 * AtOfis 1.0.1
 *
 * Copyright (c) 2010 Kuan Yaw Liew (http://www.atofis.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.atofis.com/
 */

(function($){

	$.fn.panel=function(options){
		
		 
	    settings = $.extend({}, arguments.callee.defaults, options);
		  _create(this);
		  

		  function _create(_self){
		    var wrapper;
		    var content;
		    if(settings.title!=""){
		      wrapper =$('<div dock="top" style="margin:0px;padding:2px;height:22px;line-height:22px" class="xt-titlebar">'+settings.title+'</div>');
		      $(_self).prepend(wrapper);
           wrapper = _self;
		    } else wrapper=_self;	       
           
		    $(wrapper).addClass("xt");
              $(wrapper).addClass("xt-panel");

		  
		    $(wrapper).css('z-index',"1");  
		     $(wrapper).css('overflow',settings.overflow);
			  var height=0;
			  if(settings.height=="fit"){
   
          var bottomElemTall = 0;
          var topElemTall=40;

               
			    height=$(wrapper).parent().innerHeight();
        
			  }else height=settings.height;

        if(settings.height!='auto'){
        	// $(wrapper).css('overflow','hidden');
 		    $(wrapper).height(height);
        }
    	 $(wrapper).width(settings.width);
	 
        if(settings.bgcolor!=''){
          $(wrapper).css('background-color',settings.bgcolor);
        }        
		    if(settings.border!=''){
          $(wrapper).css('border',settings.border);
        }     
		     //Dock all children
	       $(wrapper).dock();
	       
	       $(wrapper).bind('resize',function(event){
	          
	            var resizeTimeout=false;
	            var $parent = $(this);
	         
	            var whenResize = function(){
	             
	                  $parent.dock(); 
	                   if(resizeTimeout){
                        clearTimeout(resizeTimeout);
                        resizeTimeout=false;
                }
	                  
	            }
	           
	           resizeTimeout=setTimeout(whenResize,10);
	            
	       });
	       if($(wrapper).css('height')=='auto'){
	         $(wrapper).css('overflow','hidden');
	         $.dock.setParentHeight(wrapper);   
	       }
        
         $(wrapper).parent().triggerHandler('resize');   
        
	          
		  }
		  

		 function whenResize(){
		   
		 }
    
     function rearrange_layout(wrapper,layout){
          switch(layout){
           case 'horizontal':
               $(wrapper).find("> div").height($(wrapper).height());
                 var totalWidth=0;
                $(wrapper).find("> div").each(function(){
                   totalWidth+=$(this).width();   
                });
                var lastElem = $(wrapper).find("> div:last")
                var lastElemWidth=$(lastElem).width();
                $(lastElem).width($(wrapper).width()-(totalWidth-lastElemWidth));
                
                break;
           case 'vertical':
     
                $(wrapper).find("> div").width($(wrapper).innerWidth());
                
                var totalHeight=0;
                $(wrapper).find("> div").each(function(){
                   totalHeight+=$(this).height();   
                   
                });
                var lastElem = $(wrapper).find("> div:last")
              
                var lastElemHeight=$(lastElem).height();
                $(lastElem).height($(wrapper).innerHeight()-(totalHeight-lastElemHeight));
                
                break;
                
                
           
         }
            return false;
       }
        
        
	}
	$.fn.panel.defaults = {
      height:'auto',
      width:'auto',
      layout:'',
      overflow:'hidden',
      bgcolor:'',
      border:'',
      title:''
	};
})(jQuery);/*!
 * AtOfis 1.0.1
 *
 * Copyright (c) 2010 Kuan Yaw Liew (http://www.atofis.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.atofis.com/
 */


(function($){
	$.fn.statusbar=function(options){
		
		 
	    settings = $.extend({}, arguments.callee.defaults, options);
		  _create(this);
		  

		  function _create(_self){
		    $(_self).addClass('xt');
		    $(_self).addClass('xt-statusbar');
		    $(_self).height(22);
		    $(_self).css({'line-height':'22px'})
		 		 if(settings.width=='auto'){
		 		   $(_self).width($("body").innerWidth()*99.9/100);
		 		   
		 		 }	 
		 		 $(_self).css('position','absolute');
		 	   //$(_self).docking('bottom');
		 		 
		  }
		  
        
	}
	$.fn.statusbar.defaults = {
      width:'auto',
      docking:'bottom',
     
	};
})(jQuery);/*!
 * AtOfis 1.0.1
 *
 * Copyright (c) 2010 Kuan Yaw Liew (http://www.atofis.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.atofis.com/
 */


(function($){
	$.fn.tab=function(options){
		
		 
	    settings = $.extend({}, arguments.callee.defaults, options);
		_create(this);
		

		  function _create(_self){
		  	$(_self).addClass("xt");
			  $(_self).addClass("xt-tab");
			  $(_self).width(settings.width);
			  $(_self).height(settings.height);
			  $(_self).css("padding","3px");
			  $(_self).find("ul").height(22);
			  $(_self).find("ul").css("margin","0px");
			  $(_self).find("ul").css("margin-left","5px");
			  $(_self).find("ul").css("padding","0px");

			  $(_self).find("li").css("display","inline-block");
			  $(_self).find("li").css("padding","0px");
			  $(_self).find("li a").css("margin","0px");
			  $(_self).find("li span").css("margin","0px");
			  $(_self).find("li span").css("margin-left","6px");
			  $(_self).find("li span").css("margin-right","6px");
			  $(_self).find("li span").css("line-height","23px");
			  $(_self).find("li span").css("vertical-align","middle");
			  $(_self).find("li").height(23);
			  $(_self).find("li a").css("display","inline-block");
			  $(_self).find("li span").css("display","inline-block");
			  $(_self).find("li a").height(23);
        $(_self).find("li span").height(23);
			  $(_self).find("li").each(function(e){
			       var _tablength=$(this).find("span").width()+6;
			       $(this).width(_tablength);
			  });
			   $(_self).find("li").css("margin-left","1px");
			   $(_self).find("li:eq("+settings.showTab+")").addClass("active");
			   $(_self).find("div").addClass("xt-tab-content");
			   var _ajaxTab=$("<div id='xt-ajaxTab' class='xt-tab-content'></div>").appendTo(_self);
			   $(_ajaxTab).hide();
			   $(_self).find("div").hide();
			   $(_self).find("div").css("margin-top","0.9px");
			   $(_self).find("div").css("padding","5px");
			   $(_self).find("div").width(settings.width-12);
			   $(_self).find("div").height(settings.height-34);
			   $(_self).find("div:eq("+settings.showTab+")").show();
			   $(_self).find("li").bind("click",tab_click);
        
	 }
	 function tab_click(){
	   	if(!$(this).hasClass("active")){
	   	   $(this).parent().find(".active").removeClass("active");
	   	   $(this).addClass("active");
	   	   $(this).parents(".xt-tab").find("div").hide();
	   	   if ($($(this).find("a").attr("href")).is("div")) $(this).parents(".xt-tab").find($(this).find("a").attr("href")).show();
	   	   else{
	   	       $("#xt-ajaxTab").show();
	   	       var $load = $('<div></div>').appendTo("#xt-ajaxTab");
	   	       
	   	       $load.width($("#xt-ajaxTab").innerWidth());
	   	       $load.height($("#xt-ajaxTab").innerHeight());
	   	       $load.addClass('xt');
	   	       $load.addClass('xt-loading');
	   	       
	   	      $("#xt-ajaxTab").load($(this).find("a").attr("href"),function(){
	   	           $load.remove();
	   	      });
	   	   }
	   	   
	   	   return false;
	   	}   
	 }
	}
	
	$.fn.tab.defaults = {
      showTab:1,
      width:300,
      height:100
	};
})(jQuery);
/*!
 * AtOfis 1.0.1
 *
 * Copyright (c) 2010 Kuan Yaw, Liew (http://www.atofis.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.atofis.com/
 */

(function($){
  var isNumberOnly;
  var isDateOnly;
  var isRequired;
  var settings;
	$.fn.textbox=function(options){
		
		 
	    settings = $.extend({}, $.fn.textbox.defaults, options);
	    //$.data(this,'watermark',settings.watermark);
	    isNumberOnly=settings.number;
	    isDateOnly=settings.date;
	    isRequired=settings.required;
	    //$.data($(this),'errormsg',settings.errormsg);
	     
	   	$.textbox._create(this);
		}
		
  $.textbox={
		  _create: function (_self){
		    
		  if(!$(_self).hasClass("xt"))$(_self).addClass("xt");
			if(!$(_self).hasClass("xt-textbox")) $(_self).addClass("xt-textbox");
      
      var   _pass = $(_self);
			if(settings.watermark!=''){
			      if($(_self).attr('type')=='password'){
	                 //tranform my self to become text
			        $(_self).before("<input id='decoy' value='"+settings.watermark+"' style='"+$(_self).attr('style')+"' class='"+$(_self).attr('class')+" xt-watermark' haspassword='true' readonly='true' />");
			        var _decoy = $(_self).prev();
			        $(_decoy).css('margin','2px');
			        $(_decoy).bind('focus',$.textbox.watermark_focus);
              $(_self).bind('blur',{watermark:settings.watermark},$.textbox.watermark_blur);
 
			         //_self=$(_decoy);
			         
			         $(_pass).hide();     
			      }else{
			        $(_self).addClass('xt-watermark');
              $(_self).val(settings.watermark); 
                  
              $(_self).bind('focus',$.textbox.watermark_focus);
              $(_self).bind('blur',{watermark:settings.watermark},$.textbox.watermark_blur);
              
			      }
			    
		        
			}
			
	   if(isDateOnly){
         $dropdown=$("<div></div>").appendTo("body");
         $wrapper=$("<div></div>");
        

         $wrapper.addClass('xt');
         $wrapper.addClass('xt-textbox');
         $wrapper.height($(_self).innerHeight());
        
         $wrapper.css('display','inline-block');
         $wrapper.attr('style',$(_self).attr('style'));
         $wrapper.css('padding','0px');
         $(_self).wrap($wrapper);
         $(_self).attr('style','none');
         $(_self).css('background','');
         $(_self).css('margin','0px');
         $(_self).css('background-color','transparent');
         $(_self).css('border','none');
         
         
         $dropdown.calendar({showtodaybutton:true,local:settings.datelocal,type:'dropdown',target:$(_self)});
         
         $(_self).attr('localdate',settings.datelocal);
         $select = $("<button><span style='width:9px;height:6px;display:inline-block'>&nbsp;</span></button>");
         $select.button();
         $select.height($(_self).outerHeight());
         $select.css("margin","0px");
         $(_self).after($select);
         $(_self).css("margin-right","0px");
         $select.css("margin-left","0px");
         $select.bind("click",{dropdown:$dropdown,target:_self},$.textbox._dropdownCalendar);
         
      }

			  if(isNumberOnly || isRequired || isDateOnly){
			     $(_self).bind("change blur",{setting:settings},$.textbox._validate);
			     if(isNumberOnly) $(_self).css("text-align","right");
		    }
		    
			  $(_self).parents("form").bind('submit',$.textbox.custom_submit);
			   
		  },
	
		   _validate:function(event){
		    var _self=$(this);
		    var hasError = false;  
		    var setting = event.data.setting;
		    var errormsg = event.data.setting.errormsg;
        isNumberOnly=setting.number;
        isDateOnly=setting.date;
        isRequired=setting.required;
		   
		   if(isDateOnly){
		      var val = "";
          if(!$(_self).hasClass('xt-watermark'))  val =$(_self).val();
    
            if(val!=""){
                 if (!$.calendar.isdate(val, $(_self).attr('localdate'))) {
              
              hasError=true;
              $.textbox._showerror($(this).parent(),errormsg.date);
             }
          }
         }  
       if(isNumberOnly){
			   	
			   	if (!$.textbox._isnumber($(_self).val(), _self)) {
			   		hasError=true;
			   	   
				 		$.textbox._showerror(this,errormsg.number);
    				 }

			   }	
			 
       if(isRequired){ 
         var val = "";
         if(!$(_self).hasClass('xt-watermark'))  val =$(_self).val();
         if (val=="" ) {
          hasError=true;
       
        $.textbox._showerror(this, errormsg.required);
         }
       }    
		 	if(hasError) return false;
		 	if(isDateOnly) _self=$(_self).parent();
		 	if($(_self).hasClass("error")){
		 	    
			    $(_self).removeClass("error");
			    var err=$(_self).next('.xt-error-img');
			    if($(_self).attr('type')=='password') $(_self).prev('.xt-watermark').removeClass("error");
			    $(err).tooltip("destroy");
			    $(err).remove();
		 	}
	
		  },
     watermark_focus: function(event){
               
               $.textbox._clearWatermark(this);
               return false;
      },

     watermark_blur:function(event){
         
          if($(this).val()==""){
                     if($(this).attr("type")=="password"){
                 
                $(this).prev().show();
                $(this).hide();
                  return false;
              }  
             $(this).addClass('xt-watermark');
             $(this).val(event.data.watermark);
          }
           
          return false;
      },
  	 custom_submit:function(event){
  		  
		 //revalidate all input
  	 $(this).find('input').trigger('change');
		 if($(this).find('.error').size() > 0) return false;
		 
		 $(this).find('.xt-watermark').each(function(){
			 $(this).val('');
		 });

	  },
	  _showerror:function(elem,text,decoy){
	    if($(elem).hasClass("error")) return false;	//Get out if you have error
		$(elem).addClass("error");
		if($(elem).attr('type')=='password') $(elem).prev('.xt-watermark').addClass("error");
		$(elem).after("<span style='width:18px;display:inline-block;' class='xt-error-img'>&nbsp;</span>");
		$(elem).next().css("margin",$(elem).css("margin"));
		$(elem).next().css("margin-left","1px");
		$(elem).next().css("padding",$(elem).css("padding"));
		$(elem).next().height($(elem).height());
		$(elem).next().tooltip({text:text});
	},
	  _isnumber: function(value, elemen){return /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);},
	  
	  _clearWatermark:function(elem){
	        if($(elem).hasClass('xt-watermark')){
	          if($(elem).attr("haspassword")){     
                $(elem).next().show();
                $(elem).next().focus();
                $(elem).hide();
	          }else{
	            $(elem).removeClass('xt-watermark');
                $(elem).val("");  
	          }
            
          }
	  },
	  _dropdownCalendar:function(event){
	    var $dropdown = $(event.data.dropdown);
	    var $target = $(event.data.target);
	   
	    $dropdown.show();
	  
	    	    if($(window).height()<($target.offset().top+$dropdown.height())){
	       $dropdown.css("top",$target.offset().top-$dropdown.outerHeight()); 
	    }else{
	       $dropdown.css("top",$target.offset().top+$target.outerHeight());
	    }    
	    $dropdown.css("left",$target.offset().left);
	      $dropdown.hide();
	     $dropdown.calendar("show");
	    return false;
	  },
	}
	$.fn.textbox.defaults = {
	     watermark:'',
	     number:false,
	     date:false,
	     datelocal:'m/d/y',
	     required:false,
	     errormsg:{required:'Input value required.',number:'Only numeric is accepted.',date:'Invalid! Date.'},
	};
})(jQuery);/*!
 * AtOfis 1.0.1
 *
 * Copyright (c) 2010 Kuan Yaw Liew (http://www.atofis.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.atofis.com/
 */


(function($){
	$.fn.toolbar=function(options){
		
	    settings = $.extend({}, arguments.callee.defaults, options);
	   	_create(this);
		  function _create(_self){
	  	   $(_self).addClass("xt");
			  $(_self).addClass("xt-toolbar");
			  $(_self).height(21);
        $(_self).css('line-height','16px');
        $(_self).css('vertical-align','middle');
        $(_self).css('white-space','nowrap');
        $(_self).css("margin","2px");
        $(_self).find(".xt-normal-button").addClass("xt-tool-button");
        $(_self).find(".xt-normal-button").css("height","18px");          
        $(_self).children().css("float","left");
        
			  $(_self).find("button").addClass("xt-tool-button");
			  $(_self).find("button").css("height","18px");  
			  (_self).find("input").height(14);  
			  $(_self).find(".seperator").addClass('xt-seperator');
        $(_self).find(".seperator").css("float",'left');
			  $(_self).find(".seperator").html("&nbsp;");
			  $(_self).find(".seperator").height(20);
			  
			  /* if(settings.docking!='none'){
		      $(_self).docking(settings.docking);
         
          if(settings.width=='auto'){
             
             $(_self).width($('body').innerWidth()*99.4/100);
          
          }
        }   */
        
          $(_self).parent().triggerHandler('resize');
          
		  }
         
	}
  $.fn.toolbar.defaults = {
      width:'auto',
      docking:'none'
  };
})(jQuery);
/*!
 * AtOfis 1.0.1
 *
 * Copyright (c) 2010 Kuan Yaw Liew (http://www.atofis.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.atofis.com/
 */


(function($){
	$.fn.tooltip=function(options){
		
		if(options=="destroy"){
		  _destory(this);
		  return false;
		}
		
	   settings = $.extend({}, arguments.callee.defaults, options);
     
     
          
		_create(this);

		  function _create(_self){
		   var tip=$("<div class='xt xt-tooltip' style='position:absolute;z-index:50000;'>"+settings.text+"</div>").appendTo("body");

			 $(_self).bind("mouseover",{tip:tip,owner:_self},_showTooltip);
       $(_self).bind("mouseout",{tip:tip,owner:_self},_closeTooltip);
   
	
		  }
		  function _destory(_self){
  
         $(_self).trigger("mouseout",[true]);
         return false;
		    
		  }
		  function _showTooltip(event){
		       var _tip =event.data.tip;
		       var _owner = event.data.owner;
	         var ctop = $(_owner).offset().top;
           var cheight = $(_owner).height();
           var cwidth = $(_owner).width();
           var cleft = $(_owner).offset().left;
      
             $(_tip).css("top",ctop+cheight+16+"px");
             $(_tip).css("left",cleft+cwidth+"px");
           	            
             $(_tip).show();
             return false;         		  	       
		  }
		  function _closeTooltip(event,calldestroy){
          
		         if(calldestroy){
		          var _tip =event.data.tip;
		          var _owner = event.data.owner;
		          $(_tip).remove();
		           $(_owner).unbind("mouseover",_showTooltip);
               $(_owner).unbind("mouseout",_closeTooltip);   
		           return false;
		         }
             $(event.data.tip).hide();    
             return false;     		  	       
		  }
	}

	$.fn.tooltip.defaults = {
	     text:""
	};
})(jQuery);