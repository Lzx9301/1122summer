const students = [
    { name: '01', account: 'infostudent01', password: 'Zaz12762' },
    { name: '02', account: 'infostudent02', password: 'Cov37430' },
    { name: '03', account: 'infostudent03', password: 'Yux85462' },
    { name: '04', account: 'infostudent04', password: 'Nux55035' },
    { name: '05', account: 'infostudent05', password: 'Fub28527' },
    { name: '06', account: 'infostudent01', password: 'Zaz12762' },
    { name: '07', account: 'infostudent02', password: 'Cov37430' },
    { name: '08', account: 'infostudent03', password: 'Yux85462' },
    { name: '09', account: 'infostudent04', password: 'Nux55035' },
    { name: '10', account: 'infostudent05', password: 'Fub28527' },
    { name: '11', account: 'infostudent01', password: 'Zaz12762' },
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
document.getElementById("bytefox").addEventListener("click", function() {
    let fox = this;
    fox.style.animation = "jump 0.6s ease-in-out";
    setTimeout(() => {
        fox.style.animation = "float 3s infinite alternate ease-in-out";
        window.open("https://your-link.com", "_blank");
    }, 600);
});

