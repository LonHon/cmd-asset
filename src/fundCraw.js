const http = require('http')
const cheerio = require('cheerio')
const request = require('request')

const FUNDURL = 'http://fund.eastmoney.com/'

function getFundHtml (url) {
	return new Promise((resolve, reject) => {
		request({
			url,
      headers: {
          'Host': 'fund.eastmoney.com',
          'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36'
			}
		}, (err, res, body) => {
			if (err) return console.log('err: ', err)
			resolve(body)
		})
	})
}

function filterHtml (html, fundNum) {
	const $ = cheerio.load(html)
	if($('title').text().includes('页面未找到')) {
		console.log(`(${fundNum})页面未找到，请检查是否正确，或直接访问.`)
		return null
	}
	const d = {
    title: $('.fundDetail-tit').text(),
		// 当前估值
		now_gz: $('.fundInfoItem .dataItem01 #gz_gsz').text(),
		now_gz_per: $('.fundInfoItem .dataItem01 .fundZdf #gz_gszzl').text(),
		last_day_gz: $('.fundInfoItem .dataItem02 .dataNums span').eq(0).text(),
		last_day_gz_per: $('.fundInfoItem .dataItem02 .dataNums span').eq(1).text(),
	}
	return d
}

async function crawFundData (num) {
	try {
		const htmlDoc = await getFundHtml(FUNDURL + num + '.html')
		const formatData = filterHtml(htmlDoc, num)
		return formatData
	} catch (err) {
		console.log('craw err: ', err)
	}
}

module.exports = crawFundData
