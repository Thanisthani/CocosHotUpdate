System.register("chunks:///_virtual/config",["./ImageScreenLogic.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/ImageScreenLogic.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,i,c,n,o;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.initializerDefineProperty},function(e){i=e.cclegacy,c=e.Label,n=e._decorator,o=e.Component}],execute:function(){var l,s,a,u,p;i._RF.push({},"58134DJ6fxLDpNLSEW6LARP","ImageScreenLogic",void 0);const{ccclass:g,property:b}=n;e("ImageScreenLogic",(l=g("ImageScreenLogic"),s=b(c),l((p=t((u=class extends o{constructor(...e){super(...e),r(this,"label",p,this)}start(){this.label&&(this.label.string="This text is set by remote logic!")}}).prototype,"label",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),a=u))||a));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/config', 'chunks:///_virtual/config'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});