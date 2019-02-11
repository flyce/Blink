import { config } from '../config';

const tips = {
    1: '抱歉，出现了一个错误',
    1005: 'appkey无效',
    3000: '期刊不存在',

};

class HTTP {
    request(params) {
        let { url, data, method } = params;
        if(!method) {
            method = "GET"
        }
        wx.request({
            url: config.url + url,
            method,
            data,
            header: {
                'content-type': 'application/json',
                'appkey': config.appkey
            },
            success: res => {
                let code = res.statusCode.toString();
                if(code.startsWith('2')) {
                    params.success && params.success(res.data);
                } else {
                    this._show_error(res.data.error_code)
                }
            },
            fail: err => {
                this._show_error(1)
            }
        });
    }

    // 私有方法
    _show_error(errorCode) {
        if(!errorCode) {
            errorCode = 1;
        }
        wx.showToast({
            title: tips[errorCode],
            icon: 'none',
            duration: 2000
        });
    }
}

export { HTTP };