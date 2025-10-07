// ---------- 工具：把姓名轉成安全路徑 ----------
function sanitizeName(name) {
  return (name || "")
    .trim()
    .replace(/[^\p{L}\p{N}\-_ ]/gu, "") // 移除奇怪符號（含全形）
    .replace(/\s+/g, "_");              // 空白 -> 底線
}

// ---------- Firebase ESM ----------
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, getMetadata } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-storage.js";

// 初始化
const firebaseConfig = {
  apiKey: "AIzaSyAdS--elaCvzQOAPhMDPByLoTRXGibC9Rc",
  authDomain: "octo-7c190.firebaseapp.com",
  projectId: "octo-7c190",
  storageBucket: "octo-7c190.appspot.com",
  messagingSenderId: "351002657731",
  appId: "1:351002657731:web:9db320ed4723e74a2a7376",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// ---------- 建立上傳區 ----------
const mount = document.getElementById("uploadSection");
if (mount) {
  mount.innerHTML = `
    <hr>
    <h3>上傳本週專案</h3>
    <div class="upload-card">
      <input type="file" id="fileInput" />
      <button id="uploadBtn" class="btn-primary">上傳到雲端</button>
      <p id="uploadMsg" class="muted" style="margin-top:8px;"></p>
    </div>
  `;
  const uploadBtn = mount.querySelector("#uploadBtn");
  if (uploadBtn) uploadBtn.addEventListener("click", uploadFile);
}

// ---------- 上傳檔案 ----------
async function uploadFile() {
  const nameInput = document.getElementById("searchName"); // ★ 加回這行
  const rawName = (nameInput?.value || "");
  const studentName = sanitizeName(rawName);

  const file = document.getElementById("fileInput")?.files[0];
  const msg = document.getElementById("uploadMsg");
  if (!msg) return;

  if (!studentName) { msg.textContent = "請輸入學生姓名"; return; }
  if (!file) { msg.textContent = "請選擇要上傳的檔案"; return; }

  const path = `uploads/${studentName}/${Date.now()}_${file.name}`;
  const storageRef = ref(storage, path);

  msg.textContent = "上傳中...";
  try {
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    msg.innerHTML = `上傳成功！<br><a href="${url}" target="_blank">開啟檔案</a>`;

    // 上傳後自動刷新該生的上傳紀錄
    const box = document.getElementById('history');
    if (box) {
      const list = await listUploadsFor(studentName);
      renderHistory(list);
    }
  } catch (err) {
    console.error(err);
    msg.textContent = "上傳失敗：" + (err?.message || err);
  }
}

// ---------- 查詢上傳紀錄 ----------
async function listUploadsFor(studentNameRaw) {
  const studentName = sanitizeName(studentNameRaw);
  const dirRef = ref(storage, `uploads/${studentName}`);
  const result = await listAll(dirRef);
  const items = await Promise.all(result.items.map(async (itemRef) => {
    const [url, meta] = await Promise.all([getDownloadURL(itemRef), getMetadata(itemRef)]);
    return { name: itemRef.name, url, updated: meta.updated, size: meta.size };
  }));
  items.sort((a,b) => new Date(b.updated) - new Date(a.updated));
  return items;
}

function prettyBytes(bytes) {
  if (!bytes) return '0 B';
  const units = ['B','KB','MB','GB','TB'];
  const i = Math.floor(Math.log(bytes)/Math.log(1024));
  return (bytes/Math.pow(1024,i)).toFixed(1) + ' ' + units[i];
}

function renderHistory(list) {
  const box = document.getElementById('history');
  if (!box) return;
  if (!list.length) { box.textContent = '（目前沒有上傳紀錄）'; return; }
  box.innerHTML = list.map(item => `
    <div class="history-item">
      <div>
        <div><strong>${item.name}</strong></div>
        <small>${new Date(item.updated).toLocaleString()}・${prettyBytes(item.size)}</small>
      </div>
      <div><a href="${item.url}" target="_blank" class="btn-primary" style="padding:6px 10px;">下載</a></div>
    </div>
  `).join('');
}

document.getElementById('searchButton')?.addEventListener('click', async () => {
  const name = (document.getElementById('searchName')?.value || '').trim();
  const box = document.getElementById('history');
  if (!box) return;
  if (!name) { box.textContent = '請先輸入學生姓名'; return; }
  box.textContent = '查詢中...';
  try {
    const list = await listUploadsFor(name);
    renderHistory(list);
  } catch (e) {
    console.error(e);
    box.textContent = '查詢失敗：' + (e?.message || e);
  }
});

// ---------- 比特狐動畫 ----------
document.getElementById("bytefox")?.addEventListener("click", function() {
  let fox = this;
  fox.style.animation = "jump 1.5s ease-in-out";
  setTimeout(() => {
    fox.style.animation = "none"; void fox.offsetWidth;
    fox.style.animation = "jump 1.5s ease-in-out";
    setTimeout(() => {
      fox.style.animation = "float 3s infinite alternate ease-in-out";
      window.open("https://www.youtube.com/@ByteFox-CodingStudio", "_blank");
    }, 1500);
  }, 1500);
});
