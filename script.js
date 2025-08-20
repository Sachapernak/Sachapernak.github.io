(function () {
    const onReady = (fn) =>
        document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn) : fn();

    onReady(() => {
        // Year in footer
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Randomize gradient angle once per session
        try {
            const angleKey = 'sp-gradient-angle';
            const saved = sessionStorage.getItem(angleKey);
            const angle = saved ?? `${Math.floor(Math.random() * 180)}deg`;
            document.documentElement.style.setProperty('--angle', angle);
            if (!saved) sessionStorage.setItem(angleKey, angle);
        } catch {
            // sessionStorage can fail
        }

        // Theme toggle
        const btn = document.getElementById('themeToggle');
        if (btn) {
            btn.addEventListener('click', () => {
                const root = document.documentElement;
                const body = document.body;
                const on = !root.classList.contains('theme-alt');
                root.classList.toggle('theme-alt', on);
                body.classList.toggle('theme-alt', on);
                btn.setAttribute('aria-pressed', String(on));
            });
        }

        // wobble the 🚧 on hover / focus
        document.querySelectorAll('.uc .emoji').forEach((e) => {
            const add = () => e.classList.add('wobble');
            const rm  = () => e.classList.remove('wobble');
            e.addEventListener('mouseenter', add);
            e.addEventListener('mouseleave', rm);
            e.addEventListener('focus', add);
            e.addEventListener('blur', rm);
        });

        // Keyboard shortcuts: g opens GitHub, / toggles theme
        window.addEventListener('keydown', (ev) => {
            if (ev.key.toLowerCase() === 'g' && !ev.metaKey && !ev.ctrlKey && !ev.altKey) {
                const a = document.getElementById('gh');
                if (a) { a.focus(); a.click(); }
            }
            if (ev.key === '/' && !ev.metaKey && !ev.ctrlKey && !ev.altKey) {
                ev.preventDefault();
                btn?.click();
            }
        });

        console.log('[sachapernak.me] script.js loaded');
    });
})();
