const students = [
    { name: '陳品叡', account: 'shyi01@infoeduorg.onmicrosoft.com', password: 'Pum81065' },
    { name: '周柏帆', account: 'shyi02@infoeduorg.onmicrosoft.com', password: 'Zun07933' },
    { name: '賴宥叡', account: 'shyi03@infoeduorg.onmicrosoft.com', password: 'Cud11955' },
    { name: '陳駿睿', account: 'shyi04@infoeduorg.onmicrosoft.com', password: 'Zuq13595' },
    { name: '戴震寰', account: 'shyi05@infoeduorg.onmicrosoft.com', password: 'Zah14818' },
    { name: '張晉瑀', account: 'shyi06@infoeduorg.onmicrosoft.com', password: 'Kab97133' },
    { name: '彭翊真', account: 'chij01@infoeduorg.onmicrosoft.com', password: 'Rab64389' },
    { name: '蕭育芯', account: 'chij02@infoeduorg.onmicrosoft.com', password: 'Roc94501' },
    { name: '洪辰維', account: 'chij03@infoeduorg.onmicrosoft.com', password: 'Quf48031' },
    { name: '方芊媚', account: 'chij04@infoeduorg.onmicrosoft.com', password: 'Lap48958' },
    { name: '林羿融', account: 'chij05@infoeduorg.onmicrosoft.com', password: 'Bay72811' },
    { name: '謝棠宇', account: 'chij06@infoeduorg.onmicrosoft.com', password: 'Zov20042' },
    { name: '陳薇棻', account: 'chij07@infoeduorg.onmicrosoft.com', password: 'Zoc48053' },
    { name: '張育傑', account: 'chij08@infoeduorg.onmicrosoft.com', password: 'Gog98265' },
    { name: '施聖瀚', account: 'chij09@infoeduorg.onmicrosoft.com', password: 'Tuk29805' },
    { name: '林佑誠', account: 'chij10@infoeduorg.onmicrosoft.com', password: 'Tuv02992' },
    { name: '羅昱為', account: 'chij11@infoeduorg.onmicrosoft.com', password: 'Yay45825' },
    { name: '施鈞彥', account: 'chij12@infoeduorg.onmicrosoft.com', password: 'Bay54371' },
    { name: 'zx', account: 'teacher41@infoeduorg.onmicrosoft.com', password: 'Wok76804' },
    { name: 'oa', account: 'orangeapple.teacher5@orangeapple.co', password: 'OAteacher5' },

    
    // 可以繼續添加更多學生
];

document.getElementById('searchButton').addEventListener('click', function() {
    const searchName = document.getElementById('searchName').value;
    const student = students.find(student => student.name === searchName);

    const studentInfo = document.getElementById('studentInfo');
    if (student) {
        studentInfo.innerHTML = `
            <p>姓名：${student.name}</p>
            <p>帳號：${student.account}</p>
            <p>密碼：${student.password}</p>
        `;
    } else {
        studentInfo.innerHTML = '<p>找不到該學生資料。</p>';
    }
});

document.getElementById('toggleButton').addEventListener('click', function() {
    const extraInfo = document.getElementById('extraInfo');
    if (extraInfo.style.display === 'none') {
        extraInfo.style.display = 'block';
        this.textContent = '補充資料區';
        addData();
        
    } else {
        extraInfo.style.display = 'none';
        this.textContent = '補充資料區';
        Pid();
    }
});

function addData(){
    $("#search").hide()
    $("#searchName").hide()
    $("#searchButton").hide()
}

function Pid(){
    $("h2").show()
    $("#searchName").show()
    $("#searchButton").show()
}
