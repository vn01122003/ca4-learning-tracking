const STORAGE_KEY = "ca4-study-tracker-v1";

const weeks = [
 ["Khảo sát và lập bản đồ tài liệu","Nắm toàn bộ phạm vi ôn tập và xác định điểm xuất phát",[
  "Phân tích hướng dẫn ôn thi; tách các nhóm kiến thức và yêu cầu cần đạt.",
  "Đọc mục lục giáo trình Lý luận chung về Nhà nước và pháp luật; lập danh sách chủ đề.",
  "Khảo sát Hiến pháp 2013 sửa đổi 2025 và tài liệu Hiến pháp qua các thời kỳ.",
  "Đọc cấu trúc Luật Ban hành văn bản quy phạm pháp luật 2025, sửa đổi 25/6/2025.",
  "Khảo sát Nghị quyết 27-NQ/TW và Nghị quyết 66-NQ/TW; ghi các chủ đề trọng tâm.",
  "Khảo sát Văn kiện Đại hội XIV, tập 1 và tập 2; lập danh sách phần liên quan.",
  "Hoàn thiện Master Syllabus; tự đánh giá đầu vào và lập danh sách câu hỏi còn thiếu."
 ]],
 ["Nguồn gốc, khái niệm và bản chất Nhà nước","Xây nền tảng lý luận chung về Nhà nước",[
  "Các quan điểm về nguồn gốc Nhà nước; điều kiện ra đời của Nhà nước.",
  "Khái niệm Nhà nước và các dấu hiệu đặc trưng.",
  "Bản chất Nhà nước; tính giai cấp và tính xã hội.",
  "Kiểu Nhà nước và tiêu chí phân chia kiểu Nhà nước.",
  "Hình thức Nhà nước: hình thức chính thể.",
  "Hình thức cấu trúc Nhà nước và chế độ chính trị.",
  "Tổng hợp tuần: sơ đồ hóa khái niệm, bản chất, kiểu và hình thức Nhà nước."
 ]],
 ["Chức năng và bộ máy Nhà nước","Hiểu cách Nhà nước tổ chức và thực hiện quyền lực",[
  "Khái niệm và phân loại chức năng Nhà nước.",
  "Chức năng đối nội và các biểu hiện.",
  "Chức năng đối ngoại và mối liên hệ với đối nội.",
  "Bộ máy Nhà nước: khái niệm, đặc điểm, nguyên tắc tổ chức.",
  "Các cơ quan trong bộ máy Nhà nước Việt Nam.",
  "Phân định, phối hợp và kiểm soát quyền lực Nhà nước.",
  "Tổng hợp tuần: lập sơ đồ bộ máy và bài kiểm tra ngắn."
 ]],
 ["Nguồn gốc, bản chất và vai trò của pháp luật","Nắm quan hệ giữa Nhà nước và pháp luật",[
  "Nguồn gốc và các quan điểm về sự ra đời của pháp luật.",
  "Khái niệm, bản chất và các thuộc tính của pháp luật.",
  "Vai trò và chức năng của pháp luật.",
  "Các hình thức pháp luật; văn bản quy phạm pháp luật.",
  "Mối quan hệ giữa pháp luật với Nhà nước, kinh tế và các quy phạm xã hội.",
  "Nhà nước pháp quyền và các giá trị nền tảng.",
  "Tổng hợp tuần: hệ thống hóa lý luận về pháp luật."
 ]],
 ["Quy phạm, quan hệ và thực hiện pháp luật","Chuyển từ lý thuyết sang phân tích tình huống",[
  "Quy phạm pháp luật: khái niệm, cấu trúc và phân loại.",
  "Quan hệ pháp luật: chủ thể, khách thể và nội dung.",
  "Sự kiện pháp lý và căn cứ làm phát sinh, thay đổi, chấm dứt quan hệ pháp luật.",
  "Thực hiện pháp luật: tuân thủ, thi hành, sử dụng và áp dụng.",
  "Vi phạm pháp luật: dấu hiệu, cấu thành và phân loại.",
  "Trách nhiệm pháp lý; pháp chế và trật tự pháp luật.",
  "Kiểm tra lý luận tổng hợp; ghi lỗi sai và nội dung cần củng cố."
 ]],
 ["Hiến pháp Việt Nam qua các thời kỳ","Nhận diện sự kế thừa và phát triển hiến pháp",[
  "Bối cảnh và đặc điểm Hiến pháp năm 1946.",
  "Hiến pháp năm 1959: bối cảnh và nội dung nổi bật.",
  "Hiến pháp năm 1980: mô hình tổ chức Nhà nước và điểm đáng chú ý.",
  "Hiến pháp năm 1992 và các thay đổi quan trọng.",
  "Hiến pháp năm 2013: tư tưởng, cấu trúc và điểm mới.",
  "Lập bảng so sánh các bản Hiến pháp theo tiêu chí thống nhất.",
  "Tạo dòng thời gian hiến pháp; tự kiểm tra so sánh."
 ]],
 ["Hiến pháp 2013 sửa đổi năm 2025","Hệ thống hóa các thiết chế và quyền hiến định",[
  "Cấu trúc, nguyên tắc nền tảng và chế độ chính trị.",
  "Quyền con người, quyền và nghĩa vụ cơ bản của công dân.",
  "Kinh tế, xã hội, văn hóa, giáo dục và các lĩnh vực liên quan.",
  "Quốc hội và Chủ tịch nước: vị trí, chức năng, nhiệm vụ.",
  "Chính phủ, Tòa án nhân dân và Viện kiểm sát nhân dân.",
  "Chính quyền địa phương; xác định nội dung sửa đổi năm 2025.",
  "Đối chiếu bản trước và sau sửa đổi; tổng hợp Hiến pháp hiện hành."
 ]],
 ["Luật Ban hành văn bản quy phạm pháp luật 2025","Hiểu hệ thống, thẩm quyền và quy trình ban hành",[
  "Phạm vi điều chỉnh, khái niệm và hệ thống văn bản quy phạm pháp luật.",
  "Thẩm quyền ban hành của từng chủ thể theo luật hiện hành.",
  "Nguyên tắc xây dựng, ban hành văn bản quy phạm pháp luật.",
  "Quy trình xây dựng chính sách và soạn thảo văn bản.",
  "Thẩm định, thẩm tra, thông qua và công bố văn bản.",
  "Rà soát, hệ thống hóa, hợp nhất và xử lý văn bản.",
  "Đối chiếu nội dung sửa đổi ngày 25/6/2025; làm bài tập tình huống."
 ]],
 ["Nghị quyết 27-NQ/TW và 66-NQ/TW","Liên hệ định hướng cải cách Nhà nước và pháp luật",[
  "Bối cảnh, quan điểm chỉ đạo và mục tiêu của Nghị quyết 27-NQ/TW.",
  "Đặc trưng Nhà nước pháp quyền XHCN Việt Nam theo Nghị quyết 27.",
  "Nhiệm vụ và giải pháp trọng tâm của Nghị quyết 27.",
  "Bối cảnh, quan điểm và mục tiêu của Nghị quyết 66-NQ/TW.",
  "Đổi mới tư duy xây dựng pháp luật và nâng cao hiệu quả thi hành.",
  "So sánh, liên hệ Nghị quyết 27 với Nghị quyết 66 và luật hiện hành.",
  "Tổng hợp bằng bảng đối chiếu; tự kiểm tra và ghi lỗi sai."
 ]],
 ["Văn kiện Đại hội đại biểu toàn quốc lần thứ XIV","Kết nối định hướng phát triển với kiến thức CA4",[
  "Đọc tổng quan Văn kiện Đại hội XIV, tập 1; xác định cấu trúc.",
  "Đánh giá nhiệm kỳ trước và bối cảnh phát triển mới.",
  "Quan điểm, mục tiêu và định hướng phát triển đất nước.",
  "Xây dựng Đảng, hệ thống chính trị và Nhà nước pháp quyền.",
  "Hoàn thiện thể chế, đổi mới xây dựng và thi hành pháp luật.",
  "Quốc phòng, an ninh và các nhiệm vụ chiến lược.",
  "Đọc đối chiếu tập 2; lập bảng chủ đề liên hệ với CA4."
 ]],
 ["Tổng hợp liên ngành","Liên kết lý luận, hiến pháp, luật và văn kiện",[
  "Liên kết lý luận Nhà nước với mô hình Nhà nước Việt Nam.",
  "Liên kết lý luận pháp luật với hệ thống văn bản hiện hành.",
  "Liên kết Hiến pháp với tổ chức bộ máy và quyền công dân.",
  "Liên kết Luật Ban hành văn bản với Nghị quyết 66.",
  "Liên kết Nghị quyết 27, Nghị quyết 66 và Văn kiện Đại hội XIV.",
  "Luyện câu hỏi tổng hợp; trình bày câu trả lời theo luận điểm.",
  "Rà soát lỗ hổng kiến thức; cập nhật mức L1–L5."
 ]],
 ["Luyện đề và củng cố cuối kỳ","Đánh giá năng lực và hoàn thiện chiến lược làm bài",[
  "Làm đề thử 1; phân loại lỗi theo nhóm kiến thức.",
  "Ôn chuyên sâu lý luận chung về Nhà nước và pháp luật.",
  "Ôn chuyên sâu Hiến pháp và Luật Ban hành văn bản.",
  "Ôn chuyên sâu nghị quyết và Văn kiện Đại hội XIV.",
  "Làm đề thử 2; so sánh kết quả với đề thử 1.",
  "Ôn các lỗi lặp lại; hoàn thiện bảng ghi nhớ và sơ đồ.",
  "Tổng rà soát, chuẩn bị tài liệu và chiến lược trước kỳ thi."
 ]]
];

const materials = [
 ["A","Đề cương và hướng dẫn ôn thi","Phân tích cấu trúc đề, phạm vi kiến thức, trọng tâm và yêu cầu cần đạt."],
 ["B","Giáo trình Lý luận chung về Nhà nước và pháp luật","Nguồn gốc, bản chất, chức năng Nhà nước; pháp luật, quy phạm, quan hệ và trách nhiệm pháp lý."],
 ["C","Hiến pháp Việt Nam qua các thời kỳ","Hiến pháp 1946, 1959, 1980, 1992, 2013; bảng so sánh và dòng thời gian."],
 ["D","Hiến pháp 2013 sửa đổi năm 2025","Chế độ chính trị, quyền con người, quyền công dân, các thiết chế và nội dung sửa đổi."],
 ["E","Luật Ban hành VBQPPL 2025, sửa đổi 25/6/2025","Hệ thống văn bản, thẩm quyền, nguyên tắc, quy trình, rà soát và xử lý văn bản."],
 ["F","Nghị quyết 27-NQ/TW ngày 09/11/2022","Quan điểm, mục tiêu, đặc trưng và nhiệm vụ xây dựng Nhà nước pháp quyền XHCN."],
 ["G","Nghị quyết 66-NQ/TW ngày 30/04/2025","Đổi mới tư duy xây dựng pháp luật, hoàn thiện thể chế và nâng cao hiệu quả thi hành."],
 ["H","Văn kiện Đại hội XIV – Tập 1 và 2","Định hướng phát triển, xây dựng Đảng, hệ thống chính trị, thể chế, pháp luật, quốc phòng và an ninh."]
];

const topics = [
 ["Nguồn gốc, khái niệm và bản chất Nhà nước","Tuần 2"],
 ["Kiểu, hình thức và chức năng Nhà nước","Tuần 2–3"],
 ["Bộ máy Nhà nước Việt Nam","Tuần 3"],
 ["Nguồn gốc, bản chất và vai trò pháp luật","Tuần 4"],
 ["Quy phạm và quan hệ pháp luật","Tuần 5"],
 ["Thực hiện, vi phạm và trách nhiệm pháp lý","Tuần 5"],
 ["Hiến pháp Việt Nam qua các thời kỳ","Tuần 6"],
 ["Hiến pháp 2013 sửa đổi 2025","Tuần 7"],
 ["Luật Ban hành VBQPPL 2025","Tuần 8"],
 ["Nghị quyết 27-NQ/TW","Tuần 9"],
 ["Nghị quyết 66-NQ/TW","Tuần 9"],
 ["Văn kiện Đại hội XIV","Tuần 10"],
 ["Tổng hợp liên ngành và vận dụng","Tuần 11–12"]
];

const phases = [
 ["Nền tảng lý luận","Tuần 1–5",5],
 ["Hiến pháp","Tuần 6–7",2],
 ["Pháp luật và nghị quyết","Tuần 8–9",2],
 ["Văn kiện và tổng hợp","Tuần 10–11",2],
 ["Luyện đề","Tuần 12",1]
];

let state = loadState();
function loadState(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||{sessions:{},materials:{},knowledge:{},errors:[]}}catch{return {sessions:{},materials:{},knowledge:{},errors:[]}}}
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));renderAll()}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function completed(){return Object.values(state.sessions).filter(Boolean).length}
function go(view){document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===view));document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.view===view));const names={overview:"Tổng quan",weekly:"Kế hoạch 12 tuần",materials:"Nhóm tài liệu A–H",knowledge:"Năng lực kiến thức",errors:"Sổ lỗi sai"};document.getElementById("page-title").textContent=names[view];window.scrollTo(0,0)}
document.querySelectorAll(".nav-link").forEach(b=>b.addEventListener("click",()=>go(b.dataset.view)));
document.querySelectorAll("[data-goto]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.goto)));

function renderOverview(){
 const done=completed(),pct=Math.round(done/84*100),matDone=materials.filter(m=>state.materials[m[0]]==="Hoàn tất").length;
 document.getElementById("overall-progress").textContent=pct+"%";document.getElementById("overall-bar").style.width=pct+"%";
 document.getElementById("session-count").textContent=`${done} / 84 buổi hoàn thành`;document.getElementById("weekly-done").textContent=`${done}/84`;
 document.getElementById("study-hours").textContent=(done*3)+"h";document.getElementById("material-count").textContent=`${matDone}/8`;
 document.getElementById("open-errors").textContent=state.errors.length;
 document.getElementById("phase-progress").innerHTML=phases.map(p=>{let total=p[2]*7,finished=0;for(let w=0;w<p[2];w++){let wi=phases.indexOf(p);let start=phases.slice(0,wi).reduce((a,x)=>a+x[2],0)+1+w;for(let d=1;d<=7;d++)if(state.sessions[`${start}-${d}`])finished++}let percent=Math.round(finished/total*100);return `<div class="phase-row"><span class="phase-name">${p[0]}<br><small>${p[1]}</small></span><div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div><strong>${percent}%</strong></div>`}).join("");
}
function renderWeeks(){
 document.getElementById("week-list").innerHTML=weeks.map((w,i)=>{let count=w[2].filter((_,d)=>state.sessions[`${i+1}-${d+1}`]).length;return `<article class="week-card ${i===0?"open":""}"><div class="week-head" data-week="${i}"><div class="week-title"><div class="week-number">${String(i+1).padStart(2,"0")}</div><div><h3>Tuần ${i+1} · ${w[0]}</h3><p>${w[1]}</p></div></div><div class="week-meta"><span>${count}/7 buổi</span><span>⌄</span></div></div><div class="week-body">${w[2].map((task,d)=>`<label class="session"><input type="checkbox" data-session="${i+1}-${d+1}" ${state.sessions[`${i+1}-${d+1}`]?"checked":""}><span class="session-day">Buổi ${d+1}</span><span class="session-task">${task}<small>Gợi ý: 180 phút · Ôn 15’ · Đọc 60’ · Đối chiếu 30’ · Tổng hợp 35’ · Kiểm tra 30’ · Ghi lỗi 10’</small></span></label>`).join("")}</div></article>`}).join("");
 document.querySelectorAll(".week-head").forEach(h=>h.addEventListener("click",()=>h.parentElement.classList.toggle("open")));
 document.querySelectorAll("[data-session]").forEach(c=>c.addEventListener("change",()=>{state.sessions[c.dataset.session]=c.checked;save()}));
}
function renderMaterials(){
 document.getElementById("material-list").innerHTML=materials.map(m=>`<article class="material-card"><div class="material-card-head"><div class="material-letter">${m[0]}</div><h3>${m[1]}</h3></div><p>${m[2]}</p><div class="material-controls"><span class="eyebrow">TRẠNG THÁI</span><select data-material="${m[0]}"><option ${(!state.materials[m[0]]||state.materials[m[0]]==="Chưa bắt đầu")?"selected":""}>Chưa bắt đầu</option><option ${state.materials[m[0]]==="Đang học"?"selected":""}>Đang học</option><option ${state.materials[m[0]]==="Đã đọc"?"selected":""}>Đã đọc</option><option ${state.materials[m[0]]==="Đang tổng hợp"?"selected":""}>Đang tổng hợp</option><option ${state.materials[m[0]]==="Hoàn tất"?"selected":""}>Hoàn tất</option></select></div></article>`).join("");
 document.querySelectorAll("[data-material]").forEach(s=>s.addEventListener("change",()=>{state.materials[s.dataset.material]=s.value;save()}));
}
function renderKnowledge(){
 document.getElementById("knowledge-list").innerHTML=topics.map((t,i)=>`<div class="knowledge-item"><div><span>${t[0]}</span><small>${t[1]}</small></div><select data-knowledge="${i}">${[0,1,2,3,4,5].map(n=>`<option value="${n}" ${Number(state.knowledge[i]||0)===n?"selected":""}>${n===0?"Chưa đánh giá":"L"+n}</option>`).join("")}</select></div>`).join("");
 document.querySelectorAll("[data-knowledge]").forEach(s=>s.addEventListener("change",()=>{state.knowledge[s.dataset.knowledge]=Number(s.value);save()}));
}
function renderErrors(){
 document.getElementById("error-list").innerHTML=state.errors.length?state.errors.map(e=>`<article class="error-item"><div><h4>${esc(e.topic)}</h4><p>${esc(e.note)}</p><small>Ôn lại: ${e.date?esc(e.date):"Chưa đặt lịch"}</small></div><button data-delete-error="${e.id}">Xóa</button></article>`).join(""):`<div class="panel"><p style="color:#8290a1;font-size:11px;margin:0">Chưa có lỗi nào được ghi nhận. Hãy thêm lỗi ngay sau mỗi buổi tự kiểm tra.</p></div>`;
 document.querySelectorAll("[data-delete-error]").forEach(b=>b.addEventListener("click",()=>{state.errors=state.errors.filter(e=>e.id!==b.dataset.deleteError);save()}));
}
document.getElementById("error-form").addEventListener("submit",e=>{e.preventDefault();state.errors.unshift({id:Date.now().toString(),topic:document.getElementById("error-topic").value.trim(),note:document.getElementById("error-note").value.trim(),date:document.getElementById("error-date").value});e.target.reset();save()});
function renderAll(){renderOverview();renderWeeks();renderMaterials();renderKnowledge();renderErrors()}
renderAll();
