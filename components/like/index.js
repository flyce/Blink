Component({
    properties: {
        like: {
            type: Boolean
        },
        count: {
            type: Number
        }
    },
    data: {
        // 数据绑定
        yesSrc: 'images/like.png',
        noSrc: 'images/like@dis.png'
    },
    methods: {
        onLike: function(event) {
            let { like, count } = this.properties;
            count = like ? count - 1 : count + 1;
            this.setData({
                like: !like,
                count
            });
        }
    }
});