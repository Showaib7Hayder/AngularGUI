"use strict";(self.webpackChunkAngularGUI=self.webpackChunkAngularGUI||[]).push([[592],{993:(P,m,l)=>{l.r(m),l.d(m,{DataModule:()=>R});var c=l(895),C=l(322),e=l(256),i=l(751);class f{}let u=(()=>{class n{constructor(){this.defaultCSVParserConfig={header:!0,delimiter:",",encoding:"utf8"}}parse(r,t){return t={...this.defaultCSVParserConfig,...t},new i.y(o=>{try{let d=null;if(this.isCSVFile(r)){const g=new FileReader;g.readAsText(r,t.encoding),g.onload=()=>{const h=g.result.trim();if(h){const p=this.csvStringToArray(h,t.delimiter),_=this.getHeaderArray(p);d=this.getDataRecordsArrayFromCSVFile(p,_.length,t),o.next(d)}else o.next([]);o.complete()},g.onerror=()=>{this.badCSVDataFormatErrorHandler(o)}}else this.notCSVFileErrorHandler(o)}catch{this.unknownCSVParserErrorHandler(o)}})}csvStringToArray(r,t){const a=new RegExp(`(\\${t}|\\r?\\n|\\r|^)(?:"((?:\\\\.|""|[^\\\\"])*)"|([^\\${t}"\\r\\n]*))`,"gi");let o=a.exec(r);const d=[[]];for(;o;){o[1].length&&o[1]!==t&&d.push([]);const g=o[2]?o[2].replace(new RegExp('[\\\\"](.)',"g"),"$1"):o[3];d[d.length-1].push(g),o=a.exec(r)}return d}getDataRecordsArrayFromCSVFile(r,t,a){const o=[],d=r[0];for(let h=a.header?1:0;h<r.length;h++){const p=r[h];if(p.length===t&&a.header){const _={};for(let v=0;v<p.length;v++)_[d[v]]=null==p[v]?"":p[v].trim();o.push(_)}else o.push(p)}return o}isCSVFile(r){return r.name.toLowerCase().endsWith(".csv")}getHeaderArray(r){const t=r[0],a=[];for(const o of t)a.push(o);return a}notCSVFileErrorHandler(r){const t=this.errorBuilder("NOT_A_CSV_FILE","Selected file is not a csv File Type.",2);r.error(t)}unknownCSVParserErrorHandler(r){const t=this.errorBuilder("UNKNOWN_ERROR","Unknown error. Please refer to official documentation for library usage.",404);r.error(t)}badCSVDataFormatErrorHandler(r){const t=this.errorBuilder("BAD_CSV_DATA_FORMAT","Unable to parse CSV File.",1);r.error(t)}errorBuilder(r,t,a){const o=new f;return o.type=r,o.message=t,o.code=a,o}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),F=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[u]}),n})();var x=l(865);let S=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-placeholder"]],decls:10,vars:0,consts:[[1,"ui","placeholder"],[1,"image","header"],[1,"line"],[1,"paragraph"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"div",2)(3,"div",2),e.qZA(),e.TgZ(4,"div",3),e._UZ(5,"div",2)(6,"div",2)(7,"div",2)(8,"div",2)(9,"div",2),e.qZA()())}}),n})();function T(n,s){if(1&n&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&n){const r=s.$implicit;e.xp6(1),e.hij(" ",r," ")}}function A(n,s){if(1&n&&(e.TgZ(0,"tr"),e.YNc(1,T,2,1,"td",1),e.qZA()),2&n){const r=s.$implicit;e.xp6(1),e.Q6J("ngForOf",r)}}let b=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-table"]],inputs:{csvRecords:"csvRecords"},decls:6,vars:1,consts:[[1,"ui","very","basic","collapsing","celled","table"],[4,"ngFor","ngForOf"]],template:function(r,t){1&r&&(e._UZ(0,"br")(1,"br"),e.TgZ(2,"div",0)(3,"table")(4,"tbody"),e.YNc(5,A,2,1,"tr",1),e.qZA()()()),2&r&&(e.xp6(5),e.Q6J("ngForOf",t.csvRecords))},dependencies:[c.sg]}),n})();const U=["fileImportInput"];function M(n,s){1&n&&(e.ynx(0),e._UZ(1,"app-placeholder"),e.BQk())}const D=[{path:"",component:(()=>{class n{constructor(r){this.ngxCsvParser=r,this.visible=!0,this.header=!1}ngOnInit(){}fileChangeListener(r){this.ngxCsvParser.parse(r.srcElement.files[0],{header:this.header,delimiter:",",encoding:"utf8"}).pipe().subscribe({next:a=>{console.log("Result",a),this.csvRecords=a},error:a=>{console.log("Error",a)}}),this.visible=!1}}return n.\u0275fac=function(r){return new(r||n)(e.Y36(u))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-upload-csv-file"]],viewQuery:function(r,t){if(1&r&&e.Gf(U,5),2&r){let a;e.iGM(a=e.CRH())&&(t.fileImportInput=a.first)}},decls:17,vars:2,consts:[[4,"ngIf"],[1,"csv-file-chooser-section"],[1,"ui","big","basic","icon","buttons"],[1,"ui","button"],["for","csvFileUpload"],["type","file","name","File Upload","id","csvFileUpload","accept",".csv",3,"change"],["fileImportInput",""],[1,"upload","icon"],[3,"csvRecords"]],template:function(r,t){1&r&&(e.TgZ(0,"app-divider"),e._uU(1," Upload CSV File "),e.qZA(),e.YNc(2,M,2,0,"ng-container",0),e._UZ(3,"br")(4,"br"),e.TgZ(5,"div",1)(6,"div",2)(7,"button",3)(8,"label",4)(9,"input",5,6),e.NdJ("change",function(o){return t.fileChangeListener(o)}),e.qZA(),e._uU(11," CSV"),e._UZ(12,"i",7),e.qZA()()(),e._UZ(13,"br")(14,"br"),e.TgZ(15,"div"),e._UZ(16,"app-table",8),e.qZA()()),2&r&&(e.xp6(2),e.Q6J("ngIf",t.visible),e.xp6(14),e.Q6J("csvRecords",t.csvRecords))},dependencies:[c.O5,x.X,S,b],styles:["input[_ngcontent-%COMP%]{display:none}label[_ngcontent-%COMP%]{cursor:pointer}.csv-file-chooser-section[_ngcontent-%COMP%]{text-align:center}button[_ngcontent-%COMP%]:hover{background-color:#b8860b}"]}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[C.Bz.forChild(D),C.Bz]}),n})();var E=l(466);let R=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,Z,E.m,F]}),n})()},865:(P,m,l)=>{l.d(m,{X:()=>e});var c=l(256);const C=["*"];let e=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(u){return new(u||i)},i.\u0275cmp=c.Xpm({type:i,selectors:[["app-divider"]],ngContentSelectors:C,decls:3,vars:0,consts:[[1,"ui","divider"]],template:function(u,y){1&u&&(c.F$t(),c.TgZ(0,"h1"),c.Hsn(1),c.qZA(),c._UZ(2,"div",0))}}),i})()},466:(P,m,l)=>{l.d(m,{m:()=>e});var c=l(895),C=l(256);let e=(()=>{class i{}return i.\u0275fac=function(u){return new(u||i)},i.\u0275mod=C.oAB({type:i}),i.\u0275inj=C.cJS({imports:[c.ez]}),i})()}}]);