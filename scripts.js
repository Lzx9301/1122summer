const students = [
    { name: '01', account: 'teacher41@infoeduorg.onmicrosoft.com', password: 'Wok76804' },
    { name: '02', account: 'teacher41@infoeduorg.onmicrosoft.com', password: 'Wok76804' },
    { name: '03', account: 'teacher41@infoeduorg.onmicrosoft.com', password: 'Wok76804' },
    { name: '04', account: 'teacher41@infoeduorg.onmicrosoft.com', password: 'Wok76804' },
    { name: '05', account: 'teacher41@infoeduorg.onmicrosoft.com', password: 'Wok76804' },
    { name: '06', account: 'teacher41@infoeduorg.onmicrosoft.com', password: 'Wok76804' },
    { name: '07', account: 'teacher41@infoeduorg.onmicrosoft.com', password: 'Wok76804' },
    { name: '08', account: 'teacher41@infoeduorg.onmicrosoft.com', password: 'Wok76804' },
    { name: '洪辰維', account: 'teacher41@infoeduorg.onmicrosoft.com', password: 'Quf48031' },
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
        this.textContent = '返回查詢頁';
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
    $("#studentInfo").hide()
}

function Pid(){
    $("h2").show()
    $("#searchName").show()
    $("#searchButton").show()
    $("#studentInfo").show()
}
