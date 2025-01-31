
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseover', function() {
        this.style.color = '#1a73e8';
        this.style.transform = 'scale(1.1)';
    });
    skill.addEventListener('mouseout', function() {
        this.style.color = '';
        this.style.transform = 'scale(1)';
    });
    skill.addEventListener('click', function() {
        const description = this.getAttribute('data-description');
        document.getElementById('skill-description').innerText = description;
    });
});

// Descrições adicionais para Wix e WordPress
document.querySelector('.skill[data-description="Wix"]').setAttribute(
    'data-description',
    'Criação de sites intuitivos e visuais usando o editor Wix.'
);
document.querySelector('.skill[data-description="WordPress"]').setAttribute(
    'data-description',
    'Desenvolvimento de sites dinâmicos e gerenciamento de conteúdo usando WordPress.'
);
