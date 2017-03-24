var coco=coco||{};
coco.Coco=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	s.look.addEventListener("onMouseUp",function (e) {
		alert("ssss");
	})
	
};
F2xExtend(coco.Coco,F2xContainer);
coco.Coco.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d1=new coco.F2xAuto_0();
	_d1.name="look";
	s.look=_d1;
	Flash2x.d(_d1,{x:178,y:399});
	var _d0=Flash2x.s({type:0,data:"A/n8uMA/PAAAMAAAA5dMg/PAAAg"},null,{type:0,color:"#000000",lineWidth:1});
	Flash2x.d(_d0,{x:380.5,y:583});
	s.addChild(_d0);
	s.addChild(_d1);
	//f2x_auto_created_init_end
	
};
