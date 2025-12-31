document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Toast Notification System
    function showToast(message, type = 'success') {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        const icon = type === 'success' ? '✅' : '❌';

        toast.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <span class="toast-message">${message}</span>
        `;

        container.appendChild(toast);

        // Remove toast after 3 seconds
        setTimeout(() => {
            toast.style.animation = 'fadeOut 0.3s forwards';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }

    // Handle Email Form Submission
    const form = document.getElementById('waiting-list-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value;
            const btn = form.querySelector('button');
            const originalBtnText = btn.innerText;

            if (email) {
                btn.innerText = 'Joining...';
                btn.disabled = true;

                // Use the form action if available, otherwise fallback (or alert dev)
                const action = form.getAttribute('action');

                if (action) {
                    try {
                        const response = await fetch(action, {
                            method: 'POST',
                            body: new FormData(form),
                            headers: {
                                'Accept': 'application/json'
                            }
                        });

                        if (response.ok) {
                            showToast('You’ve been added to the waiting list!', 'success');
                            form.reset();
                        } else {
                            showToast('Something went wrong. Please try again.', 'error');
                        }
                    } catch (error) {
                        console.error('Submission error:', error);
                        showToast('Network error. Please check your connection.', 'error');
                    }
                } else {
                    // Fallback for when action is missing (Development/Demo mostly)
                    console.warn('Form action is missing. Please add the Formspree URL to the form tag.');

                    // Simulate a delay for effect
                    await new Promise(r => setTimeout(r, 1000));

                    showToast('Simulation: Email collected (Check Console)', 'success');
                    console.log('Collected Email:', email);
                    form.reset();
                }

                btn.innerText = originalBtnText;
                btn.disabled = false;
            }
        });
    }
});
