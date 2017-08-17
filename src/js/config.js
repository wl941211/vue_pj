const domain = 'http://139.199.192.48:8888';
export default {
    //配置图片路径
    imgdomain:'http://ofv795nmp.bkt.clouddn.com/',
    domain:domain,
    newlist: domain+'/api/getnewslist',
    newdetails:domain+'/api/getnew/',
    commentsubmit:domain+'/api/postcomment/',
    commentlist:domain+'/api/getcomments/',
    //配置图片分享的地址
    imgsharelist:domain+'/api/getimages/',
    imgsharenav:domain+'/api/getimgcategory',
    imgdetialinfo:domain+'/api/getimageInfo/',
    imgmin:domain+'/api/getthumimages/',

    //配置商品购买的地址
    goodlist:domain+'/api/getgoods/',
    goodimg:domain+'/api/goods/getdesc/',//商品图文介绍
    goodinfo:domain+'/api/goods/getinfo/',//商品价格及其他信息

    //配置购物车地址
    buycars:domain+'/api/goods/getshopcarlist/'
}