function redirectToRegister() {
    window.location.href = './LoginPage.html'; // Replace with the correct file or path
}
 // Get all tab buttons and row containers
        const tabs = document.querySelectorAll('.tab');
        const activeRows = document.querySelectorAll('.row.active');
        const gainersRows = document.querySelectorAll('.row.gainers');
        const losersRows = document.querySelectorAll('.row.losers');

        // Tab switch function
        function switchTab(activeTab) {
            // Reset all tabs
            tabs.forEach(tab => tab.classList.remove('selected'));
            // Show the correct row sets based on active tab
            if (activeTab === 'active') {
                activeRows.forEach(row => row.style.display = 'flex');
                gainersRows.forEach(row => row.style.display = 'none');
                losersRows.forEach(row => row.style.display = 'none');
            } else if (activeTab === 'gainers') {
                activeRows.forEach(row => row.style.display = 'none');
                gainersRows.forEach(row => row.style.display = 'flex');
                losersRows.forEach(row => row.style.display = 'none');
            } else if (activeTab === 'losers') {
                activeRows.forEach(row => row.style.display = 'none');
                gainersRows.forEach(row => row.style.display = 'none');
                losersRows.forEach(row => row.style.display = 'flex');
            }
        }

        // Add event listeners to the tabs
        document.getElementById('active-tab').addEventListener('click', () => {
            switchTab('active');
            document.getElementById('active-tab').classList.add('selected');
        });
        document.getElementById('gainers-tab').addEventListener('click', () => {
            switchTab('gainers');
            document.getElementById('gainers-tab').classList.add('selected');
        });
        document.getElementById('losers-tab').addEventListener('click', () => {
            switchTab('losers');
            document.getElementById('losers-tab').classList.add('selected');
        });

        // Set initial state
        switchTab('active');
