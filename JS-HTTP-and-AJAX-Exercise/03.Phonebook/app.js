function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', getAllPhones);
    document.getElementById('btnCreate').addEventListener('click', createContact);
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    async function getAllPhones() {
        const phonesInfo = await (await fetch(baseUrl)).json();

        const phoneBook = document.getElementById('phonebook');

        Object.values(phonesInfo).forEach((contact) => {
            const li = document.createElement('li');

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

            li.textContent = `${contact.person}: ${contact.phone}`;
            li.appendChild(deleteButton);
            phoneBook.appendChild(li);

            deleteButton.addEventListener('click', deleteContact);

            function deleteContact() {
                const id = contact._id;

                fetch(`http://localhost:3030/jsonstore/phonebook/${id}`,
                    {
                        method: 'DELETE',
                    });
                li.remove();
            }
        });
    }

    function createContact() {
        const person = document.getElementById('person').value;
        const phone = document.getElementById('phone').value;

        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(
                {
                    person,
                    phone
                }
            )
        }).then((response) => response.json())
            .then(() => {
                document.getElementById('person').value = '';
                document.getElementById('phone').value = '';
            });

    }
}

attachEvents();