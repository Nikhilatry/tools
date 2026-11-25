(function() {
    // 1. Block Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
    document.addEventListener('keydown', function(e) {
        if (
            e.keyCode === 123 || // F12
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I/J
            (e.ctrlKey && e.keyCode === 85) // Ctrl+U (View Source)
        ) {
            e.preventDefault();
            window.location.href = "restricted.html";
        }
    });

    // 2. Block Right Click
    document.addEventListener('contextmenu', e => e.preventDefault());

    // 3. Automatic Detection (Dimension & Timing)
    setInterval(function() {
        const threshold = 160;
        const isDevToolsOpen = 
            window.outerWidth - window.innerWidth > threshold || 
            window.outerHeight - window.innerHeight > threshold;

        if (isDevToolsOpen) {
            window.location.replace("restricted.html");
        }
    }, 500);
})();