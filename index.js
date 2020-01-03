const setting = require('./setting')
const fundCrawler = require('./src/fundCraw.js')
const stockCrawler = require('./src/stockCraw.js')
const print = require('./src/printer')
// 遍历setting配置
// 查找对应
// 通过printer输入

async function app () {
	const { funds, stocks } = setting
	// 基金
	if (funds && funds.length > 0) {
		console.log('---------- fund begin ----------')
		for (let fundItem of funds) {
			const res = await fundCrawler(fundItem.code)
			if (res) print(fundItem.code, res) // TODO: printer
			else console.log('[err]: 获取基金数据失败 - ', fundItem.code)
		}
	}

	// 股票
	if (stocks && stocks.length > 0) {
		console.log('---------- stock begin ----------')
		for (let stockItem of stocks) {
			const res = await stockCrawler(stockItem.code)
			if (res) print(stockItem.code, res) // TODO: printer
			else console.log('[err]: 获取股票数据失败 - ', stockItem.code)
		}
	}
}

app()
