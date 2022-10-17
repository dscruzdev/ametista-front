const MENU_ITEMS = [
    {
        key: 'home',
        label: 'Início',
        isTitle: false,
        icon: 'uil-home-alt',
        url: 'dashboard/analytics',
    },

    {
        key: 'registers',
        label: 'Cadastros',
        isTitle: false,
        icon: 'uil-file-edit-alt',
        children: [
            {
                key: 'staff',
                label: 'Funcionários',
                url: 'apps/ecommerce/sellers',
                parentKey: 'registers',
            },

            {
                key: 'others',
                label: 'Outros',
                url: 'apps/ecommerce/others',
                parentKey: 'registers',}
        ],
    },

    {
        key: 'tickets',
        label: 'Chamados',
        isTitle: false,
        icon: 'uil-comment-alt-notes',
        url: 'apps/tickets/',
    },

    {
        key: 'apps-chat',
        label: 'Chat',
        isTitle: false,
        icon: 'uil-comments-alt',
        url: '/apps/chat',
    },
    
    {
        key: 'reports',
        label: 'Relatórios',
        isTitle: false,
        icon: 'uil-file-check-alt',
        url: '/apps/chat'
    },
   
];

export default MENU_ITEMS;
