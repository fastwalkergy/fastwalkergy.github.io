// 将旧域名和新域名存入变量中
var oldDomain = "https://fastwalkergy.github.io/";
var newDomain = "https://fshd-studio.github.io/";

// 获取当前页面的 URL
var currentUrl = window.location.href;

// 如果当前 URL 包含旧域名，则替换为新域名
if (currentUrl.indexOf(oldDomain) !== -1) {
  var newUrl = currentUrl.replace(oldDomain, newDomain);
  
  // 自动重定向到新的 URL
  window.location.replace(newUrl);
}
