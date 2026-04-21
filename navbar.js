class PortfolioNav extends HTMLElement {
    connectedCallback() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        const homeClass = currentPage === 'index.html' ? 'text-brand-accent' : 'text-gray-500';
        const rotoClass = currentPage === 'rotoscoping.html' ? 'text-brand-accent' : 'text-gray-500';
        const solarClass = currentPage === 'solar-system.html' ? 'text-brand-accent' : 'text-gray-500';

        this.innerHTML = `
            <nav class="glass-nav fixed w-full top-0 z-50 transition-all duration-300">
                <div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    <a href="index.html" class="text-xl font-bold tracking-widest text-brand-ink flex items-center gap-2">
                        DEAN<span class="text-brand-accent">.</span>
                    </a>
                    <div class="space-x-8 text-sm font-medium tracking-wide">
                        <a href="index.html" class="${homeClass} transition-colors">Home</a>
                        <a href="rotoscoping.html" class="${rotoClass} transition-colors">Rotoscoping</a>
                        <a href="solar-system.html" class="${solarClass} transition-colors">Solar System</a>
                    </div>
                </div>
            </nav>
        `;
    }
}
 
customElements.define('portfolio-nav', PortfolioNav);