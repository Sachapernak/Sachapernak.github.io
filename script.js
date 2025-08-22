(function () {
    const onReady = (fn) =>
        document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn) : fn();

    onReady(() => {

        document.documentElement.style.setProperty('--current-theme', "1");
        // Year in footer
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear().toString();

        // Randomize gradient angle
        const angle = `${Math.floor((Math.random() * 100) +80)}deg`;
        document.documentElement.style.setProperty('--angle', angle);


        // Theme toggle
        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.addEventListener('click', () => {

                const angle = `${Math.floor(Math.random() * 180)}deg`;
                document.documentElement.style.setProperty('--angle', angle);

                if (document.documentElement.style.getPropertyValue('--current-theme') === "1") {

                    document.documentElement.style.setProperty('--bg-color-def:', "#6366F1");
                    document.documentElement.style.setProperty('--bg-color1', "#020f1e");
                    document.documentElement.style.setProperty('--bg-color2', "#a78bfa");
                    document.documentElement.style.setProperty('--text-color', "aliceblue");
                    document.documentElement.style.setProperty('--accent', "#f97316");
                    document.documentElement.style.setProperty('--current-theme', "2");

                } else {
                    document.documentElement.style.setProperty('--bg-color-def:', "#6366F1");
                    document.documentElement.style.setProperty('--bg-color1', "rgba(99, 102, 241, 1)");
                    document.documentElement.style.setProperty('--bg-color2', "rgba(236, 72, 153, 1)");
                    document.documentElement.style.setProperty('--text-color', "aliceblue");
                    document.documentElement.style.setProperty('--accent', "#fde68a");
                    document.documentElement.style.setProperty('--current-theme', "1");
                }

            });
        }

        console.log('[sachapernak.me] script.js loaded');
    });
})();
