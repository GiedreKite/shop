export class Layout {
    constructor() { }

    header() {
        const HTML = '<header>HEADER</header>';
        return HTML;
    }

    main() {
        const HTML = '<main>MAIN</main>';
        return HTML;
    }
    section() {
        const HTML = '<section>Section</section>';
        return HTML
    }

    footer() {
        const HTML = '<footer>FOOTER</footer>';
        return HTML;
    }

    render() {
        const DOM = document.getElementById('app');
        const HTML = this.header() + this.main() + this.section()  + this.section() + this.section() + this.footer() ;

        DOM.insertAdjacentHTML('beforeend', HTML);
    }



}