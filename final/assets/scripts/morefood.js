document.querySelectorAll('#category').forEach(function(category) {
    category.addEventListener('click', function() {
        const rectangle = document.getElementById('rectangle');
        const categoryRect = this.getBoundingClientRect();
        const navbarRect = this.parentNode.getBoundingClientRect();

        rectangle.style.position = 'absolute';
        rectangle.style.left = categoryRect.left - navbarRect.left - 8 + "px";
        rectangle.style.width = categoryRect.width + 16 + "px";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const allCategories = document.querySelectorAll('.navbar div');
    const allFoodCards = document.querySelectorAll('.FoodCard-wrapper1, .FoodCard-wrapper2, .FoodCard-wrapper3, .FoodCard-wrapper4');

    // Function to show only the selected categories
    function showSelectedCategories(selectedCards) {
        // Hide all cards first
        allFoodCards.forEach(card => card.style.display = 'none');
        // Show only the relevant cards
        selectedCards.forEach(card => card.style.display = 'block');
    }

    allCategories.forEach(category => {
        category.addEventListener('click', function() {
            const categoryClass = this.className;
            switch (categoryClass) {
                case 'all':
                    allFoodCards.forEach(card => card.style.display = 'block');
                    break;
                case 'due-soon':
                    showSelectedCategories(document.querySelectorAll('.FoodCard-wrapper3'));
                    break;
                case 'everyday':
                    showSelectedCategories(document.querySelectorAll('.FoodCard-wrapper2, .FoodCard-wrapper1'));
                    break;
                case 'past-due':
                    showSelectedCategories(document.querySelectorAll('.FoodCard-wrapper4'));
                    break;
            }
        });
    });
});

