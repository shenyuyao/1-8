const express = require('express');
var app = express();
const jade = require('jade');

app.set('view engine', 'ejs');
app.use('/', express.static('public'))

app.get('/', function(req, res) {
	res.render('index.jade', {
		title: "机械战警详情页",
		movies: [{
				_id: 1,
				title: '机械战警',
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},
			{
				_id: 2,
				title: '机械战警2',
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},
			{
				_id: 3,
				title: '机械战警3',
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			}
		]
	})
})
app.get('/detail/:id', function(req, res) {
	res.render('detail.jade', {
		title: "机械战警detail",
		movie: {
			director: '帕迪',
			country: '美国',
			year: 2014,
			language: '英文',
			flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary: '《机械战警》是由何塞·帕迪里亚执导，乔尔·金纳曼、塞缪尔·杰克逊、加里·奥德曼等主演的一部科幻电影，' +
				'改编自1987年保罗·范霍文执导的同名电影。影片于2014年2月12日在美国上映，2014年2月28日在中国大陆上映。影片的故事背景与原版基本相同，' +
				'故事设定在2028年的底特律，男主角亚历克斯·墨菲是一名正直的警察，被坏人安装在车上的炸弹炸成重伤，为了救他，OmniCorp公' +
				'司将他改造成了生化机器人“机器战警”，代表着美国司法的未来。'
		}
	})
})
app.get('/admin/list', function(req, res) {
	res.render('list.jade', {
		title: "后台列表",
		movies: [{
				_id: 1,
				title: '机械战警',
				director: '何塞帕迪利亚',
				year: 2014,
				country: '美国',
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},
			{
				_id: 2,
				title: '机械战警',
				director: '何塞帕迪利亚',
				year: 2014,
				country: '美国',
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},
			{
				_id: 3,
				title: '机械战警',
				director: '何塞帕迪利亚',
				year: 2014,
				country: '美国',
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			}
		]
	})
})
app.get('/admin/movie', function(req, res) {
	res.render('movie.jade', {
		title: "添加列表表单"
	})
})
app.listen(3000);