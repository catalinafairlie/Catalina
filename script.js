// Search functionality for seating plan
document.getElementById('nameSearch').addEventListener('keyup', function() {
    const searchTerm = this.value.toLowerCase();
    const tableCards = document.querySelectorAll('.table-card');
    
    tableCards.forEach(card => {
        const guestList = card.querySelectorAll('.guest-list li');
        let found = false;
        let anyVisible = false;
        
        guestList.forEach(guest => {
            const guestName = guest.textContent.toLowerCase();
            if (guestName.includes(searchTerm) && searchTerm !== '') {
                guest.style.display = 'block';
                guest.style.backgroundColor = '#fff3cd';
                found = true;
                anyVisible = true;
            } else if (searchTerm === '') {
                guest.style.display = 'block';
                guest.style.backgroundColor = 'transparent';
                anyVisible = true;
            } else {
                guest.style.display = 'none';
            }
        });
        
        // Show/hide table based on search results
        if (searchTerm === '' || anyVisible) {
            card.style.display = 'block';
            if (found) {
                card.style.borderLeft = '4px solid #d4af37';
                card.style.boxShadow = '0 8px 20px rgba(212, 175, 55, 0.3)';
            }
        } else {
            card.style.display = 'none';
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});