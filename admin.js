console.log('kamel eltalib - apps');
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});





    // إنشاء الخلفية المعتمة
var overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(0,0,0,0.5)";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.zIndex = "9999";

// إنشاء مربع التنبيه
var alertBox = document.createElement("div");
alertBox.style.background = "#fff";
alertBox.style.width = "90%";
alertBox.style.maxWidth = "350px";
alertBox.style.padding = "20px";
alertBox.style.borderRadius = "12px";
alertBox.style.textAlign = "center";
alertBox.style.fontFamily = "Arial, sans-serif";
alertBox.style.margin = "10px";

// العنوان
var title = document.createElement("h2");
title.innerText = "يوجد تحديث جديد";
title.style.margin = "0 0 10px 0";
title.style.fontSize = "18px";

// النص
var message = document.createElement("p");
message.innerText = "يرجى تحديث التطبيق للحصول على أحدث الميزات.";
message.style.fontSize = "14px";
message.style.color = "#555";

// حاوية الأزرار
var buttonContainer = document.createElement("div");
buttonContainer.style.marginTop = "20px";
buttonContainer.style.display = "flex";
buttonContainer.style.gap = "10px";

// زر الإلغاء
var cancelBtn = document.createElement("button");
cancelBtn.innerText = "إلغاء";
cancelBtn.style.flex = "1";
cancelBtn.style.padding = "10px";
cancelBtn.style.border = "none";
cancelBtn.style.borderRadius = "8px";
cancelBtn.style.background = "#ddd";
cancelBtn.style.cursor = "pointer";

cancelBtn.onclick = function() {
  document.body.removeChild(overlay);
};

// زر التحديث
var updateBtn = document.createElement("button");
updateBtn.innerText = "تحديث الآن";
updateBtn.style.flex = "1";
updateBtn.style.padding = "10px";
updateBtn.style.border = "none";
updateBtn.style.borderRadius = "8px";
updateBtn.style.background = "#2196F3";
updateBtn.style.color = "#fff";
updateBtn.style.cursor = "pointer";

updateBtn.onclick = function() {
  window.open("https://example.com/update");
};

// تجميع العناصر
buttonContainer.appendChild(cancelBtn);
buttonContainer.appendChild(updateBtn);

alertBox.appendChild(title);
alertBox.appendChild(message);
alertBox.appendChild(buttonContainer);

overlay.appendChild(alertBox);

document.body.appendChild(overlay);
 
