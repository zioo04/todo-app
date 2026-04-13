// HTML 요소 가져오기
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// 추가 버튼 클릭 시 할 일 추가
addBtn.addEventListener('click', () => {
    const todoText = input.value.trim(); // 입력값 가져오기 (공백 제거)
    if (todoText) {
        // 새 리스트 항목(li) 생성
        const li = document.createElement('li');
        li.textContent = todoText;

        // 클릭 시 완료/미완료 토글 기능
        li.addEventListener('click', () => {
            li.classList.toggle('checked');
        });

        // 삭제 버튼 생성
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = '✔️';
        deleteBtn.className = 'delete-btn';
        
        // 삭제 버튼 클릭 시 항목 제거
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // li 클릭 이벤트 방지
            li.remove();
        });

        // 삭제 버튼을 li에 추가
        li.appendChild(deleteBtn);

        // li를 리스트(ul)에 추가
        list.appendChild(li);
        
        // 입력창 비우기
        input.value = ''; 
    } else {
        alert('할 일을 입력해주세요!');
    }
});

// 엔터 키 입력 시 할 일 추가
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});
