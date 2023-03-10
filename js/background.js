console.log('juejinhelper-background')
//要在manifest.json 中设置为page_action才生效
chrome.runtime.onInstalled.addListener(function(){
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					// 只有打开掘金才显示pageAction
					new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'juejin.com'}})
				],
				actions: [new chrome.declarativeContent.ShowPageAction()]
			}
		]);
	});
});
