import fetch from '@/utils/fetch';

export const coverImage = {
    //封面图片
    image(params) {
        return fetch({
            url: 'http://mxy.chinamobo.com/backend/index.php/service/questionnaire/Details/Image?platform=pcweb',
            method: 'get',
            params: params || {}
        });
    }
}
