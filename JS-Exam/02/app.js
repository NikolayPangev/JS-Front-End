window.addEventListener("load", solve);

function solve() {
    let expenseType = document.getElementById('expense');
    let amount = document.getElementById('amount');
    let date = document.getElementById('date');

    let publishBtn = document.getElementById('add-btn');
    let deleteBtn = document.querySelector('.delete');

    let formElement = document.querySelector('form');

    function isValidInput() {
        return expenseType.value !== '' && amount.value !== '' && date.value !== '';
    }

    publishBtn.addEventListener('click', function() {
        if (!isValidInput()) {
            return;
        }

        let previewList = document.getElementById('preview-list');
        let expensesList = document.getElementById('expenses-list');

        let li = document.createElement('li');
        li.classList.add('expense-item');

        let articleElement = document.createElement('article');

        let expenseTypeParagraph = document.createElement('p');
        expenseTypeParagraph.textContent = `Type: ${expenseType.value}`;

        let expenseTypeVal = expenseType.value;

        let amountParagraph = document.createElement('p');
        amountParagraph.textContent = `Amount: ${amount.value}$`;

        let amountVal = amount.value;

        let dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Date: ${date.value}`;

        let dateVal = date.value;

        articleElement.appendChild(expenseTypeParagraph);
        articleElement.appendChild(amountParagraph);
        articleElement.appendChild(dateParagraph);

        let editBtn = document.createElement('button');
        editBtn.classList.add('btn');
        editBtn.classList.add('edit');
        editBtn.textContent = 'edit';
        editBtn.addEventListener('click', edit);

        let postBtn = document.createElement('button');
        postBtn.classList.add('btn');
        postBtn.classList.add('ok');
        postBtn.textContent = 'ok';
        postBtn.addEventListener('click', post);

        li.appendChild(articleElement);
        li.appendChild(editBtn);
        li.appendChild(postBtn);

        previewList.appendChild(li);
        publishBtn.disabled = true;
        formElement.reset();

        function edit() {
            expenseType.value = expenseTypeVal;
            amount.value = amountVal;
            date.value = dateVal;

            previewList.removeChild(li);

            publishBtn.disabled = false;
        }

        function post() {
            previewList.removeChild(li);
            li.removeChild(postBtn);
            li.removeChild(editBtn);
            expensesList.appendChild(li);
            publishBtn.disabled = false;

            deleteBtn.removeEventListener('click', reload);
            deleteBtn.addEventListener('click', reload);
        }

        function reload() {
            location.reload();
        }
    });
}
