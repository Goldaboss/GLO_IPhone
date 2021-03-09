document.addEventListener('DOMContentLoaded', () => {

    const tabs = () => {
        const cardDetailChange = document.querySelectorAll('.card-detail__change');
        const cardDetailsTitle = document.querySelector('.card-details__title');
        const cardImageItem = document.querySelector('.card__image_item');
        const cardDetailsPrice = document.querySelector('.card-details__price');
        const descriptionMemory =document.querySelector('.description__memory');

        const data = [
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
                image: 'img/iPhone-graphite.png',
                price: 95990,
                memoryROM: 128,
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Silver',
                image: 'img/iPhone-silver.png',
                price: 97990,
                memoryROM: 256,
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
                image: 'img/iPhone-blue.png',
                price: 99990,
                memoryROM: 128,
            },
        ];

        const deactive = () => {
            cardDetailChange.forEach((btn) => btn.classList.remove('active'))
        };

        cardDetailChange.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if (!btn.classList.contains('active')) {
                    deactive();
                    btn.classList.add('active');
                    cardDetailsTitle.textContent = data[i].name;
                    cardImageItem.src = data[i].image;
                    cardImageItem.alt = data[i].name;
                    cardDetailsPrice.textContent = data[i].price + '₽';
                    descriptionMemory.textContent = `Встроенная память (ROM) ${data[i].memoryROM} ГБ`;
                }
            });
        })

    };

    tabs();

});
