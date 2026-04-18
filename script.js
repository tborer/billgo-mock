document.addEventListener('DOMContentLoaded', () => {
    // View Toggling
    const viewToggle = document.getElementById('viewToggle');
    const userFlowView = document.getElementById('userFlowView');
    const pmDashboardView = document.getElementById('pmDashboardView');
    const toggleLabels = document.querySelectorAll('.toggle-label');

    viewToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            // Show PM View
            userFlowView.classList.remove('active-view');
            userFlowView.classList.add('hidden-view');
            pmDashboardView.classList.remove('hidden-view');
            pmDashboardView.classList.add('active-view');
            
            toggleLabels[0].classList.remove('active');
            toggleLabels[1].classList.add('active');
        } else {
            // Show User Flow View
            pmDashboardView.classList.remove('active-view');
            pmDashboardView.classList.add('hidden-view');
            userFlowView.classList.remove('hidden-view');
            userFlowView.classList.add('active-view');
            
            toggleLabels[1].classList.remove('active');
            toggleLabels[0].classList.add('active');
        }
    });

    // Set initial active label
    toggleLabels[0].classList.add('active');

    // Insight Reveal Logic
    const tickerInput = document.getElementById('tickerInput');
    const revealBtn = document.getElementById('revealBtn');
    const insightCard = document.getElementById('insightCard');
    const displayTicker = document.getElementById('displayTicker');

    const revealInsight = () => {
        const val = tickerInput.value.trim() || 'AT&T';
        displayTicker.textContent = val;
        
        // Add loading state to button
        revealBtn.textContent = 'Searching Network...';
        revealBtn.style.opacity = '0.8';
        
        // Simulate network request
        setTimeout(() => {
            insightCard.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                insightCard.classList.add('visible');
            }, 50);
            
            revealBtn.textContent = 'Biller Found';
            revealBtn.disabled = true;
            revealBtn.style.background = 'var(--accent)';
            revealBtn.style.opacity = '1';
        }, 800);
    };

    revealBtn.addEventListener('click', revealInsight);
    tickerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') revealInsight();
    });

    // Progressive Profiling Logic
    const riskOptions = document.querySelectorAll('#riskOptions .option-btn');
    const assetOptions = document.querySelectorAll('#assetOptions .option-btn');

    const handleSelection = (optionsList) => {
        optionsList.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove selected class from all in this group
                optionsList.forEach(b => b.classList.remove('selected'));
                // Add to clicked
                btn.classList.add('selected');
            });
        });
    };

    handleSelection(riskOptions);
    handleSelection(assetOptions);
});
