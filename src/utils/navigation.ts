enum SCROLL_BEHAVIOUR {
    SMOOTH = 'smooth',
    AUTO = 'auto'
}
export const DEFAULT_BEHAVIOUR = SCROLL_BEHAVIOUR.SMOOTH;

const ROUTES = {
    HOME : {
        route: 'home',
        human: 'Personal'
    },
    CV : {
        route: 'CV',
        human: 'CV'
    },
    PORTFOLIO : {
        route: 'portfolio',
        human: 'Portfolio'
    },
    CONTACT : {
        route: 'contact',
        human: 'Contact'
    },
};
export default ROUTES