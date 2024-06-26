let barHeight = uni.getSystemInfoSync().statusBarHeight || 0, titleHeight = 0;

// #ifndef APP-PLUS || H5
titleHeight = (uni.getMenuButtonBoundingClientRect().top - barHeight) * 2 + uni.getMenuButtonBoundingClientRect().height;
// #endif

// #ifdef APP-PLUS || H5
titleHeight = uni.upx2px(80);
// #endif

export default {
	// 状态栏高度
	paddingTop: barHeight,

	// 标题栏高度
	titleHeight
};