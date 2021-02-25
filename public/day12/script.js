const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});

/*
Bring in toggle buttons (querySelectorAll)
Loop through nodelist (forEach)
Add click event: addEventListener
Toggle the active class of the parent node: .parentNode & classList.toggle()
*/