class PortfolioNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="glass-nav fixed w-full top-0 z-50">
                <div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    <a href="index.html" class="text-xl font-bold tracking-widest text-brand-ink flex items-center gap-2 translate-x-[-20px]">
                        DEAN<span class="text-brand-accent">.</span>
                    </a>
                    <div class="space-x-8 text-sm font-medium tracking-wide">
                        <a href="index.html" class="text-gray-500 hover:text-brand-ink transition-colors">Home</a>
                        <a href="rotoscoping.html" class="text-gray-500 hover:text-brand-ink transition-colors">Rotoscoping</a>
                    </div>
                </div>
            </nav>
        `;
    }
}
 
customElements.define('portfolio-nav', PortfolioNav);