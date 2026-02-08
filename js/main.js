// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function scrollToRegistration() {
    document.getElementById('registration').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function handleFirstTime() {
    const firstTimeYes = document.getElementById('firstTimeYes').checked;
    const firstTimeNo = document.getElementById('firstTimeNo').checked;

    const referralSection = document.getElementById('referralSection');
    const churchSection = document.getElementById('churchSection');
    const whichChurchSection = document.getElementById('whichChurchSection');
    const otherChurchSection = document.getElementById('otherChurchSection');

    // Reset all sections
    churchSection.classList.add('hidden');
    whichChurchSection.classList.add('hidden');
    otherChurchSection.classList.add('hidden');

    if (firstTimeYes) {
        referralSection.classList.remove('hidden');
        document.getElementById('referral').required = true;
    } else if (firstTimeNo) {
        referralSection.classList.add('hidden');
        churchSection.classList.remove('hidden');
        document.getElementById('referral').required = false;
    }
}

function handleChurchMembership() {
    const partOfChurchYes = document.getElementById('partOfChurchYes').checked;
    const whichChurchSection = document.getElementById('whichChurchSection');
    const otherChurchSection = document.getElementById('otherChurchSection');

    otherChurchSection.classList.add('hidden');

    if (partOfChurchYes) {
        whichChurchSection.classList.remove('hidden');
        document.getElementById('whichChurch').required = true;
    } else {
        whichChurchSection.classList.add('hidden');
        document.getElementById('whichChurch').required = false;
    }
}

function handleChurchSelection() {
    const whichChurch = document.getElementById('whichChurch').value;
    const otherChurchSection = document.getElementById('otherChurchSection');

    if (whichChurch === 'Other') {
        otherChurchSection.classList.remove('hidden');
        document.getElementById('otherChurch').required = true;
    } else {
        otherChurchSection.classList.add('hidden');
        document.getElementById('otherChurch').required = false;
    }
}

function handleSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Log the data (in a real application, this would be sent to a server)
    console.log('Registration Data:', data);

    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Reset form after 3 seconds
    setTimeout(() => {
        event.target.reset();
        successMessage.style.display = 'none';

        // Reset all conditional sections
        document.getElementById('referralSection').classList.add('hidden');
        document.getElementById('churchSection').classList.add('hidden');
        document.getElementById('whichChurchSection').classList.add('hidden');
        document.getElementById('otherChurchSection').classList.add('hidden');
    }, 3000);
}