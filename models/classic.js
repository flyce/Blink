import { HTTP } from '../utils/http';

class ClassicModel extends HTTP {
    getLatest(callback) {
        this.request({
            url: 'classic/latest',
            success: res => {
                callback(res);
                console.log(res.index, res);
                this._setLatestIndex(this._getKey(res.index));
                wx.setStorageSync(this._getKey(res.index), res);
            }

        });
    }

    getClassic(index, nextOrPrevious, callback) {
        const key = nextOrPrevious === 'next' ?
        this._getKey(index + 1) :  this._getKey(index -1);
        const classic = wx.getStorageSync(key);
        if(!classic) {
            this.request({
                url: `classic/${index}/${nextOrPrevious}`,
                success: res => {
                    wx.setStorageSync(this._getKey(res.index), res);
                    callback(res);
                }
    
            })
        } else {
            callback(classic);
        }
    }

    isFirst(index) {
        return index === 1 ? true : false;
    } 

    isLatest(index) {
        let latestIndex = this._getLatestIndex();
        return latestIndex === index ? true : false;
    }

    _setLatestIndex(index) {
        wx.setStorageSync('latest', index);
    }

    _getLatestIndex(index) {
        return wx.getStorageSync('latest');
    }

    _getKey(index) {
        const key = `classic-${index}`;
        return key;
    }
}

export { ClassicModel };