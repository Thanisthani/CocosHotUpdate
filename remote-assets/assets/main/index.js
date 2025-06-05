System.register("chunks:///_virtual/GameContent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,o,i,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.initializerDefineProperty},function(e){r=e.cclegacy,o=e.Label,i=e._decorator,l=e.Component}],execute:function(){var s,a,c,u,p;r._RF.push({},"bee3fBNNvJPPq9BU/XUHvI3","GameContent",void 0);const{ccclass:b,property:f}=i;e("GameContent",(s=b("GameContent"),a=f(o),s((p=t((u=class extends l{constructor(...e){super(...e),n(this,"label",p,this)}start(){this.label&&(this.label.string="This text is set by remote logic!")}}).prototype,"label",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),c=u))||c));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameContent.ts","./RemoteEntryLoader.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/RemoteEntryLoader.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,s,a,n,r,i,d,l,c,u,h,p,m,f,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.initializerDefineProperty},function(e){s=e.cclegacy,a=e.Node,n=e._decorator,r=e.Component,i=e.sys,d=e.assetManager,l=e.JsonAsset,c=e.Prefab,u=e.instantiate,h=e.SpriteFrame,p=e.Sprite,m=e.Texture2D,f=e.AudioClip,g=e.AudioSource}],execute:function(){var y,S,E,A,C;s._RF.push({},"bd9f3f3xF9NvYxZN8P+pIm1","RemoteEntryLoader",void 0);const{ccclass:R,property:b}=n;e("RemoteEntryLoader",(y=R("RemoteEntryLoader"),S=b(a),y((C=t((A=class extends r{constructor(...e){super(...e),o(this,"gameContent",C,this),this.REMOTE_ASSETS_URL="https://thanisthani.github.io/CocosHotUpdate/remote-assets",this.STORAGE_KEY="HotUpdateSearchPaths"}onLoad(){i.isNative?this.checkUpdate():this.loadLocalAssets()}checkUpdate(){d.loadRemote(`${this.REMOTE_ASSETS_URL}/entry.json`,l,((e,t)=>{if(e)return console.log("Remote assets not found, using local assets"),void this.loadLocalAssets();this.loadRemoteAssets()}))}loadRemoteAssets(){d.loadBundle(this.REMOTE_ASSETS_URL,((e,t)=>{if(e)return console.error("Failed to load remote bundle:",e),void this.loadLocalAssets();const o=[this.REMOTE_ASSETS_URL];i.localStorage.setItem(this.STORAGE_KEY,JSON.stringify(o)),this.loadEntry(t)}))}loadLocalAssets(){d.loadBundle("config",((e,t)=>{e?console.error("Failed to load local config bundle:",e):this.loadEntry(t)}))}loadEntry(e){e.load("entry",l,((t,o)=>{if(t)return void console.error("Failed to load entry config:",t);const s=o.json;switch(s.assetType){case"prefab":this.loadPrefab(e,s.mainAsset);break;case"sprite":this.loadSprite(e,s.mainAsset);break;case"texture":this.loadTexture(e,s.mainAsset);break;case"audio":this.loadAudio(e,s.mainAsset);break;default:console.error("Unknown asset type:",s.assetType)}}))}loadPrefab(e,t){e.load(t,c,((e,t)=>{if(e)return void console.error("Failed to load prefab:",e);this.gameContent&&this.gameContent.isValid&&this.gameContent.destroy();u(t).parent=this.node}))}loadSprite(e,t){e.load(t,h,((e,t)=>{if(e)return void console.error("Failed to load sprite:",e);this.gameContent&&this.gameContent.isValid&&this.gameContent.destroy();const o=new a("Sprite");o.addComponent(p).spriteFrame=t,o.parent=this.node}))}loadTexture(e,t){e.load(t,m,((e,t)=>{if(e)return void console.error("Failed to load texture:",e);this.gameContent&&this.gameContent.isValid&&this.gameContent.destroy();const o=new a("Texture"),s=o.addComponent(p),n=new h;n.texture=t,s.spriteFrame=n,o.parent=this.node}))}loadAudio(e,t){e.load(t,f,((e,t)=>{if(e)return void console.error("Failed to load audio:",e);this.gameContent&&this.gameContent.isValid&&this.gameContent.destroy();const o=new a("Audio");o.addComponent(g).clip=t,o.parent=this.node}))}}).prototype,"gameContent",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=A))||E));s._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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