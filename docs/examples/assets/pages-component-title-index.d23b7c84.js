import{d as e,u as t,o as a,c as i,w as s,a as l,x as n,B as o,b as d,y as c,C as p,D as r,E as u,i as g,r as f,e as _,m as y,p as h,S as x}from"./index-7053ad66.js";import{_ as m}from"./_plugin-vue_export-helper.1b428a4d.js";let H="",v=/MicroMessenger/i.test(window.navigator.userAgent),w="miniprogram"===window.__wxjs_environment;H="undefined"!=typeof wx&&w&&v?"WeixinWebview":"undefined"!=typeof wx&&!w&&v?"WeixinH5":"undefined"!=typeof my&&my.getEnv?"AlipayH5":"Browser";const b=H,k=m(e({name:"UQTitle",props:{title:{type:String,default:""},fixed:{type:Boolean,default:!0},backicon:{type:String,required:!0}},setup(e,{expose:f}){let _=()=>{r().length>1&&uni.navigateBack({delta:1})};return f({getHeight:()=>uni.getSystemInfoSync().screenHeight-o.paddingTop-o.titleHeight}),(r,f)=>{const y=u,h=g;return"WeixinH5"!=t(b)?(a(),i(h,{key:0,class:"title-container",style:n({paddingTop:t(o).paddingTop+"px",height:t(o).titleHeight+"px"})},{default:s((()=>[l(h,{class:"title",style:n({paddingTop:t(o).paddingTop+"px",lineHeight:t(o).titleHeight+"px",position:e.fixed?"fixed":"absolute"})},{default:s((()=>[l(h,{class:"left",onClick:f[0]||(f[0]=e=>t(_)())},{default:s((()=>[l(y,{src:e.backicon,style:n({height:t(o).titleHeight+"px",width:t(o).titleHeight+"px",verticalAlign:"bottom"}),mode:"aspectFit"},null,8,["src","style"])])),_:1}),d(" "+c(e.title),1)])),_:1},8,["style"])])),_:1},8,["style"])):p("",!0)}}}),[["__scopeId","data-v-eac0eb5f"]]),T=m(e({__name:"index",setup(e){let o=f(0),c=f();return _((()=>{o.value=c.value.getHeight()})),(e,p)=>{const r=y(h("ui-title"),k),f=g,_=u,m=x;return a(),i(f,null,{default:s((()=>[l(r,{ref_key:"mytitleRef",ref:c,title:"这是标题",backicon:"/static/images/backBlack.png"},null,512),l(m,{"scroll-y":"true",style:n({height:t(o)+"px"})},{default:s((()=>[l(f,{class:"container"},{default:s((()=>[l(f,{class:"title"},{default:s((()=>[d(" 《茅屋为秋风所破歌》 ")])),_:1}),l(f,{class:"author"},{default:s((()=>[d("作者：【唐】杜甫")])),_:1}),l(f,{class:"content"},{default:s((()=>[d(" 八月秋高风怒号，卷我屋上三重茅。茅飞渡江洒江郊，高者挂罥长林梢，下者飘转沉塘坳。 ")])),_:1}),l(f,{class:"content"},{default:s((()=>[d(" 南村群童欺我老无力，忍能对面为盗贼。公然抱茅入竹去，唇焦口燥呼不得，归来倚杖自叹息。 ")])),_:1}),l(f,{class:"content"},{default:s((()=>[d(" 俄顷风定云墨色，秋天漠漠向昏黑。布衾多年冷似铁，娇儿恶卧踏里裂。床头屋漏无干处，雨脚如麻未断绝。自经丧乱少睡眠，长夜沾湿何由彻！ ")])),_:1}),l(f,{class:"content"},{default:s((()=>[d(" 安得广厦千万间，大庇天下寒士俱欢颜！风雨不动安如山。呜呼！何时眼前突兀见此屋，吾庐独破受冻死亦足！ ")])),_:1}),l(_,{class:"img",src:"./static/images/thatched-cottage.jpeg"})])),_:1})])),_:1},8,["style"])])),_:1})}}}),[["__scopeId","data-v-438d9a46"]]);export{T as default};