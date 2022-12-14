const MENU_ITEMS = [
    {
        key: 'home',
        label: 'Início',
        isTitle: false,
        icon: 'uil-home-alt',
        url: 'apps/inicio',
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
                url: 'apps/registers/employees',
                parentKey: 'registers',
            },

            {
                key: 'others',
                label: 'Outros',
                url: 'apps/registers/others',
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
        key: 'dash',
        label: 'Dashboard',
        isTitle: false,
        icon: 'uil-tachometer-fast',
        url: '/apps/dash',
    },
   
];

export default MENU_ITEMS;
