import Page from './page.js';


class ScapePage extends Page {
    
    open(){
        return super.open('https://www.lazada.com.ph/shop-furniture/?page=1&spm=a2o4l.home.cate_7.3.4cfdca18yXsFJ1');
    }

    pageNumber(page){
        return $(`//li[@title='${page}']`)
    }
}

export default new ScapePage();